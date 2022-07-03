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
      <a href className="card-s" >
        <img src={seller&&seller.photo ? `Image/${seller.photo}`: "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"} className="card__image-s " alt="" />
        <div className="card__overlay-s ">
          <div className="card__header-s ">
            <svg className="card__arc-s " xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            <img className="card__thumb-s " src={seller&&seller.photo ? `Image/${seller.photo}`: "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"}  alt="" />
            <div className="card__header-text-s ">
              <h3 className="card__title-s ">{seller.name}</h3>            
            </div>
          </div>
          <p className="card__description-s ">{seller.slogan}</p>
          <button onClick={handleGetSeller}>Profile</button>
        </div>
      </a>      
  </div>
  </div>
  )
}

export default SellersCard