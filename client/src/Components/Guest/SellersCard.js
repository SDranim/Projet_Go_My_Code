import React from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSellerprofile } from '../../JS/Actions/UserActions'
// https://i.imgur.com/7D7I6dI.png
function SellersCard({seller}) {
const dispatch=useDispatch()
const navigate=useNavigate()
const handleGetSeller=()=>{
dispatch(getSellerprofile(seller._id))
navigate('/getprofileSeller')
}

  return (
    <div className='container'>
    <div style={{width:"500px"}}>
      <a href className="card" >
        <img src={seller&&seller.photo ? `Image/${seller.photo}`: "https://bootdey.com/img/Content/avatar/avatar7.png"} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            <img className="card__thumb" src={seller&&seller.photo ? `Image/${seller.photo}`: "https://bootdey.com/img/Content/avatar/avatar7.png"}  alt="" />
            <div className="card__header-text">
              <h3 className="card__title">{seller.name}</h3>            
            </div>
          </div>
          <p className="card__description">{seller.slogan}</p>
          <button onClick={handleGetSeller}>Profile</button>
        </div>
      </a>      
  </div>
  </div>
  )
}

export default SellersCard