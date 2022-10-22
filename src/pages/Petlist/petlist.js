// import React, {userState} from react;
// import { pets } from "../../mock_server/pets";
import PetList from "../../Components/petlist";
import Header from "../../Components/header";
import React from 'react';
import SearchBar from "../../Components/searchBar";
import PageNumber from "../../Components/pageNumber";
import { useState } from "react";

function DisplayPets(){
    const [page, setPage] = useState(1)
    
    const [query, setQuery] = useState({
        color: "",
        sex: "",
        immunization: ""
    });
    
    const changeValue = (query) =>{
        setQuery(query)
        console.log(query)
    }

    const searchBarStyle={
        marginTop:"30px",
        marginLeft:"20%",
        marginRight:"20%",
        marginBottom:"30px"
    }

    const pageNumberStyle={
        marginTop:"30px",
        marginRight:"10%",
        textAlign: "right",
        marginBottom:"50px"
    }

    return (
        <div>
            <Header/>

            {/* <div style={searchBarStyle} onClick={()=>setQuery(e.target.value)}> */}
            <div style={searchBarStyle}>
                <SearchBar changeValue={changeValue}/>
            </div>
         
            <div>
                <PetList page={page} query={query}/>
            </div>
            
            <div style={pageNumberStyle}>
                <PageNumber onClick={(e)=>setPage(e.target.value)}/>
            </div>

        </div>

        
    );
}
export default DisplayPets;