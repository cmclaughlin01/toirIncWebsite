
<?php
echo "<form method='post'>\n";
echo "<input name='name'>\n";
echo "<input name='email'>\n";
echo "<input name='num'>\n";
echo "<input name='comments'>\n";
echo "\n";
echo "\n";
echo "\n";
echo "<input name='submit'type='submit'>\n";
echo "</form>";
if ($_REQUEST['submit']){
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
$from = "contact@toirinc.com";
$to = "contact@toirinc.com";
$subject = "Checking PHP mail";
$message = "Name: "+$_REQUEST["name"]+"\n
            Email: "+$_REQUEST["email"]+"\n
            Number: "+$_REQUEST["num"]+"\n
            Comments: "+$_REQUEST["comments"];
$headers = "From:" . $from;
if(mail($to,$subject,$message, $headers)) {
    echo "The email message was sent.";
} else {
    echo "The email message was not sent.";
}
}
?>
