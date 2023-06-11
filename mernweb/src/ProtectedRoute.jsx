import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoute({auth, component:Component, ...rest}) {
    let location = useLocation
    return (
        <div>
            {/* <Routes> */}
                <Route {...rest} render={(props)=>{
                    if(auth) return <Component {...props}/>
                    // if(!auth) return <navigation to={{path: '/', state: {from: props.location}}} />
                    if(!auth) return <Navigate to={{path: '/', state: {from: location}}} />
                }} />
            {/* </Routes> */}
        </div>
    )
}