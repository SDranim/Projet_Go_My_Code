import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMsg } from '../../JS/Actions/GuestActions'

function ContactUs() {
  const [message, setMessage] = useState("")
  const [first_name, setFirst_Name] = useState("")
  const [last_name, setLast_Name] = useState("")
  const [email, setEmail] = useState("")
  const [phone_number, setPhone_number] = useState("")
  const dispatch=useDispatch()
  const send=()=>{
    dispatch(sendMsg({message,first_name,last_name,email,phone_number},setEmail(""),setFirst_Name(""),setLast_Name(""),setMessage(''),setPhone_number("")))
  }

  return (
    <div className='contact-a'>
    <small>Enter message and click button "Send"</small>
    <div className="wrapper centered">
      <article className="letter">
        <div className="side">
          <h1 id='h1-a'>Contact us</h1>
          <p id='p1'>
            <textarea onChange={(e)=>setMessage(e.target.value)} value={message}  className='txt' placeholder="Your message" defaultValue={""} />
          </p>
        </div>
        <div className="side">
          <p>
            <input onChange={(e)=>setFirst_Name(e.target.value)} value={first_name}  className='in' type="text" placeholder="Your first name" />
          </p>
          <p>
            <input  onChange={(e)=>setLast_Name(e.target.value)} value={last_name}  className='in' type="text" placeholder="Your last name" />
          </p>
          <p>
            <input  onChange={(e)=>setEmail(e.target.value)} value={email}  className='in' type="email" placeholder="Your email" />
          </p>
          <p>
            <input  onChange={(e)=>setPhone_number(e.target.value)} value={phone_number}  className='in' type="text" placeholder="Your phone number " />
          </p>
          <p>
            <button className='bttn' id="sendLetter" onClick={send}>Send</button>
          </p>
        </div>
      </article>
    </div>
  </div>
  )
}

export default ContactUs