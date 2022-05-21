<div class="form">
    <?php
    echo "<div>";
    echo "<form method='post' style='center'>\n";
    echo "";
    echo "<p>Name</p>";
    echo "<input name='name'>\n";
    echo "<p>Email</p>";
    echo "<input name='email'>\n";
    echo "<p>Mobile Number</p>";
    echo "<input name='num'>\n";
    echo "<p>Comments</p>";
    echo "<input name='comments' style='height:10vw; width:20vw;'>\n";
    echo "<br>";
    echo "<input name='submit' class='submitButton' type='submit'value='Send us a message!'>\n";
    echo "";
    echo "";
    echo "</form>";
    echo "</div>";
    if ($_REQUEST['email']!=""){
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "contact@toirinc.com";
    $to = "contact@toirinc.com";
    $subject = "Website Submission: ".$_REQUEST["name"].": ".$_REQUEST["comments"];
    $message = "Name: ".$_REQUEST["name"]."\nEmail: ".$_REQUEST["email"]."\nNumber: ".$_REQUEST["num"]."\nComments: ".$_REQUEST["comments"];
    $headers = "From:" . $from;
    if(mail($to,$subject,$message, $headers)) {
        echo "The email message was sent.";
    } else {
        echo "The email message was not sent.";
    }
    } else {
    $_POST['email']='';
    }
    ?>
  </div>