import React from "react"
import classes from "./style.module.css"
import { datas } from "../../../config/data"
import Cards from "../Cards/Cards"

const Grid = () =>{
    return(
        <div className={classes.container}>
            {datas.slice(4,7).map(data =>(
                <Cards data={data} key={data.id} />
            ))}
        </div>
    )
}
export default Grid;