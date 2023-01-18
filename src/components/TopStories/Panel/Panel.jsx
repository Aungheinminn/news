import React, { useState } from "react";
import classes from "./style.module.css"
import bookmark from "./bookmark_24px.png"
import clsx from "clsx";

const Panel = () =>{
    const [drop,setDrop] = useState(false);
    const [dropShow,SetDropShow] = useState(false);
    const [ulBorder,setUlBorder] = useState(false);

    const makeBorder = clsx(classes.ul,{
        [classes.makeborder]:ulBorder
    })
    const dropDown = clsx(classes.dropdown1,{
        [classes.dropped]:drop
    })
    const dropOther = clsx(classes.dropdown2,classes.dropdown3,{
        [classes.appear]:dropShow
    })
    return(
        <div className={classes.container}>
            <div className={classes.logo}>
                <h1 className={classes.h1}>Top stories</h1>
            </div>
            <div className={classes.wrap}>
                <button className={classes.btn}>
                    <img src={bookmark} alt="" /> VIEW BOOKMARK
                </button>
                <div className={makeBorder} >
                    <li className={dropDown} onClick={()=>{
                        setDrop(!drop),
                        SetDropShow(!dropShow),
                        setUlBorder(!ulBorder)
                    }}>Newest First</li>
                    <li className={dropOther}>Newest second</li>
                    <li className={dropOther}>Newest third</li>
                </div>
            </div>
            
        </div>
    )
}
export default Panel