<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
  <title>Toir Inc.</title>
  <!--<link rel="stylesheet" type="text/css" href="css/style.css">-->
  <link rel="stylesheet" type="text/css" href="css/styleToir.css">
  <link rel="stylesheet" type="text/css" href="css/mobileStyle.css">
  <link rel="stylesheet" type="text/css" href="css/menu.css">
  <!--<link rel="shortcut icon" href="../Tulsium/images/TulsiumLogo-1.png">-->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap" rel="stylesheet">
  <script src="js/script.js"></script>
</head>
    <body>
    <div id="mySidenav" class="sidenav" style="margin-top: 0%;">
    <div><a style=" padding-top: 1%; padding-right:0%; font-size: xx-large; color: black;" href="javascript:void(0)" class="closebtn" onclick="closeNav()"><!--&times;-->close</a></div>
    <div class="sideMenuLeft" style="border-right: black;">
      <div class="sideMenu hoverBlock" onmouseover="menuHover(); aboutHover()" onmouseleave="menuHide()">
        <a href="about/index.html" style="-webkit-text-stroke: 2px rgba(0,0,0,.25);">ABOUT</a>
      </div>
      <div class="sideMenu hoverBlock" onmouseover="menuHover(); careerHover()" onmouseleave="menuHide()">
        <a href="career/index.html">CAREER</a>
      </div>
      <div class="sideMenu menuParent hoverBlock" onmouseover="menuHover(); contactHover()" onmouseleave="menuHide()">
        <a href="contact/index.html" style="-webkit-text-stroke: 2px rgba(0,0,0,.25);">CONTACT</a>
      </div>
      <div class="sideMenu menuParent hoverBlock" onmouseover="menuHover(); servicesHover()" onmouseleave="menuHide()">
        <a href="services/index.html">SERVICES</a>
      </div>
    </div>
    <div class="sideMenuCenter">
      <div class="infoDivSpacing" style="background-color: black;">

      </div>
      <div class="menuChild infoDivSpacing" id="tryHard">
        <p style="font-size: 125%;padding-top: 10%;padding-left: 0%;">Come and make your impact at Tulsium</p>
      </div>
      <div class="infoDivSpacing" style="background-color: black;">

      </div>

    </div>
    <div class="sideMenuRight">

    </div>
        
  </div>
        <?php
        ini_set( 'display_errors', 1 );
        error_reporting( E_ALL );
        $from = "contact@toirinc.com";
        $to = "";
        $subject = "Checking PHP mail";
        $message = "PHP mail works just fine";
        $headers = "From:" . $from;
        if(mail($to,$subject,$message, $headers)) {
            echo "The email message was sent.";
        } else {
            echo "The email message was not sent.";
        }
        ?>
    </body> 
</html>