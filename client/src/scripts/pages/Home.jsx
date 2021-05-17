import React, { Fragment, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import LoginImg1 from "../../assets/img/Home/boy-studying.svg";
import LoginImg2 from "../../assets/img/Home/girl-studying.svg";
function Home() {
  const [mode, setMode] = useState("login");
  const toggleMode = () =>
    mode === "login" ? setMode("register") : setMode("login");
  return (
    <Fragment>
      <div className={mode === "login" ? "loginNav" : "registerNav"}>
        <Navbar className={"navbarLogin px-lg-5"} expand="lg">
          <Navbar.Brand className="navbarBrand" href="/">
            Teaching Tree Solutions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="mobileNav">
            <i className="bx bx-menu"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="mobileNav">
            <Nav className="ml-auto">
              <Nav.Link className="loginLink" href="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link className="loginLink" href="/classes">
                Classes
              </Nav.Link>
              <Nav.Link className="loginLink" href="/privateFiles">
                Files
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div
        className={`container loginContainer ${
          mode === "login" ? "sign-in-mode" : "sign-up-mode"
        }`}
      >
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="bx bx-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="bx bx-lock-alt"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input
                type="submit"
                value="Login"
                className="btn btn-lg px-5 btn-login rounded mt-2"
              />
              <Nav.Link className="navLink" href="/sendMail">
                Forgot Password
              </Nav.Link>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="bx bx-user"></i>
                <input className="" type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="bx bx-envelope"></i>
                <input className="" type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="bx bx-lock-alt"></i>
                <input className="" type="password" placeholder="Password" />
              </div>
              <input
                type="submit"
                className="btn btn-lg px-5 btn-login rounded mt-2"
                value="Sign up"
              />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content mt-md-4">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btn btn-secondary shadow rounded px-4"
                id="sign-up-btn"
                onClick={toggleMode}
              >
                Sign up
              </button>
            </div>
            <img src={LoginImg1} className="image loginImage" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content mt-5">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn btn-secondary shadow rounded px-4"
                id="sign-in-btn"
                onClick={toggleMode}
              >
                Sign in
              </button>
            </div>
            <img src={LoginImg2} className="image registerImage" alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
  // return <Buttons></Buttons>;
}

export default Home;
