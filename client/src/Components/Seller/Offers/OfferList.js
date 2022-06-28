import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OfferCard from './OfferCard'
import { myOffers } from '../../../JS/Actions/SellerActions';
function OffersList() {
  const dispatch = useDispatch();
useEffect(()=>{
dispatch(myOffers())
},[dispatch])
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
 : Offers.map((e,i)=>(< OfferCard e={e} key={i}/>)) }
    </div>
  )
}

export default OffersList