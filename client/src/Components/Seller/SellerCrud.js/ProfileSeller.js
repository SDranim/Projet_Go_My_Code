import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteAccountSeller, myOffers } from '../../../JS/Actions/SellerActions';
import { allUsersmessages } from '../../../JS/Actions/UserActions';
function ProfileSeller() {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleDelete = () => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteAccountSeller());
      navigate("/signUp");
    }
  };
  const handleMsgs=()=>{
    dispatch(allUsersmessages())
    navigate('/userMsgs')
  }
  return (
    <div>
<section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
              <h3 className="dark-color">{user?.name}</h3>
              <h6 className="theme-color lead">{user?.slogan}</h6>
                <h5 className="dark-color">About Us</h5>
                <p>{user?.discription}</p>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                    <div className="media">
                      <label>Address</label>
                      <p>{user?.address}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label>E-mail</label>
                      <p>{user?.email}</p>
                    </div>
                    <div className="media">
                      <label>Phone</label>
                      <p>{user?.phone}</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-avatar">
                <img src={user&&user.photo ? `Image/${user.photo}`: "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"} alt="" />
              </div>
            </div>
          </div>
          <div className="counter">
          <div className="row">
              <div className="flex">
              <div className="col-6 col-lg-3"></div>
              <div className="count-data text-center">
                <button onClick={()=>{dispatch(myOffers());navigate('/myOffers')}}  className="btn btn-outline-warning">
                  My Offers
                </button>
              </div>
              <div className="count-data text-center">
                <button onClick={handleMsgs}  type="button" className="btn btn-outline-warning">
                  Messages
                </button>
              </div>
              <div className="count-data text-center">
                <Link to="/addOffer">
                <button type="button" className="btn btn-outline-warning">
                  Add Offer
                </button>
                </Link>
              </div>
              <div className="count-data text-center">
              <Link to="/sellerUpdate">
                <button type="button" className="btn btn-outline-warning">
                  Edit Profile
                </button>
                </Link>
              </div>
              <div className="count-data text-center">
              <Link to="/editPhotoSeller">
                <button type="button" className="btn btn-outline-warning">
                  Change Photo
                </button>
                </Link>
              </div>
              <div className="count-data text-center">
              <Link to="/editPasswordSeller">
                <button type="button" className="btn btn-outline-warning">
                  Change password
                </button>
                </Link>
              </div>
              <div className="count-data text-center">
                <button onClick={handleDelete} type="button" className="btn btn-outline-warning">
                  Delete Profile
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
     
  )
}

export default ProfileSeller
