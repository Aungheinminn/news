import React from "react"
import Body from "../Body/Body"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import classes from './style.module.css'

const Home = () =>{
    return(
        <div className={classes.container}>
            <NavBar />
            <Body />
            <Footer />

            {/* <h1>I am Home</h1> */}
        </div>
    )
}
export default Home;