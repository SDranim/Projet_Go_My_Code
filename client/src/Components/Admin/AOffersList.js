import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allOffers } from '../../JS/Actions/AdminActions';
import AOffersCard from "./AOffersCard"

function AOffersList() {
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(allOffers())
  },[dispatch])
    const offers =useSelector((state)=>state.adminReducer.offers)
    const loading= useSelector((state)=>state.adminReducer.load)
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
    : !offers.length ? <h2>No Users</h2>: offers.map((offer,i)=>(< AOffersCard offer={offer} key={i}/>)) }
      </div>
  )
}

export default AOffersList