import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Offers from "./Components/Offers";
import Sellers from "./Components/Sellers";
import ContactUs from "./Components/ContactUs";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ProfileUser from "./Components/ProfileUser";
import ProfileSeller from "./Components/ProfileSeller";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profileUser" element={<ProfileUser />} />
        <Route path="/profileSeller" element={<ProfileSeller />} />
      </Routes>
    </div>
  );
}

export default App;

