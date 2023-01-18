import React from "react"
import Sport from "../Sport/Sport";
import TopStories from "../TopStories/TopStories";
import classes from "./style.module.css"

const Body = () =>{
    return (
        <div className={classes.container}>
            <div className={classes.inner}>
                <TopStories />
                <Sport />
            </div>
            
        </div>
    )
}
export default Body;