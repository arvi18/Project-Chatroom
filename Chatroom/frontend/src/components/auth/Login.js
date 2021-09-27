import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

function Login() {
  const [userName, setuserName] = useState();
  const [passWord, setpassWord] = useState();
  const { isAuth, setisAuth } = useContext(UserContext);

  const handleSubmit=(e)=>{
      e.preventDefault();
  }

  return (
    <div className="container pt-5">
      <div className="card">
        <div className="card-content">
          <h3 className="title is-3">Project Chatroom</h3>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <p className="control has-icons-left">
                <input className="input"
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                onChange={e => setuserName(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="material-icons">person</i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  onChange={e => setpassWord(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="material-icons">lock</i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button type="submit" className="button is-success">
                  Login
                  <i className="material-icons right">send</i>
                </button>
              </p>
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
