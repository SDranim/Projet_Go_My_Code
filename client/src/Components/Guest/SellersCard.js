import React from 'react'
import { Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSellerprofile } from '../../JS/Actions/UserActions'
function SellersCard({seller}) {
const dispatch=useDispatch()
const navigate=useNavigate()
const handleGetSeller=()=>{
dispatch(getSellerprofile(seller._id))
navigate('/getprofileSeller')
}

  return (
    <div style={{marginTop:"10px"}}>
    <div className='container'>
    <div style={{width:"500px"}}>
      <a href className="card" >
        <img src={seller&&seller.photo ? `Image/${seller.photo}`: "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"} className="card__image-s " alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            <img className="card__thumb" src={seller&&seller.photo ? `Image/${seller.photo}`: "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"}  alt="" />
            <div className="card__header-text">
              <h3 className="card__title">{seller.name}</h3>            
            </div>
          </div>
          <p className="card__description">{seller.slogan}</p>
     <Button onClick={handleGetSeller} style={{backgroundColor:"#F1BBD5",color:"#570A57",marginLeft:"100px"}} variant="outline-light">Profile</Button>

        </div>
      </a>      
  </div>
  </div>
  </div>
  )
}

export default SellersCard