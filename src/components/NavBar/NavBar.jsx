import React from "react"
import SearchBar from "../SearchBar/SearchBar";
import classes from "./style.module.css"

const NavBar = () =>{
    return(
        <div className={classes.container}>
            {/* <div className={classes.navbar}> */}
                <div className={classes.logo}>
                    <h3 className={classes.h3}>The</h3>
                    <h1 className={classes.h1}>Peaks</h1>
                </div>
                <div className={classes.input}>
                    <SearchBar />
                </div>
            {/* </div> */}
        </div>
    )
}
export default NavBar;