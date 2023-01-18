import React from "react"
import classes from "./style.module.css"

const Topic = ({topic:{
    description
}}) =>{
    return(
        <div className={classes.container}>
            <div className={classes.wrap}>
                <h4>{description}</h4>
            </div>
        </div>
    )
}
export default Topic;