import React from "react"
import Topic from "../Topic/Topic";
import classes from "./style.module.css"

const CardTopic = ({topics}) =>{
    return(
        <div className={classes.container}>
            {topics.slice(5,7).map(topic =>(
                <Topic topic={topic} key={topic.id} />
            ))}
        </div>
    )
}
export default CardTopic;