import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allSellers } from '../../JS/Actions/GuestActions'
import SellersCard from './SellersCard'

function SellersList() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(allSellers())
    },[dispatch])
  const sellers = useSelector((state)=>state.guestReducer.sellers)
  const loading= useSelector((state)=>state.guestReducer.load)

  
  return (
    <div className='sellerlist'>
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
   : sellers.map((seller,i)=>(< SellersCard seller={seller} key={i}/>)) }
      </div>
  )
}

export default SellersList