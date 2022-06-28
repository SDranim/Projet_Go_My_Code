import React from 'react'

function ContactSeller() {
  return (
    <div>
    <small>Enter message and click button "Send"</small>
    <div className="wrapper centered">
      <article className="letter">
        <div className="side">
          <h1>Contact for more details</h1>
          <p>
            <textarea placeholder="Your message" defaultValue={""} />
          </p>
        </div>
        <div className="side">
          <p>
            <input type="text" placeholder="Your name" />
          </p>
          <p>
            <input type="email" placeholder="Your email" />
          </p>
          <p>
            <input type="text" placeholder="Your phone number " />
          </p>
          <p>
            <button id="sendLetter">Send</button>
          </p>
        </div>
      </article>
      <div className="envelope front" />
      <div className="envelope back" />
    </div>
    <p className="result-message centered">Thank you for your message</p>
  </div>
  )
}

export default ContactSeller