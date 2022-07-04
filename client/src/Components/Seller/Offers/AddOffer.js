
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addOffer } from '../../../JS/Actions/SellerActions'
import {Link, useNavigate} from "react-router-dom"
import { Button } from 'react-bootstrap'
function AddOffer() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")
  const [photo, setPhoto] = useState(null)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const AddOffer=async(e)=>{
    e.preventDefault()
    const data= new FormData()
    data.append('offreImage',photo)
    data.append("title",title)
    data.append("description",description)
    data.append("category",category)
    data.append("date",date)
        dispatch(addOffer(data))
       navigate('/myOffers')
   }
  
  return (
    <div className="container h-100">
    <div className="row h-100">
      <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
        <div className="d-table-cell align-middle">
          <div className="text-center mt-4">
            <h2 className="h2" style={{fontFamily: "Dancing Script",fontSize: "50px"}}>Add New Offer</h2>
            <p style={{fontSize: "10px"}} className="lead">
              Enter The Offer Details.
            </p>
          </div>
          <div className="card" style={{ Width:"500px", height:"400px"}}>
            <div className="card-body" >
              <div className="m-sm-4">
                <form onSubmit={AddOffer}>
                <input  type="file" onChange={(e)=>setPhoto(e.target.files[0])}/>
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
                  <Link to='/profileSeller'>
     <Button style={{backgroundColor:"#570A57"}} variant="outline-light">Back</Button>
     </Link>
     <Button type="submit" style={{backgroundColor:"#D5A4CF"}} variant="outline-light">Add</Button>
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

export default AddOffer