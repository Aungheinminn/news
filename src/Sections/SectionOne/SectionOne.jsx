import React from "react"
import Grid from "../SectionOneComponents/Grid/Grid"
import Panel from "../SectionOneComponents/Panel/Panel"
import classes from "./style.module.css"

const SectionOne = () =>{
    return(
        <div className={classes.container}>
            <Panel />
            <Grid />
        </div>
    )
}
export default SectionOne