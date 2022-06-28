import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { updateProfilUser } from '../../JS/Actions/UserActions'


function UpdateProfile() {
  const user = useSelector((state) => state.authReducer.user)
  const [first_name, setFirst_Name] = useState("")
  const [last_name, setLast_Name] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [birthday, setBirthday] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleUpdate=()=>{
      dispatch(updateProfilUser({first_name, last_name,email,phone,address,birthday}))
      navigate('/profileUser')
  }
  useEffect(()=>{
user && setFirst_Name(user.first_name)
user && setLast_Name(user.last_name)
user && setEmail(user.email)
user && setPhone(user.phone)
user && setAddress(user.address)
user && setBirthday(user.birthday)
  },[user])
  return (
    <div className="container">
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
                  <label htmlFor="fullName">First Name</label>
                  <input onChange={(e)=>setFirst_Name(e.target.value)} value={first_name} type="text" className="form-control" id="fullName" placeholder="Enter first name" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input onChange={(e)=>setLast_Name(e.target.value)} value={last_name} type="text" className="form-control" id="lastName" placeholder="Enter last name" />
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
                  <label htmlFor="birthday">birthday</label>
                  <input onChange={(e)=>setBirthday(e.target.value)} value={birthday} type="text" className="form-control" id="birthday" placeholder="Enter birthday" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="eMail">Email</label>
                  <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="form-control" id="eMail" placeholder="Enter email ID" />
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
                  <Link to='/profileUser'>
                  <button type="button" id="submit" name="submit" className="btn btn-secondary">Cancel</button>
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

export default UpdateProfile