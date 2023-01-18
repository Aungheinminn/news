import React from "react"
import classes from "./style.module.css"

const LastData = () =>{
    return (
        <div className={classes.container}>
            <img src={'https://picsum.photos/200/300?random=1'} className={classes.cover} alt="" />
            <div className={classes.content}>
                <div className={classes.wrap}>
                    <h4 className={classes.h4}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nostrum. Dolorum, maiores cumque. Non
                    </h4>
                    <p className={classes.p}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas natus nesciunt beatae architecto. Dolorum harum
                    </p>
                </div>
            </div>
        </div>
    )
}
export default LastData