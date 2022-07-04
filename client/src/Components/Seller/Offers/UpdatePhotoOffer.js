import axios from 'axios'
import React, { useState } from 'react'
import {Button} from "react-bootstrap"

import { Link, useNavigate, useParams } from 'react-router-dom'
function UpdatePhotoOffer() {
  const navigate=useNavigate()
  const {id}=useParams()
  const [photo, setPhoto] = useState(null)
 const EditPhotoOffer=async()=>{
  const data= new FormData()
  data.append('newoffreImage',photo)
  const config={
      headers:{
          authorization:localStorage.getItem('token')
      }
  }
  try {
       await axios.put(`/api/Seller/updateImage/${id}`,data,config)
       navigate("/myOffers")
     
  } catch (error) {
      console.log(error)
      
  }
 }

  return (
    <div>
        <Link to='/myOffers'>
     <Button style={{backgroundColor:"#570A57"}} variant="outline-light">Back</Button>
     </Link>
    <input type="file" onChange={(e)=>setPhoto(e.target.files[0])}/>
    <Button onClick={EditPhotoOffer} style={{backgroundColor:"#570A57"}} variant="outline-light">Submit</Button>
    </div>
  )
}

export default UpdatePhotoOffer