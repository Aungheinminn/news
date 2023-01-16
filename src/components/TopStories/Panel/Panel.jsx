import React from "react";
import classes from "./style.module.css";
import bookmark from "./bookmark_24px.png"

const Panel = () =>{
    return(
        <div className={classes.container}>
            <div className={classes.logo}>
                <h1 className={classes.h1}>Top stories</h1>
            </div>
            <div>
                <button className={classes.btn}>
                    <img src={bookmark} alt="" /> VIEW BOOKMARK
                </button>
                <button className={classes.dropdown}>Newest First</button>
            </div>
            
        </div>
    )
}
export default Panel