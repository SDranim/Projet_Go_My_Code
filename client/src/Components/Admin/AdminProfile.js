import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom";
import { allmessages, allOffers, allSellers, allUsers } from "../../JS/Actions/AdminActions";

function AdminProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMsgs = () => {
    dispatch(allmessages());
    navigate("/messages");
  };
  const handleUsers = () => {
    dispatch(allUsers());
    navigate("/users");
  };
  const handleSellers= () => {
    dispatch(allSellers());
    navigate("/sellers");
  };
  const handleOffers= () => {
    dispatch(allOffers());
    navigate("/offers");
  };
  return (
    <div>
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 id='h3-p' className="dark-color">Admin</h3>
                <h5 id='h5-p' className="dark-color">welcome to your dashboard</h5>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-avatar">
                <img
                  src={"https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="counter">
            <div className="row">
              <div className="flex">
                <div className="col-6 col-lg-3"></div>
                <div className="count-data text-center"></div>
                <div className="count-data text-center">
                  <Button onClick={handleMsgs}  id="pBtn" variant="outline-light">
                Clients Messages
             </Button>
                </div>
                <div className="count-data text-center">
                    <Button onClick={handleSellers} id="pBtn" variant="outline-light">
                    Sellers
             </Button>
      
                </div>
                <div className="count-data text-center">
                  
                    <Button onClick={handleUsers} id="pBtn" variant="outline-light">
                    Users
             </Button>
      
                 
                </div>
                <div className="count-data text-center">
                    <Button onClick={handleOffers} id="pBtn" variant="outline-light">
                    Offers
             </Button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminProfile;
