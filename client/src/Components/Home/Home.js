import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import { FindOffer } from '../../JS/Actions/UserActions'
import Found from './Found'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube }from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
function Home() {
const offers=useSelector((state)=>state.OfferReducer.offers)
const [search , setSearch] = useState("")
const dispatch= useDispatch()
const findOffers =(e)=>{
    e.preventDefault()
    dispatch(FindOffer(search))
    setSearch("")
  }
  return (
    <div>
    
    <div className='bodySearch'>  
       <div className='welcome'>Find Offers</div>      
      <div class="button_box2">
          <form class="form-wrapper-2 cf">
          <input type="text" placeholder="Search here..." required onChange={e=>setSearch(e.target.value)}/>
          <button  onClick={findOffers }>Search</button>
          </form>
          </div>      
          <div className='Found'> {
            offers.map((offer,i)=>(< Found  offer={offer} key={i} /> ))
          }
          </div>
    </div>
    <footer class="footer-content">
    <h3>Find Offer</h3>
    <p> Cool Wedding Stuff</p>
    <p>Join Us To Explore Many Of Offers</p>
    <ul class="socials">
    
    <li><p ><i ><AiOutlineFacebook/></i></p></li>
    <li><p ><i ><AiOutlineInstagram/></i></p></li>
    <li><p ><i ><FiTwitter/></i></p></li>

 </ul>

 <p>copyright &copy;2022 <Link className='CopyRight' style={{textDecoration:'none'}} to='/allOffers'>Offers</Link></p>  

    </footer>
    </div>
  )
}

export default Home