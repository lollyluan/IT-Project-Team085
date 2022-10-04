import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import DisplayPets from '../pages/Petlist/petlist';
import PetInfo from '../pages/petInformation';
import Example from '../pages/test';

function PetRouter(){
    return(
        <BrowserRouter>

            <Routes>
                <Route path="/petlist" element={<DisplayPets/>}/>                    

                <Route path="/petInfo" element={<PetInfo/>}/>

                <Route path="/test" element={<Example/>}/>

            </Routes>

        </BrowserRouter>
    );
}
 
export default PetRouter;