import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getPlants from "../../api/fetch_plants";
import "./CactusList.scss";

const CactusList = () => {
  useEffect(() => {
    formatPlants();
  }, []);

  const [plants, setPlants] = useState([]);

  const formatPlants = async () => {
    const plantdb = await getPlants();
    setPlants(plantdb.data.plants);
  };

  const cactus = plants.filter(plant => plant.specie == "cactus")
  
  return (
    <div className="cactus_container">
      <ul className="cactusList">
        {cactus.map((plant) => {
          return (
            <li key={JSON.stringify(plant)} >
              <div className="cactusList__item">
               
                <Link to ="/detail" >
                <img className="img_card" src={plant.img} alt={plant.name}/>
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

export default CactusList;

