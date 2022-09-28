import {useEffect, useState} from "react";
import Template from "./Template";




 function GetFetch () {
    const[proxyUrl,setProxyUrl] = useState( 'https://whispering-tor-04671.herokuapp.com/');
    const[apiUrl,setApiUrl] = useState('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json');
    const[list,setList] = useState([]);
    const[longText,setLongText] = useState("")
    const[info,setInfo] = useState([])
    const [install,setInstall] = useState();


    try {

        fetch(proxyUrl+apiUrl)
            .then((response) => response.json())
            .then(data => {

                if (data.quoteAuthor === ""){
                    setList("Anonim")
                }else {
                    setList(data.quoteAuthor);
                }if(data.quoteText.length > 120){
                    setLongText(`long-quote`)
                }else{
                    setLongText('');
                }
                setInfo(data.quoteText)
            })


    }catch (error){
        GetFetch ()
    }

    const tweetQuote = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${list} - ${info}`;
        window.open(twitterUrl);
    }

    const newQuoteBtn = () => {

        GetFetch ()
    }

    return(
        <Template longDesc = {longText} indexes = {list} details = {info}  easing = {() => newQuoteBtn()} twitter = {() => tweetQuote()}/>
    )

}


export default GetFetch