import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteAccountUser } from "../../JS/Actions/UserActions";
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

function ProfileUser() {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    confirmAlert({
      title: 'Confirm to delete your account',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: ()=> {dispatch(deleteAccountUser());navigate('/signUp')}
        },
        {
          label: 'No',
          onClick: () => navigate('/profileUser')
        }
      ]
    });
  };

  return (
    <div>
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 id='h3-p' className="dark-color">
                  {user?.first_name} {user?.last_name}
                </h3>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>Birthday</label>
                      <p>{user?.birthday}</p>
                    </div>
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
            <div className="col-lg-6">
              <div className="about-avatar">
                <img
                  width={"200px"}
                  src={
                    user && user.photo
                      ? `Image/${user?.photo}`
                      : "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="counter">
            <div className="row">
              <div className="flex">
                <div className="col-6 col-lg-3"></div>
                <div className="count-data text-center">
                  <Link to="/editPhoto">
                    <Button  id="pBtn" variant="outline-light">
                    Change Photo
             </Button>
                  </Link>
                </div>
                <div className="count-data text-center">
                  <Link to="/userUpdate">
                    <Button  id="pBtn" variant="outline-light">
                    Edit Profile
             </Button>
                  </Link>
                </div>
                <div className="count-data text-center">
                  <Link to="/editPassword">
                    <Button  id="pBtn" variant="outline-light">
                    Change password
             </Button>
                  </Link>
                </div>
                <div className="count-data text-center">
                  <Button  onClick={handleDelete}  id="pBtn" variant="outline-light">
                  Delete Profile
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

export default ProfileUser;
