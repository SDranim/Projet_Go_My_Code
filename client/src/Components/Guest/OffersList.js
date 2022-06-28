import React, { useEffect } from 'react'
import OffersCard from './OffersCard'
import { useDispatch, useSelector } from 'react-redux'
import { allOffers } from '../../JS/Actions/GuestActions'

function OffersList() {
  // const dispatch=useDispatch()
  // useEffect(()=>{
  //   dispatch(allOffers())
  //   },[dispatch])
  const Offers = useSelector((state)=>state.OfferReducer.myOffers)
  const loading= useSelector((state)=>state.OfferReducer.load)
  return (
    <div className='offerlist'>
    {loading?   
     <div class="center">
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
   </div>
   : !Offers.length ? <h2>no offers</h2>:Offers.map((offer,i)=>(< OffersCard offer={offer} key={i}/>))
    }
      </div>
  )
}

export default OffersList