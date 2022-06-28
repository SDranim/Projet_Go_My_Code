import React, { useState } from 'react'

function UpdateOffer() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")
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
                <form >
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
                    <button type="submit" class="btn btn-lg btn-primary" >Add</button>
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