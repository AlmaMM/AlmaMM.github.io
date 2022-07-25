<?php
$myFile = "data.txt";
$fh = fopen($myFile, 'a') or die("can't open file");
$stringData = $_POST["data"];
fwrite($fh, $stringData.PHP_EOL);
fclose($fh)
?>