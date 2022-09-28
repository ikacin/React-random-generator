import mainLogo from './quotation-mark.png';
import {useState} from "react";
import * as React from 'react';
import Icon from '@mui/material/Icon';
import TwitterIcon from '@mui/icons-material/Twitter';

const Template = (props) => {
    const[addLoader,setAddLoader] = useState(false);

    return(
       <>
            <div className={`quote-container ${addLoader === false ? "add" : "hidden"}`} id={"quote-container"}>
                <div className={"quote-text"}>
                    <img src={mainLogo}/>
                    <span id={"quote"}>{props.details}</span>
                </div>

                <div className={"quote-author"}>
                    <span className={props.longDesc} id={`author`}> {props.indexes}</span>
                </div>

                <div className={"button-container"}>
                    <button onClick={props.twitter} className={"twitter-button"} id={"twitter"} title={"Tweet This!"}>
                        <Icon baseClassName="material-icons-two-tone"><TwitterIcon/></Icon>

                    </button>
                    <button onClick={props.easing} id={"new-quote"}>New Quote</button>
                </div>

            </div>
        <div className={`loader ${addLoader === false ? "hidden" : "add"}`} id={"loader"}></div>

       </>
    )
}

export default  Template