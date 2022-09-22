// import React, {userState} from react;
// import { pets } from "../../mock_server/pets";
import PetList from "../../Components/petlist";
import Header from "../../Components/header";
import React from 'react';
import SearchBar from "../../Components/searchBar";
import PageNumber from "../../Components/pageNumber";

function DisplayPets(){

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
                <PetList/>
            </div>
            
            <div style={pageNumberStyle}>
                <PageNumber/>
            </div>

        </div>

        
    );
}
export default DisplayPets;