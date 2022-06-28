import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { updateprofilSeller } from '../../../JS/Actions/SellerActions'

function UpdateProfileS() {
  const user = useSelector((state) => state.authReducer.user)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [discription, setDiscription] = useState("")
  const [slogan, setSlogan] = useState("")


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleUpdate=()=>{
      dispatch(updateprofilSeller({name,email,phone,address, discription,slogan}))
      navigate('/profileSeller')
  }
  useEffect(()=>{
user && setName(user.name)
user && setEmail(user.email)
user && setPhone(user.phone)
user && setAddress(user.address)
user && setDiscription(user.discription)
user && setSlogan(user.slogan)

  },[user])
  return( <div className="container">
  <div className="row gutters">
    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
      <div className="card h-100">
        <div className="card-body">
          <div className="account-settings">
            <div className="user-profile">
              <div className="user-avatar">
              <h2>Profile picture</h2>
                <img src={
                  user && user.photo
                    ? `Image/${user?.photo}`
                    : "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
                } alt="" />
              </div>
              <h5 className="user-name">{user?.first_name} {user?.last_name}</h5>
              <h6 className="user-email">{user?.email}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
      <div className="card h-100">
        <div className="card-body">
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 className="mb-2 text-primary">Personal Details</h6>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="fullName">Name</label>
                <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="form-control" id="Name" placeholder="Enter name" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="discription">Discription</label>
                <input onChange={(e)=>setDiscription(e.target.value)} value={discription} type="text" className="form-control" id="discription" placeholder="Enter discription" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="slogan">slogan</label>
                <input onChange={(e)=>setSlogan(e.target.value)} value={slogan} type="text" className="form-control" id="slogan" placeholder="Enter slogan" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input onChange={(e)=>setPhone(e.target.value)} value={phone} type="text" className="form-control" id="phone" placeholder="Enter phone number" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="eMail">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="form-control" id="eMail" placeholder="Enter email " />
              </div>
            </div>
          </div>
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 className="mt-3 mb-2 text-primary">Address</h6>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="Street">Address</label>
                <input onChange={(e)=>setAddress(e.target.value)} value={address} type="name" className="form-control" id="Street" placeholder="Enter Address" />
              </div>
            </div>
          </div>
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text-right">
                <Link to='/profileSeller'>
                <button type="button" className="btn btn-secondary">Cancel</button>
                </Link>
                <button type="button" id="submit" name="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default UpdateProfileS