import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [details, setDetails] = useState({ username: "", password: "" });
  const changeHandler = (e) => {
    setDetails({ ...details });
  };
  return (
    <>
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="current-password"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="password">
                  Password
                </label>
              </div>

              <Link
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                to="/home"
              >
                Sign in
              </Link>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>
              <Link
                className="btn btn-primary btn-lg btn-block"
                style={{ backgroundColor: "#3b5998" }}
                to="/signup"
                role="button"
              >
                Sign Up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
