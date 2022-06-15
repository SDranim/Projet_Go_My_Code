import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import SignIn from "./Components/SignIn";
import Offers from "./Components/Offers";
import Sellers from "./Components/Sellers";
import ContactUs from "./Components/ContactUs"
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
