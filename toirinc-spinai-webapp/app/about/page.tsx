'use client'

import { useEffect } from 'react'

export default function ServicesPage() {
  useEffect(() => {
    // Assumes script.js defines openNav(), closeNav(), etc.
    const script = document.createElement('script')
    script.src = '/js/script.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <body className="scroll">
      {/* Side Navigation Menu */}
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
            <p style={{ fontSize: '2vw', textAlign: 'center', fontFamily: 'Roboto Condensed, sans-serif' }} id="infoHeader" />
            <p style={{ fontSize: '1vw', textAlign: 'center', fontFamily: 'Roboto Condensed, sans-serif' }} id="infoMenu" />
          </div>
          <div className="infoDivSpacing" />
        </div>

        <div className="sideMenuLeft" style={{ textAlign: 'right' }}>
          <div id="menuLeftTrans" className="vertical-center">
            {[
              { label: 'ABOUT', href: '/about', hover: 'aboutHover()' },
              { label: 'CAREER', href: '/career', hover: 'careerHover()' },
              { label: 'CONTACT', href: '/contact', hover: 'contactHover()' },
              { label: 'SERVICES', href: '/services', hover: 'servicesHover()' }
            ].map(({ label, href, hover }) => (
              <div
                key={label}
                className="hoverBlock"
                onMouseOver={() => (window as any)[hover]?.()}
                onMouseLeave={() => (window as any).menuHide?.()}
              >
                <a href={href} style={{ WebkitTextStroke: '2px rgba(0,0,0,.25)' }}>{label}</a>
                <div id="menuLeftSpacer" />
              </div>
            ))}
          </div>
        </div>

        <div className="sideMenuRight">
          <div style={{ marginTop: '10vw', paddingLeft: '2vw' }}>
            <a href="mailto:contact@toirinc.com">
              <p style={{ margin: 0 }}>
                <span style={{ fontSize: '1vw' }}>CONTACT@TOIRINC.COM</span>
              </p>
            </a>
            <div id="menuLeftSpacer" />
            <a href="mailto:career@toirinc.com">
              <p style={{ margin: 0 }}>
                <span style={{ fontSize: '1vw' }}>CAREER@TOIRINC.COM</span>
              </p>
            </a>
            <div id="menuLeftSpacer" />
            <a href="tel:+18446051745">
              <p style={{ margin: 0 }}>
                <span style={{ fontSize: '1vw' }}>844-605-1745</span>
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Top Menu Bar */}
      <div>
        <ul className="menuNav">
          <li className="menuli sides">
            <a href="/contact">CONTACT<p>HIT US UP</p></a>
          </li>
          <li className="menuli center">
            <a className="fuckoff" href="/">TOIR<p>HOMEPAGE</p></a>
          </li>
          <li className="menuli sides" style={{ textAlign: 'right' }}>
            <a onClick={() => (window as any).openNav?.()}>MENU<p>CHECK IT OUT</p></a>
          </li>
        </ul>
      </div>
    </body>
  )
}
