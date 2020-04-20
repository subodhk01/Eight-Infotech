<?php
$first-name=$_POST['first-name'];
$last-name=$_POST['last-name'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];

$queryData = "Hi Deepesh,\n You have one query.\n Name: "+$first-name+" "+$last-name+",\n Email: "+$email+",\n Subject:"+$subject+",\n Message: "+$message+".";
$subjectLine = "Query for Eight Infotech"
mail("deepeshsonaniya@gmail.com", $subjectLine, $queryData);
?>