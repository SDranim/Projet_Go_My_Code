import {useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSellerOffers } from '../../JS/Actions/UserActions';



function GetProfileSeller() {
const dispatch=useDispatch()
const navigate=useNavigate()
const seller= useSelector((state) => state.guestReducer.seller);
const handleoffers=()=>{
dispatch(getSellerOffers(seller._id))
navigate('/allOffers')
}
  return (
    <div>
    <section className="section about-section gray-bg" id="about">
    <div className="container">
      <div className="row align-items-center flex-row-reverse">
        <div className="col-lg-6">
          <div className="about-text go-to">
          <h3 className="dark-color">{seller?.name}</h3>
          <h6 className="theme-color lead">{seller?.slogan}</h6>
            <h5 className="dark-color">About Us</h5>
            <p>{seller?.discription}</p>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                <div className="media">
                  <label>Address</label>
                  <p>{seller?.address}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>{seller?.email}</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>{seller?.phone}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-avatar">
            <img src={seller&&seller.photo ? `Image/${seller.photo}`: "https://bootdey.com/img/Content/avatar/avatar7.png"} alt="" />
          </div>
        </div>
      </div>
      <div className="counter">
      <div className="row">
          <div className="flex">
          <div className="col-6 col-lg-3"></div>
          <div className="count-data text-center">
            <button onClick={handleoffers} className="btn btn-outline-warning">
              All Offers
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

export default GetProfileSeller