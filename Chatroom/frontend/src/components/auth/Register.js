import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import {registerUser} from '../services/auth';

function Register() {
    const [userName, setuserName] = useState();
    const [email, setemail] = useState();
    const [passWord, setpassWord] = useState();
    const [passWord_two, setpassWord_two] = useState();

    const { isAuth, setisAuth } = useContext(UserContext);

    let history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(passWord!==passWord_two){
            window.alert("Passwords do not match!")
        }else{
            const registered=registerUser(userName, email, passWord);
            if(registered===true){
                setisAuth(true);
                history.push("/");
            }else{
                history.push("/register");
            }
        }
    }

    return (
    <div className="container pt-5">
        <div className="card">
        <div className="card-content">
            <h3 className="title is-3">Register to Chatroom</h3>
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
                <input className="input"
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                onChange={e => setemail(e.target.value)}
                />
                <span className="icon is-small is-left">
                    <i className="material-icons">email</i>
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
                <p className="control has-icons-left">
                <input
                    className="input"
                    type="password"
                    placeholder="Confirm password"
                    id="password_two"
                    name="password_two"
                    onChange={e => setpassWord_two(e.target.value)}
                />
                <span className="icon is-small is-left">
                    <i className="material-icons">lock</i>
                </span>
                </p>
            </div>
            <div className="field">
                <p className="control">
                <button type="submit" className="button is-success">
                Register
                    <i className="material-icons right">send</i>
                </button>
                </p>
                <p>
                Already have an account? <Link to="/login">login here</Link>
                </p>
            </div>
            </form>
        </div>
        </div>
    </div>
    );
    }

export default Register
