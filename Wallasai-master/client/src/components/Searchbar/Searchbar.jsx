import { useState} from "react";
import axios from "axios";
import "./Searchbar.scss";
import { Link } from "react-router-dom";


const Searchbar = () => {
  const [plantsName, setPlantsName] = useState("");
  const [plantsChosen, setPlantsChosen] = useState(false);
  const [plant,setPlant] = useState({
    name:"",
    img: "",
    price: "",
    description: "",
  });
  console.log("esto es plant", plant)
  const searchPlants = () => {
    axios.get(`http://localhost:4000/plants/${plantsName}`).then(
      (res) => {
        setPlant({
          name: plantsName,
          img: res.data.data.plants.img,
          price: res.data.data.plants.price,
          description: res.data.data.plants.description,
        });
        setPlantsChosen(true);

      }
    );
  };

    console.log("esto es plant", plant)
  return (
    <div className="search_bar">
     <h1 className="search_bar_title"> ¡Encuentra tu planta! </h1>
      <div className="search_bar_content" >
       
        <input type="text" placeholder="Buscar"
          onChange={(event) => {
            setPlantsName(event.target.value);
          }}
          value = {plantsName.toLowerCase()}
        />
        <div>
          {plantsName && <button onClick={searchPlants} className="css-button-rounded--green"> Buscar  </button>}
        </div>
      </div>
      <div class="displaySection">
          {!plantsChosen ? (
            <h1 class="selectChoise"></h1>
          ) : (
              <div class="plantContainer">
                <div class="plantInfoContainer">
                <Link to = {`/detail?plantName=${plant.name}`} >
                  <img className="plantImgContainer" src={plant.img} alt={plant.name} />
                  </Link>
                  <h3> {plant.name}</h3>
                  <h4> {plant.price} </h4>
                </div>
              </div>
            
          )
          }
      </div>
    </div>
  ); 
}

export default Searchbar;