import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { UpdateOfferS } from '../../../JS/Actions/SellerActions'

function UpdateOffer() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const offers=useSelector((state)=>state.OfferReducer.myOffers)
 
const {id}=useParams()
const offer=offers.find(offre=>offre._id===id)
useEffect(()=>{
  offer && offer.title && setTitle(offer.title)
  offer && offer.description && setDescription(offer.description)
  offer && offer.date && setDate(offer.date)
  offer && offer.category && setCategory(offer.category)
},[offer])

  const UpdateOffer=async(e)=>{
    e.preventDefault() 
        dispatch(UpdateOfferS({title,description,date,category},id))
        navigate('/myOffers')
   }
  return (
    <div className="container h-100">
    <div className="row h-100">
      <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
        <div className="d-table-cell align-middle">
          <div className="text-center mt-4">
            <h2 className="h2">Add New Offer</h2>
            <p className="lead">
              Enter The Offer Details.
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="m-sm-4">
                <form onSubmit={UpdateOffer} >
                <div className="form-group">
                    <label>Category:</label>
                    <input onChange={(e)=>setCategory(e.target.value)} value={category} className="form-control form-control-lg" type="text" name="category" placeholder="Enter category" />
                  </div>
                  <div className="form-group">
                    <label>Title:</label>
                    <input onChange={(e)=>setTitle(e.target.value)} value={title} className="form-control form-control-lg" type="text" name="title" placeholder="Enter title" />
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <input onChange={(e)=>setDescription(e.target.value)} value={description} className="form-control form-control-lg" type="text" name="Description" placeholder="Enter description" />
                  </div>
                  <div className="form-group">
                    <label>Available Until:</label>
                    <input onChange={(e)=>setDate(e.target.value)} value={date} className="form-control form-control-lg" type="text" name="date" placeholder="Enter date" />
                  </div>
                  <div className="text-center mt-3">
                    <button type="submit" class="btn btn-lg btn-primary" >update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateOffer