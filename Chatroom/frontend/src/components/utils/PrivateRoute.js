import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({component: component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={ (props)=> authed===true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
        />
    )
}
