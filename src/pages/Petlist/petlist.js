// import React, {userState} from react;
// import { pets } from "../../mock_server/pets";
import PetList from "../../Components/petlist";
import Header from "../../Components/header";
import React from 'react';
import SearchBar from "../../Components/searchBar";
import PageNumber from "../../Components/pageNumber";

import DropDownList from "../../Components/dropdownlist";
import { useState } from "react";
function DisplayPets(){
    const [page, setPage] = useState(1)
   
    const searchBarStyle={
        marginTop:"30px",
        marginLeft:"20%",
        marginRight:"20%",
        marginBottom:"30px"
    }

    const petListStyle={
        marginLeft:"10%",
        marginRight:"10%"
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

            <div style={searchBarStyle}>
                <SearchBar/>
            </div>
         
            <div style={petListStyle}>
                <PetList page={page}/>
            </div>
            
            <div style={pageNumberStyle}>
                <PageNumber onClick={(e)=>setPage(e.target.value)}/>
            </div>

        </div>

        
    );
}
export default DisplayPets;