'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    num: '',
    comments: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        window.location.href = '/emailRedirect'
      } else {
        alert('Failed to send email')
      }
    } catch (err) {
      console.error(err)
      alert('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <body className="scroll" style={{ overflow: 'hidden', height: '100vh' }}>
      {/* Navigation */}
      <div className="topBar">
        <ul className="menuNav">
          <li className="menuli sides">
            <a href="/contact">CONTACT<p>HIT US UP</p></a>
          </li>
          <li className="menuli center">
            <a className="fuckoff" href="/">TOIR<p>HOMEPAGE</p></a>
          </li>
          <li className="menuli sides" style={{ textAlign: 'right' }}>
            <a onClick={() => document.getElementById('mySidenav')?.classList.add('open')}>MENU<p>CHECK IT OUT</p></a>
          </li>
        </ul>
      </div>

      {/* Background SVGs */}
      <div>
        <img className="contactBackground" src="/img/sfSkylineGray.svg" />
        <img className="contactBackground" src="/img/sfSkylineDarkGrey.svg" />
        <img className="contactBackground" src="/img/sfSkylineBlack.svg" />
      </div>

      {/* Contact Title */}
      <div className="contactTitle" style={{ position: 'sticky' }}>
        <h1> Contact Us</h1>
        <h2> Curious about something? Ask us a question!</h2>
      </div>

      {/* Contact Form */}
      <div className="card" style={{ paddingLeft: '1rem' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ float: 'left', width: '66%' }}>
            <div className="formInput">
              <div className="input">
                <input name="name" className="input_field" required value={formData.name} onChange={handleChange} />
                <label className="input_label">Full Name</label>
              </div>
              <div className="input">
                <input name="email" className="input_field" required value={formData.email} onChange={handleChange} />
                <label className="input_label">Email</label>
              </div>
              <div className="input">
                <input name="num" className="input_field" required value={formData.num} onChange={handleChange} />
                <label className="input_label">Mobile Number</label>
              </div>
              <div className="input" style={{ height: '100%' }}>
                <textarea name="comments" className="input_field" required value={formData.comments} onChange={handleChange} />
                <label className="inputText input_label">Comments</label>
              </div>
            </div>
          </div>

          {/* Side Text & Social */}
          <div style={{ float: 'right', paddingLeft: '1rem', paddingTop: '1rem' }} className="card-SideText">
            <p style={{ fontSize: '1.5vw' }}>CONTACT</p>
            <p><i>contact@toirinc.com</i></p>
            <p><i>844-605-1745</i></p>
            <br />
            <p style={{ fontSize: '1.5vw' }}>BASED IN</p>
            <p><i>Bay Area,</i></p>
            <p><i>California</i></p>
            <div style={{ height: '2rem' }} />
            <div>
              <a href="#" className="fa fa-facebook" style={{ fontSize: '2vw' }} />
              <a href="#" className="fa fa-google" style={{ fontSize: '2vw' }} />
              <a href="#" className="fa fa-linkedin" style={{ fontSize: '2vw' }} />
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ float: 'left', width: '100%', textAlign: 'center' }}>
            <span>
              <input
                id="submit"
                name="submit"
                className="submitButton"
                type="submit"
                value={loading ? 'Sending...' : 'Send us a message!'}
                disabled={loading}
              />
            </span>
          </div>
        </form>
      </div>

      <div style={{ height: '40vh' }} />
    </body>
  )
}
