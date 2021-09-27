import axios from 'axios';

export const setAxiosAuthToken=(token)=>{
    if(typeof token!== 'undefined' && token){
        // apply token for every request made in future
        axios.defaults.headers.common["Authoriazation"]="Token"+token;
    }else{
        // delete auth token
        delete axios.defaults.headers.common["Authoriazation"];
    }
};

export const setToken=(token)=>{
    localStorage.setItem("token", token);
}

export const setCurrentuser=(user)=>{
    localStorage.setItem("user", JSON.stringify(user));
}

export const unsetCurrentuser=()=>{
    setAxiosAuthToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

export const getCurrentUser=()=>{
    axios
    .get("api/authy/whoami")
    .then(response=>{
        const user={
            id: response.data.id,
            username: response.data.username,
            email: response.data.email,
            picture: response.data.profile.picture,
            banner: response.data.profile.banner,
        };
        setCurrentuser(user);
    });
};

// logout service
export const logout=()=>{
    axios
    .post('api/authy/logout')
    .then(res=>{
        unsetCurrentuser();
        console.log("Logout successful!");
    })
}
// logout all
export const logoutAll=()=>{
    axios
    .post('api/authy/logoutall')
    .then(res=>{
        unsetCurrentuser();
        console.log("logged out from all the devices!");
    })
}

// logging in user service
export const loginUser=(username, password)=>{
     // Headers
     const config ={
        headers:{
            'Content-Type':'application/json',
        }
    };

    //request body
    const body=JSON.stringify({username, password});
    const promise=axios.post('api/authy/login', body, config)
    const dataPromise=promise.then((res)=> res.data.token );
    return dataPromise;
} 

// registering user service
export const registerUser=(username, email, password)=>{

    // Headers
    const config ={
        headers:{
            'Content-Type':'application/json',
        }
    };

    //request body
    const body=JSON.stringify({username, email, password});

    axios
    .post('api/authy/signup', body, config)
    .then(response=>{
        const auth_token=response.data.token;
        setAxiosAuthToken(auth_token);
        setToken(auth_token);
        getCurrentuser();
    })
    .catch(err=>{
        unsetCurrentuser();
        console.log(err);
    });
    return true;
};