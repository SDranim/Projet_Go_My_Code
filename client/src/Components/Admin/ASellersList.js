import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
  : !sellers.length ? <h2>No Users</h2>: sellers.map((seller,i)=>(< ASellerCard seller={seller} key={i}/>)) }
    </div>
  )
}

export default SSellersList