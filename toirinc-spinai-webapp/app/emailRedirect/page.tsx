'use client'

import { useEffect, useState } from 'react'

export default function EmailRedirectPage() {
  const [seconds, setSeconds] = useState(5)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)

    const timeout = setTimeout(() => {
      window.location.href = '/'
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <main className="scroll">
      <div className="topBar">
        <ul className="menuNav">
          <li className="menuli sides"><a href="/contact">CONTACT<p>HIT US UP</p></a></li>
          <li className="menuli center"><a href="/">TOIR<p>HOMEPAGE</p></a></li>
          <li className="menuli sides" style={{ textAlign: 'right' }}>
            <a onClick={() => document.getElementById('mySidenav')?.classList.add('open')}>MENU<p>CHECK IT OUT</p></a>
          </li>
        </ul>
      </div>

      <div className="mainText" style={{ marginTop: '10vw' }}>
        <p className="titleText" style={{ textAlign: 'center' }}>THANK YOU!</p>
      </div>
      <div className="mainText">
        <p>Redirecting in <b id="seconds">{seconds}</b> seconds</p>
      </div>
    </main>
  )
}
