import React from "react"
import TopStories from "../TopStories/TopStories";
import classes from "./style.module.css"

const Body = () =>{
    return (
        <div className={classes.container}>
            <div className={classes.inner}>
                <TopStories />
            </div>
            
        </div>
    )
}
export default Body;