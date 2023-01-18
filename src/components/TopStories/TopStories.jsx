import React from "react"
import Grid from "./Grid/Grid"
import Panel from "./Panel/Panel"
import classes from "./style.module.css"

const TopStories = () =>{
    return(
        <div className={classes.container}>
           <Panel />
           <Grid />

        </div>
    )
}
export default TopStories;