import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from 'react';



function PlantPage({ plants, addNewPant, sellPlant}) {
const [searchTerm, setSearchTerm]= useState('')
  
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPant} />
      <Search setSearchTerm={setSearchTerm}/>
      <PlantList plants={plants.filter(plant => plant.name.toLocaleLowerCase().startswith(searchTerm.toLocaleLowerCase()))} sellplant={sellPlant}/>
    </main>
  );
}

export default PlantPage;
