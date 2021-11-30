import "./DetailPlant.scss"

import { useState } from "react";
import axios from "axios";


const DetailPlant = () => {
    const [plantName, setPlantsName] = useState([]);
    const [plant, setPlant] = useState({
        name: "",
        img: "",
        price: "",
        description: "",
    });
    const searchname = () => {
      setPlantsName()
    }

    const searchPlants = () => {
        axios.get('http://localhost:4000/plants/:plantName').then(
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
   /*  const plantName = plant.filter(plants => plants === plants.name) */
    
    searchPlants()

    return (
      <ul className="bonsaiList">
        {plantName.map((plant) => {
          return (

            <li key={JSON.stringify(plant)} >
              <div className="bonsaiList__item">
                <h2>{plant.name}</h2>
                <img className="img_card" src={plant.img} alt={plant.name} />
                <p className="price_card"> Precio: {plant.price} €</p>
              </div>
            </li>

          );
        })}
      </ul>

    );

}

export default DetailPlant;

        //<div>
            //<div class="plantInfoContainer">
                //<h3> {plant.name}</h3>
                //<img className="plantImgContainer" src={plant.img} alt={plant.name} />
                //<h4>Precio: {plant.price}</h4>
                //<h4>Descripción: {plant.description}</h4>
            //</div>
        //</div>