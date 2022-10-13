import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import DisplayPets from '../pages/Petlist/petlist';
import PetInfo from '../pages/petInformation';

function PetRouter(){
    return(
        <BrowserRouter>

            <Routes>
                <Route path="/petlist" element={<DisplayPets/>}/>                    

                <Route path="/petInfo/:petId" element={<PetInfo/>}/>
            </Routes>

        </BrowserRouter>
    );
}
 
export default PetRouter;