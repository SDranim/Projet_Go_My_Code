import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allSellers } from '../../JS/Actions/AdminActions';
import ASellerCard from './ASellerCard';

function SSellersList() {
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(allSellers())
  },[dispatch])
    const sellers = useSelector((state)=>state.adminReducer.sellers)
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
  : !sellers.length ? <h2>No Users</h2>: sellers.map((seller,i)=>(< ASellerCard seller={seller} key={i}/>)) }
    </div>
  )
}

export default SSellersList