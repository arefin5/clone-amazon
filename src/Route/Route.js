import React from 'react'
import Home from '../Pages/Home'
import { Route,Swicth } from 'react-router'
const Router=() =>{
    return (
        <div>
            <Route path="/" component={Home} />
        </div>
    )
}

export default Router
