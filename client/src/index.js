import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/General.css";
import "./Css/Authcard.css"
import "./Css/Profile.css"
import "./Css/ContactUs.css"
import "./Css/OfferCard.css"
import "./Css/Password.css"
import "./Css/Updateprofile.css"
import"./Css/offerlist.css"
import"./Css/sellersCard.css"
import"./Css/Search.css"
import"./Css/Msg.css"
import"./Css/CardSU.css"
import"./Css/OfferDetails.css"
import { Provider } from "react-redux";
import { store } from "./JS/Store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
