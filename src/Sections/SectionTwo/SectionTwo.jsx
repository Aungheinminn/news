import React from "react"
import Grid from "../SectionTwoComponents/Grid/Grid"
import Panel from "../SectionTwoComponents/Panel/Panel"
import classes from "./style.module.css"

const SectionTwo = () =>{
    return(
        <div className={classes.container}>
            <Panel />
            <Grid />
        </div>
    )
}
export default SectionTwo