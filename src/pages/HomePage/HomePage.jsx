import React from "react"
import Home from "../../components/Home/Home";
import classes from './style.module.css'

const HomePage = () =>{
    return(
        <div className={classes.container}>
            <Home />
        </div>
    )
}
export default HomePage;