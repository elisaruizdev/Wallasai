import "./DetailPlant.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
 
const DetailPlant = () => {
  const [plant, setPlant] = useState({});
  const query = new URLSearchParams(useLocation().search);
  const name = query.get("plantName");
  console.log(query,"query");
  console.log(name,"queryName");
  useEffect(() => {
    const searchPlants = () => {
      axios.get(`http://localhost:4000/plants/${name}`).then(
        (res) => {
          setPlant({
            name: res.data.data.plants.name,
            img: res.data.data.plants.img,
            price: res.data.data.plants.price,
            description: res.data.data.plants.description,
          });
 
 
        }
      );
    };
    searchPlants();
  }, []);
  return (
 
    <div class="more-info">
   
    <div class="more-info__cards_detail">
      <div class="more-info__card_detail">
         
          <div class="more-info__card-content_detail">
      <img className="plantImgContainer" src={plant.img} alt={plant.name} /> 
     <div className="content_text">
      <h1>{plant.name}</h1>
        <p>{plant.price}</p>
        
        <p>{plant.description}</p>  
        </div>
        </div>
      </div>
 </div>
 </div>
  );
};
 
export default DetailPlant;