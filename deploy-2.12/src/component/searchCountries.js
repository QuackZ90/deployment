import {useState,useEffect} from "react";
import geoDBAPI from "../geoDBAPI";

function SearchCountries (){

    const [countriesList, setCountriesList] = useState([]);
    const [userInput, setUserInput] = useState("");


    function handleChange(event){
        setUserInput(event.target.value);  
    }

    useEffect(()=>{

        function retrieveCountriesList(getData){

            console.log(`Getting data...`);
                
            geoDBAPI.get("/countries",
                {
                    params:{namePrefix: userInput,}
                }).then(res=>{
                    if (res.status ===200){
                        if(res.data.data.length===0){
                            setCountriesList([{code:"0", name:"No countries found"}]);
                        }else{
                            setCountriesList(res.data.data);
                        }
                        console.log("Data received.")
                        clearInterval(getData);
                    };
                }).catch(error=>{
                    console.log(error);
                })
    
        }

        console.log(userInput);

         if(userInput){

            setCountriesList([{code:"loading", name:"Loading..."}]);

            const getData = setInterval(()=>{retrieveCountriesList(getData)} , 1000);
  
            return (()=>{
                 console.log("Cancel getting data...");
                 clearInterval(getData)})
        } else{
            setCountriesList([]);
        }
        
    },[userInput])



    
    

    return(


        <div className="search-box">
            <form>
                <label> Enter a country's name: <input type="text" value={userInput} onChange={handleChange}></input>
                </label>
            </form>

            <div className="results-box">
                <ul className="city-list">
                    {countriesList.map((country)=>{
                        return <li key={country.code}>{country.name}</li>
                    })}

                </ul>          
            </div>
        </div>
    )

}


export default SearchCountries;