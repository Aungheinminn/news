import React, { useState } from "react";
import classes from './style.module.css';
import search from './search.svg'
import clsx from "clsx";


const SearchBar = () => {
    const [show,setShow] = useState(false)
    const fadeEffect = clsx(classes.searchBar,{
        [classes.searchBarShow]:show
    })
    return(

        <div className={classes.container}>
            <div className={fadeEffect}>
                <input type="text" className={classes.input} placeholder="Search all new" />
            </div>
            <img src={search} alt="s" className={classes.svg} onClick={()=>setShow(!show)} />
        </div>
        
    )
    
}
export default SearchBar;