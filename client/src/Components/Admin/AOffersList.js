import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
            <Link to='/AdminProfile'>
     <Button style={{backgroundColor:"#570A57"}} variant="outline-light">Back</Button>
     </Link>
    {loading?   
     <div className="center">
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
   </div>
    : !offers.length ? <h2>No Users</h2>: offers.map((offer,i)=>(< AOffersCard offer={offer} key={i}/>)) }
      </div>
  )
}

export default AOffersList