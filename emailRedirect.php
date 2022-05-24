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
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet">
    <script src="js/script.js"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-229619707-1">
    </script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-229619707-1');
    </script>
</head>

<body class="scroll" onload="redirectWait()">
  <?
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "contact@toirinc.com";
    $to = "contact@toirinc.com";
    $subject = "Website Submission: ".$_REQUEST["name"].": ".$_REQUEST["comments"];
    $message = "Name: ".$_REQUEST["name"]."\nEmail: ".$_REQUEST["email"]."\nNumber: ".$_REQUEST["num"]."\nComments: ".$_REQUEST["comments"];
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers)
  ?>
    <div id="mySidenav" class="sidenav" style="margin-top: 0%;">
        <div><a style=" padding-top: 1%; padding-right:5%; font-size: 1.25vw; color: black;" href="javascript:void(0)"
            class="closebtn" onclick="closeNav()">
            <!--&times;-->close</a></div>
    
        <div class="sideMenuCenter">
          <div class="infoDivSpacing">
    
          </div>
          <div class="menuChild infoDivSpacing textan" id="infoAnimation">
    
            <p style="font-size: 2vw; text-align: center; font-family: 'Roboto Condensed', sans-serif;" id="infoHeader"></p>
            <p style="font-size: 1vw; text-align: center; font-family: 'Roboto Condensed', sans-serif; white-space: normal;"
              id="infoMenu"></p>
    
          </div>
          <div class="infoDivSpacing">
    
          </div>
    
        </div>
        <div class="sideMenuLeft" style="text-align: right;">
          <div id="menuLeftTrans" class="vertical-center">
            <div class="hoverBlock" onmouseover="menuHover(); aboutHover()" onmouseleave="menuHide()">
              <a href="about/index.html" style="-webkit-text-stroke: 2px rgba(0,0,0,.25);">ABOUT</a>
            </div>
            <div id="menuLeftSpacer"></div>
            <div class="hoverBlock" onmouseover="menuHover(); careerHover()" onmouseleave="menuHide()">
              <a href="career/index.html" style="-webkit-text-stroke: 2px rgba(0,0,0,.25);">CAREER</a>
            </div>
            <div id="menuLeftSpacer"></div>
            <div class="hoverBlock" onmouseover="menuHover(); contactHover()" onmouseleave="menuHide()">
              <a href="contact/index.html" style="-webkit-text-stroke: 2px rgba(0,0,0,.25);">CONTACT</a>
            </div>
            <div id="menuLeftSpacer"></div>
            <div class="hoverBlock" onmouseover="menuHover(); servicesHover()" onmouseleave="menuHide()">
              <a href="services/index.html" style="-webkit-text-stroke: 2px rgba(0,0,0,.25);">SERVICES</a>
            </div>
          </div>
        </div>
        <div class="sideMenuRight">
          <div style="margin-top: 10vw; padding-left: 2vw;">
            <a href="mailto:contact@toirinc.com" data-track-action="email submission" data-track-category="contact">
              <!--creates the email svg with the dot class the makes a cricle that the svg is held in-->
              <p style="margin: 0;">
                <span style="font-size: 1vw;">CONTACT@TOIRINC.COM</span>
              </p>
            </a>
            <div id="menuLeftSpacer"></div>
            <a href="mailto:career@toirinc.com" data-track-action="email submission" data-track-category="contact">
              <!--creates the email svg with the dot class the makes a cricle that the svg is held in-->
              <p style="margin: 0;">
                <span style="font-size: 1vw;">CAREER@TOIRINC.COM</span>
              </p>
            </a>
            <div id="menuLeftSpacer"></div>
            <a href="tel:+1669XXXXXXX" data-track-action="phone call" data-track-category="contact">
              <p style="margin: 0;">
                <span style="font-size: 1vw;">+1 (669)XXX-XXXX</span>
              </p>
            </a>
          </div>
        </div>
    
      </div>
    
    
      <!--makes an unordered list that sticked to the top of the screen as a menu-->
      <div class="topBar">
        <ul class="menuNav">
          <li class="menuli sides"><a href="contact/index.html">CONTACT
              <p>HIT US UP</p>
            </a></li>
          <li class="menuli center"><a class="fuckoff" href="index.html">TOIR
              <p>HOMEPAGE</p></a></li>
          <li class="menuli sides" style="text-align: right;"><a onclick="openNav()">MENU
              <p>CHECK IT OUT</p>
            </a></li>
        </ul>
        <!--link to contact page-->
      </div>
      <div class="mainText" style="margin-top:10vw;">
        <p class="titleText" style="text-align: center;">THANK YOU!</p>
      </div>
      <div class="mainText">
        <p>Redirecting in <b id="seconds">5</b> seconds</p>
      </div>
</body>

</html>