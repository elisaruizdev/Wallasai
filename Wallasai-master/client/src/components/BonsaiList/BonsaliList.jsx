import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getPlants from "../../api/fetch_plants";
import "./BonsaiList.scss";

const BonsaiList = () => {
  useEffect(() => {
    formatPlants();
  }, []);

  const [plants, setPlants] = useState([]);

  const formatPlants = async () => {
    const plantdb = await getPlants();
    setPlants(plantdb.data.plants);
  };

  const bonsai = plants.filter(plant => plant.specie == "bonsai")
  
  return (
    <div className="bonsai_container">
      <ul className="bonsaiList">
        {bonsai.map((plant) => {
          return (
            <li key={JSON.stringify(plant)} >
            
              <div >
              <div className="bonsaiList__item">
                <Link to ="/detail" >
                <img className="img_card" src={plant.img} alt={plant.name} />
                </Link>
                <h2>{plant.name}</h2>
                <p className="price_card"> {plant.price} </p>
                </div>
              </div>
              
            </li>
            
          );
        })}
      </ul>
    </div>
  );
};

export default BonsaiList;