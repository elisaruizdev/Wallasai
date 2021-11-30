import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getPlants from "../../api/fetch_plants";
import "./CarnivorousList.scss";

const CarnivorousList = () => {
  useEffect(() => {
    formatPlants();
  }, []);

  const [plants, setPlants] = useState([]);

  const formatPlants = async () => {
    const plantdb = await getPlants();
    setPlants(plantdb.data.plants);
  };

  const carnivorous = plants.filter(plant => plant.specie == "Planta Carnívora")
  
  return (
    <div className="carnivorous_container">
      <ul className="carnivorousList">
        {carnivorous.map((plant) => {
          return (
            <li key={JSON.stringify(plant)} >
              <div className="carnivorousList__item">
                
                <Link to ="/detail" >
                <img className="img_card"src={plant.img} alt={plant.name}/>
                </Link>
                <h2>{plant.name}</h2>
                <p className="price_card">{plant.price}</p>
               
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CarnivorousList;

