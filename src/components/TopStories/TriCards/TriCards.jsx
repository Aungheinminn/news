import React from "react"
import classes from "./style.module.css"

const TriCards = ({card:{
    cover,
    description
}}) =>{
    return(
        <div className={classes.container}>
            <img src={cover} className={classes.cover} alt="" />
            <div className={classes.content}>
                <div className={classes.wrap}>
                    <h4 className={classes.h4}>
                       {description}
                    </h4>
                    <p className={classes.p}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default TriCards;