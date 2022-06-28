import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import OffersList from "./Components/Guest/OffersList";
import ContactUs from "./Components/Guest/ContactUs";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import ProfileUser from "./Components/User/ProfileUser";
import ProfileSeller from "./Components/Seller/SellerCrud.js/ProfileSeller";
import UpdateProfile from "./Components/User/UpdateProfile";
import PrivateRoute from "./Components/Private/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentSeller } from "./JS/Actions/AuthSellerActions";
import { getCurrentUser } from "./JS/Actions/AuthUserActions";
import Editpassword from "./Components/User/Editpassword";
import ChangePhoto from "./Components/User/ChangePhoto";
import AddOffer from "./Components/Seller/Offers/AddOffer";
import UpdateProfileS from "./Components/Seller/SellerCrud.js/UpdateProfileS"
import EditpasswordS from "./Components/Seller/SellerCrud.js/EditPasswordS"
import EditPhotoS from "./Components/Seller/SellerCrud.js/EditphotoS"
import UpdateOffer from "./Components/Seller/Offers/UpdateOffer"
import AdminProfile from "./Components/Admin/AdminProfile"
import OfferList from "./Components/Seller/Offers/OfferList"
import Offerdetails from "./Components/Guest/Offerdetails"
import SellersList from "./Components/Guest/SellersList"
import GetProfileSeller from "./Components/User/GetProfileSeller"
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user") === "seller") {
      dispatch(getCurrentSeller());
    } else {
      dispatch(getCurrentUser());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        {/* guest routes */}
        <Route path="/" element={<Home />} />
        <Route path="/GetProfileSeller" element={<GetProfileSeller />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/allOffers" element={<OffersList/>} />
        <Route path="/SellersList" element={<SellersList/>} />
        <Route path="/offerDetails" element={<PrivateRoute><Offerdetails/></PrivateRoute>} />

        {/* user routes */}
        <Route path="/profileUser"element={<PrivateRoute><ProfileUser /></PrivateRoute>}/>
        <Route path="/userUpdate" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
        <Route path="/editPassword" element={<PrivateRoute><Editpassword /></PrivateRoute>} />
        <Route path="/editPhoto" element={<PrivateRoute><ChangePhoto /></PrivateRoute>} />


        {/* seller routes */}
        <Route path="/profileSeller" element={<PrivateRoute><ProfileSeller /></PrivateRoute>}/>
        <Route path="/sellerUpdate" element={<PrivateRoute><UpdateProfileS/></PrivateRoute>} />
        <Route path="/editPasswordSeller" element={<PrivateRoute><EditpasswordS /></PrivateRoute>} />
        <Route path="/editPhotoSeller" element={<PrivateRoute><EditPhotoS /></PrivateRoute>} />
        <Route path="/addOffer" element={<PrivateRoute><AddOffer /></PrivateRoute>} />
        <Route path="/myOffers" element={<PrivateRoute><OfferList /></PrivateRoute>} />
        <Route path="/updateOffer" element={<PrivateRoute><UpdateOffer /></PrivateRoute>} />
       
        {/* admin router */}
        <Route path="/AdminProfile" element={<PrivateRoute><AdminProfile/></PrivateRoute>} />

       




      </Routes>
    </div>
  );
}

export default App;
