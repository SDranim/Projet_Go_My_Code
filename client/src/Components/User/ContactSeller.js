import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { sendMsgSeller } from '../../JS/Actions/UserActions'

function ContactSeller() {
  const [message, setMessage] = useState("")
  const [first_name, setFirst_Name] = useState("")
  const [last_name, setLast_Name] = useState("")
  const [email, setEmail] = useState("")
  const [phone_number, setPhone_number] = useState("")
  const {id}=useParams()
  const dispatch=useDispatch()
  const handlecontact=()=>{
    dispatch(sendMsgSeller({message,first_name,last_name,email,phone_number},id,setEmail(""),setFirst_Name(""),setLast_Name(""),setMessage(''),setPhone_number("")))
    alert('msg sent')
  }
  return (
    <div>
    <small>Enter message and click button "Send"</small>
    <div className="wrapper centered">
      <article className="letter">
        <div className="side">
          <h1>Contact for more details</h1>
          <p>
            <textarea onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="Your message" defaultValue={""} />
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
            <button onClick={handlecontact} id="sendLetter">Send</button>
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