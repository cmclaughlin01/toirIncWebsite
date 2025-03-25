'use client'

import { useEffect } from 'react'

export default function ServicesPage() {
  // Load your external script (if you depend on it for interactivity)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/js/script.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="scroll">
      {/* SIDE NAVIGATION */}
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
              style={{
                fontSize: '2vw',
                textAlign: 'center',
                fontFamily: "'Roboto Condensed', sans-serif"
              }}
              id="infoHeader"
            />
            <p
              style={{
                fontSize: '1vw',
                textAlign: 'center',
                fontFamily: "'Roboto Condensed', sans-serif"
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
              <a href="/contact" style={{ WebkitTextStroke: '2px rgba(0,0,0,.25)' }}>
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
            <a
              href="mailto:contact@toirinc.com"
              data-track-action="email submission"
              data-track-category="contact"
            >
              <p style={{ margin: 0 }}>
                <span style={{ fontSize: '1vw' }}>CONTACT@TOIRINC.COM</span>
              </p>
            </a>
            <div id="menuLeftSpacer" />
            <a
              href="mailto:career@toirinc.com"
              data-track-action="email submission"
              data-track-category="contact"
            >
              <p style={{ margin: 0 }}>
                <span style={{ fontSize: '1vw' }}>CAREER@TOIRINC.COM</span>
              </p>
            </a>
            <div id="menuLeftSpacer" />
            <a href="tel:+18446051745" data-track-action="phone call" data-track-category="contact">
              <p style={{ margin: 0 }}>
                <span style={{ fontSize: '1vw' }}>844-605-1745</span>
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* TOP NAVIGATION MENU */}
      <div>
        <ul className="menuNav">
          <li className="menuli sides">
            <a href="/contact">
              CONTACT<p>HIT US UP</p>
            </a>
          </li>
          <li className="menuli center">
            <a className="fuckoff" href="/">
              TOIR<p>HOMEPAGE</p>
            </a>
          </li>
          <li className="menuli sides" style={{ textAlign: 'right' }}>
            <a onClick={() => (window as any).openNav?.()}>
              MENU<p>CHECK IT OUT</p>
            </a>
          </li>
        </ul>
      </div>

      {/* MAIN SERVICES CONTENT */}
      <div className="servicesText">
        <div className="silver servicesDiv">
          <div className="servicesTop">SILVER</div>
          <div className="servicesMid">
            $500k <span style={{ color: '#555', fontSize: '2vw' }}>/month</span>
          </div>
          <div className="servicesBot">
            <ul>
              <li>This</li>
              <li>And this</li>
              <li>And this...</li>
              <li>But thats it</li>
            </ul>
          </div>
          <button className="planButton">Select this plan</button>
        </div>
        <div className="gold servicesDiv">
          <div className="servicesTop">GOLD</div>
          <div className="servicesMid">
            $1 MIL <span style={{ color: '#555', fontSize: '2vw' }}>/month</span>
          </div>
          <div className="servicesBot">
            <ul>
              <li>This</li>
              <li>And this</li>
              <li>And this...</li>
              <li>And this thing</li>
              <li>And this other thing</li>
            </ul>
          </div>
          <button className="planButton">Select this plan</button>
        </div>
        <div className="bronze servicesDiv">
          <div className="servicesTop">BRONZE</div>
          <div className="servicesMid">
            $29.99 <span style={{ color: '#555', fontSize: '2vw' }}>/month</span>
          </div>
          <div className="servicesBot">
            <ul>
              <li>This</li>
              <li>And this</li>
              <li>Even less things</li>
            </ul>
          </div>
          <button className="planButton">Select this plan</button>
        </div>
      </div>
    </div>
  )
}
