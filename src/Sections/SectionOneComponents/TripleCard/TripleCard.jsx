import React from "react"
import TriCards from "../TriCards/TriCards"
import classes from "./style.module.css"

const TripleCard = ({cards}) =>{
    return(
        <div className={classes.container}>
            {cards.slice(4,7).map(card=>(
                <TriCards card={card} key={card.id} />
            ))}
        </div>
    )
}
export default TripleCard;