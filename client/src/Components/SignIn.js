import React, { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../JS/Actions/UserActions";
import { loginSeller } from "../JS/Actions/SellerActions";




function SignIn() {
   //seller
   const [email_seller, setEmailSeller] = useState("");
   const [password_seller, setPasswordSeller] = useState("");
   //user
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const dispatch = useDispatch();
   const navigate = useNavigate();
 
   // function submit
   const handleSubmit = (e) => {
     e.preventDefault();
     if (userRole === "seller") {
       dispatch(  loginSeller(
        { email: email_seller, password: password_seller },
        navigate
      ));
     } else {
       dispatch(loginUser({email, password }, navigate))
       ;
     }
   };
  const [userRole, setUserRole] = useState("user");
  const handler = (event) => {
    const value = event.value;
    setUserRole(value);
  };

  //-------------react-select---------------//
  function customStheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "white",
        primary: "#839AA8",
      },
    };
  }
  const optionsRole = [
    { value: "user", label: "client" },
    { value: "seller", label: "seller" },
  ];
  //-------------react-select---------------//

  return (
    <div>
      <div className="log">
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Card</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div id="card">
          <div id="card-content">
            <div id="card-title">
              <h2>SignIn</h2>
              <div className="underline-title" />
              <h6> choose your role </h6>
              <Select
                autoFocus
                className="mb-3"
                options={optionsRole}
                theme={customStheme}
                onChange={handler}
                placeholder="client or seller"
              />
            </div>
            <form onSubmit={handleSubmit} className="form">
            {userRole === "seller" ? (
              <>
                <label style={{ paddingTop: "13px" }}>Email</label>
                <input
                  className="form-content"
                  type="email"
                  autoComplete="on"
                  required
                  value={email_seller}
                  onChange={(e) => setEmailSeller(e.target.value)}
                />
                <div className="form-border" />
                <label htmlFor="user-password" style={{ paddingTop: "22px" }}>
                  Password
                </label>
                <input
                  className="form-content"
                  type="password"
                  name="password"
                  autoComplete="on"
                  required
                  value={password_seller}
                  onChange={(e) => setPasswordSeller(e.target.value)}
                />
                <div className="form-border" />
              </>
            ) : (
              <>
                <label style={{ paddingTop: "13px" }}>Email</label>
                <input
                  className="form-content"
                  type="email"
                  autoComplete="on"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="form-border" />
                <label style={{ paddingTop: "22px" }}>Password</label>
                <input
                  className="form-content"
                  type="password"
                  autoComplete="on"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="form-border" />
              </>
            )}
            <button id="submit-btn" type="submit">
            SignIn
            </button>
            <a href="http://localhost:3000/signUp" id="signup">
              You don't have an account?
            </a>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn
