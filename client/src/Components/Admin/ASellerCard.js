import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteSeller } from '../../JS/Actions/AdminActions';


function ASellerCard({seller}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handledelete= () => {
    dispatch(deleteSeller(seller._id));
    navigate("/sellers");
  };
  return (
    <div className="a-box">
     <div className="img-container">
       <div className="img-inner">
         <div className="inner-skew">
           <img src="" alt="" />
         </div>
       </div>
     </div>
     <div className="text-container">
       <h3>{seller?.name}</h3>
       <div>
       <Button onClick={handledelete} variant="outline-danger">Delete seller</Button>
       </div>
     </div>
   </div>
  )
}

export default ASellerCard