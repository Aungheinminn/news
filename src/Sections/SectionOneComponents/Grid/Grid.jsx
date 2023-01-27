import React from "react"
import classes from './style.module.css'
import { datas } from "../../../config/data"
import LastData from "../LastData/LastData"
import TwoCards from "../TwoCards/TwoCards"
import CardTopic from "../CardTopic/CardTopic"
import TripleCard from "../TripleCard/TripleCard"


const Grid = () =>{
    return(
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.wrap}>
                    <div className={classes.solo}>
                        <LastData />
                    </div>
                    <div className={classes.four}>
                        <div className={classes.two}>
                            <TwoCards cards={datas} />
                        </div>
                        <div className={classes.topicTwo}>
                            <CardTopic topics={datas} />
                        </div>
                    </div>
                </div>
                <div className={classes.wrap1}>
                    <div className={classes.trio}>
                        <TripleCard cards={datas} />

                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Grid;