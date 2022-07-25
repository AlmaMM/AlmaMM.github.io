<?php
$myFile = "data.txt";
$lines = [];
$stringData = $_POST["data"];
$dataValues = explode(";", $stringData);
$user = $dataValues[0];
$check = $dataValues[1];
$output = 0; // If the user was registered and didnt read the policies but the new value is checked and so you have to update it => $output = 1
// If the user was registered and the check was on so you dont want to update neither to append => $output = 3
// If the user was not registered so you want to append => $output = 2

$fh = fopen($myFile, 'a+') or die("can't open file");

/*$content = fread($fh, filesize($fh));
$lines = explode(";;", $content);
for($i=0; $i<count($lines); $i++){
    $line = explode(";", $lines[$i]);
    if(strcmp($line[0],$user)==0){
        if(strcmp($line[1],$check!=0) && $check == 'on'){
            $output = 1;
            $content = str_replace($line, ($user.";".$check.";;").PHP_EOL, $content);
            fwrite($fh, $content);
        }
    }else{
        $content = $content.($user.";".$check.";;").PHP_EOL;
        fwrite($fh, $content);
        $output = 2;
    }
}*/
fwrite($fh, $stringData.PHP_EOL);
fclose($fh)
?>