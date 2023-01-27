import React from "react"
import Card from "../Card/Card"
import classes from "./style.module.css"

const TwoCards = ({cards}) =>{
    return(
        <div className={classes.container}>
            {cards.slice(5,7).map((card) =>(
                <Card card={card} key={card.id} />
            ))}
        </div>
    )
}
export default TwoCards;