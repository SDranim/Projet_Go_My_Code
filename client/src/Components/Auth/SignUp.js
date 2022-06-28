import React from "react";
import { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerSeller } from "../../JS/Actions/AuthSellerActions";
import { registerUser } from "../../JS/Actions/AuthUserActions";

function SignUp() {
  //seller
  const [name, setName] = useState("");
  const [email_seller, setEmailSeller] = useState("");
  const [password_seller, setPasswordSeller] = useState("");

  //user
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("user");
  const handler = (event) => {
    const value = event.value;
    setUserRole(value);
  };

  // function submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userRole === "seller") {
      dispatch(
        registerSeller(
          { name: name, email: email_seller, password: password_seller },
          navigate
        )
      );
    } else {
      dispatch(
        registerUser({ first_name, last_name, email, password }, navigate)
      );
    }
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
    <div className="log">
      <title>Card</title>
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>SignUp</h2>
            <div className="underline-title" />
            <h6> choose your role </h6>
            <Select
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
                <label style={{ paddingTop: "13px" }}>Name</label>
                <input
                  className="form-content"
                  type="text"
                  autoComplete="on"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="form-border" />
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
                <label style={{ paddingTop: "13px" }}>First-Name</label>
                <input
                  className="form-content"
                  type="text"
                  autoComplete="on"
                  required
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div className="form-border" />
                <label style={{ paddingTop: "13px" }}>Last-Name</label>
                <input
                  className="form-content"
                  type="text"
                  autoComplete="on"
                  required
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div className="form-border" />
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
            SignUp
            </button>
            <a href="http://localhost:3000/signIn" id="signup">
              You alredy have an account?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
