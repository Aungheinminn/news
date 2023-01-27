import React, { useState } from "react";
import classes from './style.module.css';
import search from './search.svg'
import clsx from "clsx";


const SearchBar = () => {
    const [show,setShow] = useState(false)
    const svgWrapBg = clsx(classes.svgWrap,{
        [classes.svgWrapBgShow]:show
    })
    const fadeEffect = clsx(classes.searchBar,{
        [classes.searchBarShow]:show
    })
    return(

        <div className={classes.container}>
            <div className={fadeEffect}>
                <input type="text" className={classes.input} placeholder="Search all new" />
            </div>
            <div className={svgWrapBg}>
                  <img src={search} alt="s" 
                    className={classes.svg}
                    onClick={()=>setShow(!show)} />
            </div>
          
        </div>
        
    )
    
}
export default SearchBar;