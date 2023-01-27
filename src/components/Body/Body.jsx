import React from "react"
import SectionOne from "../../Sections/SectionOne/SectionOne";
import SectionTwo from "../../Sections/SectionTwo/SectionTwo";
// import Sport from "../Sport/Sport";
// import TopStories from "../TopStories/TopStories";
import classes from "./style.module.css"

const Body = () =>{
    return (
        <div className={classes.container}>
            <div className={classes.inner}>
                {/* <TopStories /> */}
                <SectionOne />  
                <SectionTwo />
                {/* <Sport /> */}
            </div>
            
        </div>
    )
}
export default Body;