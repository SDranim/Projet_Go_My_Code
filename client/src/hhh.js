import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineHome, AiOutlineContacts }from 'react-icons/ai'
import {ImProfile} from 'react-icons/im'
import { MdOutlineLocalOffer, MdFindInPage} from 'react-icons/md'
import {RiLogoutBoxLine}from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { allOffers, allSellers } from './JS/Actions/GuestActions';
import { logout } from './JS/Actions/AuthUserActions';

function hhh() {
    const navigate = useNavigate()
  const dispatch = useDispatch();
  const {auth,user}= useSelector((state)=>state.authReducer)
 

  const offers=()=>{
    dispatch(allOffers())
    navigate('/allOffers')
  }
  const sellers=()=>{
    dispatch(allSellers())
    navigate('/SellersList')
  }
  return (
    <div className="nav">
    <input type="checkbox" id="nav-check"/>
    <div className="nav-header">
      <div className="nav-title">
        WEDDING<span className="logo2"><MdFindInPage/>To Be</span>
      </div>
    </div>
    <div className="nav-btn">
      <label htmlFor="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <div className="nav-links">
         <div><Link  className='titreNav'to='/'><AiOutlineHome/>Home</Link></div>
        <div><Link  className='titreNav' onClick={offers}><MdOutlineLocalOffer/>Offers</Link></div>
        <div><Link  className='titreNav'onClick={sellers}>Sellers</Link></div>
        </div>
     { auth ?<>
        <div className="nav-links">
    <div><Link  className='titreNav' to={user.role==="seller" ? "/profileSeller": user.role==="admin"? "/AdminProfile":"/profileUser"}><ImProfile/>Profile</Link></div>
    <div><Link  className=" btn-logout" onClick={()=>{dispatch(logout(),navigate('/SignIn'))}}><RiLogoutBoxLine/>Logout </Link></div>
    </div>
    </>
    :
    <>
    <div className="nav-links">
    <div><Link  className='titreNav'to="/signUp">SignUp </Link></div>
    <div><Link  className='titreNav'to="/signIn">SignIn</Link></div>
    </div>
    </>}
    <div className="nav-links"><Link  className='btn'to="/contact"><AiOutlineContacts />Contact Us</Link></div>
    </div>
  )
}

export default hhh