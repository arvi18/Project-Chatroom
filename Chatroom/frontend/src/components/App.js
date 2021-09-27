import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './auth/Login';
import Register from './auth/Register';

import PrivateRoute from './utils/PrivateRoute';
import { UserContext } from './utils/UserContext';


function App() {

    const getToken=()=>{
        const token=localStorage.getItem("token");
        if(token){
            return true;
        }else{
            return false;
        }
    };

    const [isAuth, setisAuth] = useState(getToken());

    return (
        <Router>
            <Switch>
                <UserContext.Provider value={{isAuth, setisAuth}} >
                    <PrivateRoute exact path='/' authed={isAuth} component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </UserContext.Provider>
            </Switch>
        </Router>
    )
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));