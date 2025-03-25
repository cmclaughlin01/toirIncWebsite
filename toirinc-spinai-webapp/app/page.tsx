'use client'

import { useEffect } from 'react'

export default function LandingPage() {
  // 1) Scroll listener for top nav classes
  useEffect(() => {
    const updateNavClasses = () => {
      const menuNav = document.getElementById('menuNav')
      const menuItem = document.getElementById('menuItem')
      const menuItem2 = document.getElementById('menuItem2')
      const menuItem3 = document.getElementById('menuItem3')

      if (window.scrollY <= 50) {
        menuNav?.classList.add('menuNavToggle')
        menuItem?.classList.add('menuliToggle')
        menuItem2?.classList.add('menuliToggle')
        menuItem3?.classList.add('menuliToggle')
      } else {
        menuNav?.classList.remove('menuNavToggle')
        menuItem?.classList.remove('menuliToggle')
        menuItem2?.classList.remove('menuliToggle')
        menuItem3?.classList.remove('menuliToggle')
      }
    }

    updateNavClasses() // initial check
    window.addEventListener('scroll', updateNavClasses)
    return () => window.removeEventListener('scroll', updateNavClasses)
  }, [])

  // 2) Load external anim script that uses GSAP
  useEffect(() => {
    const animScript = document.createElement('script')
    animScript.src = '/js/anim.js'
    animScript.async = true
    document.body.appendChild(animScript)
    return () => {
      document.body.removeChild(animScript)
    }
  }, [])

  return (
    <div className="scroll">
      {/* HERO VIDEO */}
      <div id="da_video">
        <video
          className="heroVideo"
          // src="/img/pexels-oleksiy-koval-8885708.mp4"
          src="../../public/img/pexels-oleksiy-koval-8885708.mp4"
          muted
          loop
          autoPlay
        />
      </div>

      {/* SIDE NAV */}
      <div id="mySidenav" className="sidenav" style={{ marginTop: '0%' }}>
        <div>
          <a
            style={{ paddingTop: '1%', paddingRight: '5%', fontSize: '1.25vw', color: 'black' }}
            href="javascript:void(0)"
            className="closebtn"
            onClick={() => (window as any).closeNav?.()}
          >
            close
          </a>
        </div>

        <div className="sideMenuCenter">
          <div className="infoDivSpacing" />
          <div className="menuChild infoDivSpacing textan" id="infoAnimation">
            <p
              style={{ fontSize: '2vw', textAlign: 'center', fontFamily: "'Roboto Condensed', sans-serif" }}
              id="infoHeader"
            />
            <p
              style={{
                fontSize: '1vw',
                textAlign: 'center',
                fontFamily: "'Roboto Condensed', sans-serif",
                whiteSpace: 'normal'
              }}
              id="infoMenu"
            />
          </div>
          <div className="infoDivSpacing" />
        </div>

        <div className="sideMenuLeft" style={{ textAlign: 'right' }}>
          <div id="menuLeftTrans" className="vertical-center">
            <div
              className="hoverBlock"
              onMouseOver={() => {
                (window as any).menuHover?.()
                ;(window as any).aboutHover?.()
              }}
              onMouseLeave={() => (window as any).menuHide?.()}
            >
              <a href="/about" style={{ WebkitTextStroke: '2px rgba(0,0,0,.25)' }}>
                ABOUT
              </a>
            </div>
            <div id="menuLeftSpacer" />
            <div
              className="hoverBlock"
              onMouseOver={() => {
                (window as any).menuHover?.()
                ;(window as any).careerHover?.()
              }}
              onMouseLeave={() => (window as any).menuHide?.()}
            >
              <a href="/career" style={{ WebkitTextStroke: '2px rgba(0,0,0,.25)' }}>
                CAREER
              </a>
            </div>
            <div id="menuLeftSpacer" />
            <div
              className="hoverBlock"
              onMouseOver={() => {
                (window as any).menuHover?.()
                ;(window as any).contactHover?.()
              }}
              onMouseLeave={() => (window as any).menuHide?.()}
            >
              <a
                href="/contact"
                onClick={() => (window as any).closeNav?.()}
                style={{ WebkitTextStroke: '2px rgba(0,0,0,.25)' }}
              >
                CONTACT
              </a>
            </div>
            <div id="menuLeftSpacer" />
            <div
              className="hoverBlock"
              onMouseOver={() => {
                (window as any).menuHover?.()
                ;(window as any).servicesHover?.()
              }}
              onMouseLeave={() => (window as any).menuHide?.()}
            >
              <a href="/services" style={{ WebkitTextStroke: '2px rgba(0,0,0,.25)' }}>
                SERVICES
              </a>
            </div>
          </div>
        </div>

        <div className="sideMenuRight">
          <div style={{ marginTop: '10vw', paddingLeft: '2vw' }}>
            <a href="mailto:contact@toirinc.com" data-track-action="email submission" data-track-category="contact">
              <p style={{ margin: 0 }}>
                <span style={{ fontSize: '1vw' }}>CONTACT@TOIRINC.COM</span>
              </p>
            </a>
            <div id="menuLeftSpacer" />
            <a href="mailto:career@toirinc.com" data-track-action="email submission" data-track-category="contact">
              <p style={{ margin: 0 }}>
                <span style={{ fontSize: '1vw' }}>CAREER@TOIRINC.COM</span>
              </p>
            </a>
            <div id="menuLeftSpacer" />
            <a href="tel:+18446051745" data-track-action="phone call" data-track-category="contact">
              <p style={{ margin: 0 }}>
                <span style={{ fontSize: '1vw' }}>+1 (844)605-1745</span>
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* TOP NAV MENU */}
      <div className="topBar">
        <ul className="menuNav" id="menuNav">
          <li className="menuli sides" id="menuItem">
            <a href="/contact">
              CONTACT
              <p>HIT US UP</p>
            </a>
          </li>
          <li className="menuli center" id="menuItem2">
            <a className="fuckoff" href="/">
              TOIR
              <p>HOMEPAGE</p>
            </a>
          </li>
          <li className="menuli sides" style={{ textAlign: 'right' }} id="menuItem3">
            <a onClick={() => (window as any).openNav?.()}>
              MENU
              <p>CHECK IT OUT</p>
            </a>
          </li>
        </ul>
      </div>

      {/* MINI TEXT */}
      <div className="miniText">
        <ul>
          <li><a href="">Linkedin</a></li>
          <li><a href="">Facebook</a></li>
          <li><a href="">contact@toirinc.com</a></li>
          <li><a href="">844-605-1745</a></li>
        </ul>
      </div>

      {/* MAIN TEXT */}
      <div className="mainText">
        <span id="changePursuit">
          IN THE{' '}
          <a
            className="pursuitHero"
            id="heroChange"
            onMouseOver={() => (window as any).textUpdate?.()}
            onMouseLeave={() => (window as any).textUpdate2?.()}
          >
            PURSUIT
          </a>
        </span>
        <span>OF YOUR NEXT</span>
        <span className="sideKickText">
          No matter where it takes us, even if it takes us into a field of flowers.
          Our mission at Toir inc. is to always connect you with your next client
        </span>
        <span>
          <a className="customerHero">CUSTOMER</a>
        </span>
        <div className="mainPageArrow">
          <a>
            <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
          </a>
        </div>
      </div>

      {/* DA IMAC SECTION */}
      <section className="daIMAC">
        {/* firstBlock */}
        <div className="firstBlock">
          <div className="marketingSvg">
            <img
              className="marketingText"
              style={{ width: '60%' }}
              src="/img/googleMarketingLetters.svg"
              alt="Google Marketing Letters"
            />
          </div>
          <div className="firstText">
            <p>
              Every day Google receives over 5 billion searches. We at Toir connect those searches to your business.
              Our team of professionals creates Ad campaigns that fit your business' needs. From small mom-and-pop shops
              to multi-million dollar enterprises, everyone can benefit from our services. As a small business we
              understand how hard it can be to get new customers, so let us help you grow.
            </p>
          </div>
        </div>

        {/* SCREEN */}
        <div id="screen">
          <div className="threeGoogleSvg">
            <div className="googleAds" id="googleAds">
              <img
                className="adsAni"
                style={{ width: '50%' }}
                src="/img/googleAdsLogo.svg"
                alt="Google Ads Logo"
              />
              <div style={{ width: '100%' }} />
              <img
                className="adsText"
                id="adsAniLetters"
                style={{ width: '35%', transform: 'translateX(2.4vw)' }}
                src="/img/googleAdsLetters.svg"
                alt="Google Ads Letters"
              />
            </div>
            <div className="googleMarketing logoBig">
              <img
                className="marketingAni"
                style={{ width: '50%' }}
                src="/img/googleMarketingLogo.svg"
                alt="Google Marketing Logo"
              />
              <img
                className="marketingText"
                style={{ width: '60%' }}
                src="/img/googleMarketingLetters.svg"
                alt="Google Marketing Letters"
              />
            </div>
            <div className="googleMan" style={{ float: 'left' }} id="googleManager">
              <img
                className="managerAni"
                style={{ width: '50%' }}
                src="/img/googleManagerLogo.svg"
                alt="Google Manager Logo"
              />
              <img
                className="managerText"
                style={{ width: '65%', transform: 'translateX(2vw)' }}
                src="/img/googleManagerLetters.svg"
                alt="Google Manager Letters"
              />
            </div>
          </div>

          <div className="googleSearchBar show-on-scroll" id="SearchBar">
            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1743.04 782.6">
              <defs>
                <style>{`
                  .cls-1 { fill: #fff; stroke: #dedede; }
                  .cls-1, .cls-2 { stroke-miterlimit: 10; stroke-width: 6px; }
                  .cls-3 { fill: #4285f4; }
                  .cls-4 { fill: #fbbc05; }
                  .cls-5 { fill: #34a853; }
                  .cls-6 { fill: #fff; }
                  .cls-2 { fill: none; stroke: none; }
                  .cls-7 { fill: #ea4335; }
                  .cls-8 { fill: none; stroke: #9e9a9a; stroke-miterlimit: 10; stroke-width: 3px; }
                  .cls-9 { fill: #9e9a9a; }
                  .lineStarting { fill: none; stroke: #757575; stroke-miterlimit: 10; stroke-width: 6px; }
                `}</style>
              </defs>
              <g>
                {/* BACKGROUND */}
                <path className="cls-1" d="M100.04,3S3.04,9,3.04,111s97,106.9,97,106.9H1640.04s100-.9,100-107.9S1640.04,3,1640.04,3H100.04Z" />
                {/* Search Bar Text */}
                <path className="cls-6" d="M210.65,84.26h6.7v46.27h22.17v5.62h-28.87v-51.9h0Z" />
                <path className="cls-6" d="M249.46,118.76c.15,9.16,6.01,12.94,12.78,12.94,4.85,0,7.78-.85,10.32-1.92l1.15,4.85c-2.39,1.08-6.47,2.31-12.4,2.31-11.47,0-18.33-7.55-18.33-18.79s6.62-20.1,17.48-20.1c12.17,0,15.4,10.7,15.4,17.55,0,1.39-.15,2.46-.23,3.16h-26.17Zm19.86-4.85c.08-4.31-1.77-11.01-9.39-11.01-6.85,0-9.86,6.31-10.39,11.01h19.78Z" />
              </g>
              <g>
                {/* GOOGLE LOGO */}
                <path className="cls-3" d="M162.38,113.83c0-2.9-.26-5.66-.7-8.34h-41.51v16.57h23.77c-1.07,5.44-4.19,10.03-8.82,13.15v11.02h14.18c8.3-7.68,13.08-18.99,13.08-32.4Z" />
                <path className="cls-5" d="M120.17,156.92c11.9,0,21.86-3.97,29.13-10.69l-14.18-11.02c-3.97,2.64-9,4.26-14.95,4.26-11.5,0-21.23-7.75-24.72-18.22h-14.62v11.35c7.24,14.4,22.11,24.32,39.34,24.32h0Z" />
                <path className="cls-4" d="M95.45,121.25c-.92-2.64-1.4-5.47-1.4-8.41s.51-5.77,1.4-8.41v-11.35h-14.62c-3.01,5.95-4.74,12.64-4.74,19.76s1.73,13.81,4.74,19.76l14.62-11.35Z" />
                <path className="cls-7" d="M120.17,86.21c6.5,0,12.31,2.24,16.9,6.61l12.56-12.56c-7.6-7.13-17.56-11.5-29.46-11.5-17.23,0-32.1,9.92-39.34,24.32l14.62,11.35c3.49-10.47,13.22-18.22,24.72-18.22Z" />
              </g>
              {/* LINES */}
              <line className="cls-2" x1="240.04" y1="48" x2="240.04" y2="173" />
              <line className="cls-2" x1="279.2" y1="48" x2="279.2" y2="173" />
              <line className="cls-2" x1="305.04" y1="48" x2="305.04" y2="173" />
              <line className="cls-2" x1="360.04" y1="48" x2="360.04" y2="173" />
              <line className="cls-2" x1="393.04" y1="48" x2="393.04" y2="173" />
              <line className="cls-2" x1="445.04" y1="48" x2="445.04" y2="173" />
              <line className="cls-2" x1="485.04" y1="48" x2="485.04" y2="173" />
              <line className="cls-2" x1="525.04" y1="48" x2="525.04" y2="173" />
              <line className="cls-2" x1="568.04" y1="48" x2="568.04" y2="173" />
              <line className="cls-2" x1="610.04" y1="48" x2="610.04" y2="173" />
              <line className="cls-2" x1="645.04" y1="48" x2="645.04" y2="173" />
              <line className="cls-2" x1="670.04" y1="48" x2="670.04" y2="173" />
              <line className="cls-2" x1="725.04" y1="48" x2="725.04" y2="173" />
              <line className="cls-2" x1="763.04" y1="48" x2="763.04" y2="173" />
              <line className="cls-2" x1="805.04" y1="48" x2="805.04" y2="173" />
              <line className="cls-2" x1="850.04" y1="48" x2="850.04" y2="173" />
              <line className="cls-2" x1="890.04" y1="48" x2="890.04" y2="173" />
              <line className="cls-2" x1="947.04" y1="48" x2="947.04" y2="173" />
              <line className="cls-2" x1="987.04" y1="48" x2="987.04" y2="173" />
              <line className="cls-2" x1="1047" y1="48" x2="1047" y2="173" />
              <line className="cls-2" x1="1097" y1="48" x2="1097" y2="173" />
              <line className="cls-2" x1="1135" y1="48" x2="1135" y2="173" />
              <line className="cls-2" x1="1167" y1="48" x2="1167" y2="173" />
              <line className="cls-2" x1="1195" y1="48" x2="1195" y2="173" />
              <line className="cls-2" x1="1235" y1="48" x2="1235" y2="173" />
              <line className="cls-2" x1="1298" y1="48" x2="1298.04" y2="173" />
              <line className="cls-2" x1="1337" y1="48" x2="1337" y2="173" />
              <line className="cls-2" x1="1365" y1="48" x2="1365" y2="173" />
              <line className="cls-2" id="lineEnding" x1="1395" y1="48" x2="1395" y2="173" />
              <g>
                {/* MICROPHONE */}
                <path className="cls-3" d="M1641.62,123.42c-7.32,0-13.25-5.93-13.25-13.25v-30.93c0-7.32,5.93-13.25,13.25-13.25s13.25,5.93,13.25,13.25v30.93c0,7.32-5.93,13.25-13.25,13.25Z" />
                <rect className="cls-5" x="1637.22" y="138.48" width="8.84" height="16.2" />
                <path className="cls-7" d="M1663.75,110.34c-.02,12.19-9.94,22.11-22.13,22.11-6.11,0-11.67-2.5-15.68-6.53l-6.18,6.18c5.59,5.59,13.31,9.07,21.86,9.07,17.03,0,30.84-13.81,30.86-30.84h-8.73v.02h0Z" />
                <path className="cls-4" d="M1625.94,125.92c-3.97-3.99-6.45-9.5-6.45-15.58h-8.73c0,8.49,3.45,16.18,9.01,21.75l6.18-6.18h-.01Z" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* content-Two */}
      <div className="content-Two">
        {/* Add your content here if needed */}
      </div>

      <div id="content-four">
        <div className="moreSpace" />
        <div className="contentFourMainText">
          <span>HOW</span>
          <span>TOIR</span>
          <span>IS</span>
          <span>REDEFINING</span>
          <span>MARKETING</span>
        </div>
        <div>
          1. We are so over having to call to find out the price. Why not know exactly what you're getting into before wasting your time.
        </div>
        <div>
          2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec.
        </div>
        <div>
          3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec.
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div>
          <div>
            <table style={{ width: '100%', border: 'none' }} id="footer">
              <tbody>
                <tr>
                  <td style={{ width: '33.33%', border: 'none' }}>
                    <svg
                      style={{ width: '30%', fill: 'white', marginLeft: '20%' }}
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 62.55 93.37"
                    >
                      <defs>
                        <style>{`.cls-1 { fill: none; }`}</style>
                      </defs>
                      <path
                        d="M64.67,81.23h0a1.25,1.25,0,0,1,1.25,1.25h0a1.26,1.26,0,0,1-1.25,1.26h0a1.26,1.26,0,0,1-1.25-1.26h0A1.25,1.25,0,0,1,64.67,81.23Zm0,3.8h0a1.25,1.25,0,0,1,1.25,1.26v7a1.25,1.25,0,0,1-1.25,1.25h0a1.25,1.25,0,0,1-1.25-1.25v-7A1.25,1.25,0,0,1,64.67,85Z"
                        transform="translate(-23.92 -4)"
                      />
                      <path
                        d="M75.42,85.91a2.8,2.8,0,0,0-2.32-1,2.49,2.49,0,0,0-1.5.44,3.19,3.19,0,0,0-.84,1v0a1.26,1.26,0,1,0-2.51,0v7a1.26,1.26,0,0,0,2.51,0V88.79a1.5,1.5,0,0,1,.38-1.09,1.42,1.42,0,0,1,1.07-.39,1.57,1.57,0,0,1,1.13.38,1.43,1.43,0,0,1,.4,1.08v4.5a1.26,1.26,0,0,0,2.51,0V88.76A4.38,4.38,0,0,0,75.42,85.91Z"
                        transform="translate(-23.92 -4)"
                      />
                      <path
                        d="M82.47,94.66a4.34,4.34,0,0,1-2.06-.52h0a3.44,3.44,0,0,1-1.47-1.5,5.26,5.26,0,0,1-.5-2.38v-1a5.17,5.17,0,0,1,.5-2.36,3.44,3.44,0,0,1,1.47-1.48,4.91,4.91,0,0,1,2.32-.51,6.3,6.3,0,0,1,1.47.17,4.56,4.56,0,0,1,1.23.52,2.12,2.12,0,0,1,.46.34.65.65,0,0,1-.06.88l-.68.67a1,1,0,0,1-.75.22,5,5,0,0,0-.48-.21,2.7,2.7,0,0,0-1-.18,2,2,0,0,0-1.47.51A1.89,1.89,0,0,0,81,89.25v1a1.81,1.81,0,0,0,2,2,2.72,2.72,0,0,0,1-.19,1,1,0,0,0,.36-.2c.44-.32.63-.17.95.17l.66.67a.77.77,0,0,1,.25.45.58.58,0,0,1-.18.41,2.61,2.61,0,0,1-.54.42,4.75,4.75,0,0,1-1.24.51,6.22,6.22,0,0,1-1.46.17Z"
                        transform="translate(-23.92 -4)"
                      />
                    </svg>
                  </td>
                  <td style={{ width: '33.33%', border: 'none' }}>
                    <div className="footerContact" style={{ marginTop: '-5%' }}>
                      <p style={{ color: 'white' }}>Useful links</p>
                      <a href="/index.html">Home</a>
                      <br />
                      <a href="/Team/index.html">Team</a>
                      <br />
                      <a href="/career/index.html">Career</a>
                      <br />
                      <a href="/About/index.html">About</a>
                      <br />
                    </div>
                  </td>
                  <td style={{ width: '33.33%', border: 'none' }}>
                    <p style={{ marginTop: '5.5%', color: 'white' }}>Contacts</p>
                    <div style={{ fontSize: '50%' }}>
                      <p style={{ color: 'white' }}>Tony@tulsium.com</p>
                      <br />
                      <p style={{ color: 'white' }}>+1(702)448-4458</p>
                      <br />
                      <p style={{ color: 'white' }}>848 N Rainbow Blvd.</p>
                      <p style={{ color: 'white' }}>#3873 Las Vegas,</p>
                      <p style={{ color: 'white' }}>NV 89107</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </footer>
    </div>
  )
}
