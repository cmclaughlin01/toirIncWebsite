<?php

if($_POST["message"]) {

mail("daniele@toirinc.com", "Here is the subject line",

$_POST["insert your message here"]. "From: contact@toirinc.com");

}

?>