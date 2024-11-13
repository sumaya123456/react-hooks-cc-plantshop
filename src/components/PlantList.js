import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, sellplant}) {
  return (
    <ul className="cards"> {
      plants 
      .filter(plant => !plant.sold)
      .map(plant => <PlantCard 
        plant={plant}
        key={plant.id} 
        sellplant={sellplant}
          />)
      
    }
    </ul>
  );
}
export default PlantList;
