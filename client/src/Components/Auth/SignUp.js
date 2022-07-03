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
        primary: "#BAABDA",
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
      <div id="card-a">
        <div id="card-content-a">
          <div id="card-title-a">
            <h2 style={{  fontFamily: 'Dancing Script'}}>SignUp</h2>
            <div />
            <h6> Choose if you are: </h6>
            <Select
              className="mb-3"
              options={optionsRole}
              theme={customStheme}
              onChange={handler}
              placeholder="client or seller"
            />
          </div>
          <form onSubmit={handleSubmit} className="form-a">
            {userRole === "seller" ? (
              <>
                <label className="label-a" style={{ paddingTop: "13px" }}>Name</label>
                <input
                  className="form-content-a"
                  type="text"
                  autoComplete="on"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="form-border-a" />
                <label className="label-as" style={{ paddingTop: "13px" }}>Email</label>
                <input
                  className="form-content-a"
                  type="email"
                  autoComplete="on"
                  required
                  value={email_seller}
                  onChange={(e) => setEmailSeller(e.target.value)}
                />
                <div className="form-border-a" />
                <label className="label-a" htmlFor="user-password" style={{ paddingTop: "22px" }}>
                  Password
                </label>
                <input
                  className="form-content-a"
                  type="password"
                  name="password"
                  autoComplete="on"
                  required
                  value={password_seller}
                  onChange={(e) => setPasswordSeller(e.target.value)}
                />
                <div className="form-border-a" />
              </>
            ) : (
              <>
                <label style={{ paddingTop: "13px" }}>First-Name</label>
                <input
                  className="form-content-a"
                  type="text"
                  autoComplete="on"
                  required
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div className="form-border-a" />
                <label className="label-a" style={{ paddingTop: "13px" }}>Last-Name</label>
                <input
                  className="form-content-a"
                  type="text"
                  autoComplete="on"
                  required
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div className="form-border-a" />
                <label className="label-a" style={{ paddingTop: "13px" }}>Email</label>
                <input
                  className="form-content-a"
                  type="email"
                  autoComplete="on"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="form-border-a" />
                <label className="label-a" style={{ paddingTop: "22px" }}>Password</label>
                <input
                  className="form-content-a"
                  type="password"
                  autoComplete="on"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="form-border-a" />
              </>
            )}
            <button id="submit-btn-a" type="submit">
            SignUp
            </button>
            <a href="http://localhost:3000/signIn" id="signup-a">
              You alredy have an account?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
