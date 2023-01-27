import React from "react"
import classes from "./style.module.css"

const Card = ({card:{
    id,
    description,
    cover
}}) =>{
    return(
        <div className={classes.container} key={id}>
            <img src={cover} className={classes.cover} alt="" />
            <div className={classes.content}>
                <div className={classes.wrap}>
                    <h4 className={classes.h4}>
                       {description}
                    </h4>
              
                </div>
            </div>
        </div>
    )
}
export default Card;