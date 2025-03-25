'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NotFound() {
  const router = useRouter()

  // Optionally load your external script if needed (for functions like openNav, closeNav, etc.)
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
                (window as any).aboutHover?.()
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
                (window as any).careerHover?.()
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
                (window as any).contactHover?.()
              }}
              onMouseLeave={() => (window as any).menuHide?.()}
            >
              <a href="/contact" onClick={() => (window as any).closeNav?.()} style={{ WebkitTextStroke: '2px rgba(0,0,0,.25)' }}>
                CONTACT
              </a>
            </div>
            <div id="menuLeftSpacer" />
            <div
              className="hoverBlock"
              onMouseOver={() => {
                (window as any).menuHover?.()
                (window as any).servicesHover?.()
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

      {/* TOP MENU BAR */}
      <div className="topBar" style={{ paddingBottom: '3vw' }}>
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

      {/* ERROR CONTENT */}
      <div className="mainText errorText">
        <div>
          <h1>Oh no! Looks like this page doesn't exist...</h1>
        </div>
        <div>
          <img style={{ width: '40vw' }} src="/img/404.svg" alt="404 error illustration" />
        </div>
        <div>
          <button
            className="submitButton"
            style={{ transform: 'translateY(0vw)', width: '30vw', height: '5vw', fontSize: '1vw' }}
            onClick={() => router.push('/')}
          >
            Return to the homepage
          </button>
        </div>
      </div>
    </div>
  )
}
