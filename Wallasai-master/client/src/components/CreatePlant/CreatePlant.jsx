import React, { useState,useContext } from "react";
import { useHistory } from "react-router-dom";
import { createPlant } from "../../api/fetch_plants";
import { UserContext } from "../../App";
import "./CreatePlant.scss";
 
const INITIAL_STATE = {
  name: "",
  specie:"",
  img: "",
  price: "",
  description: "",
};
const CreatePlant = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [createForm, setCreateForm] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);
 
  const submitForm = async (e) => {
    e.preventDefault();
    setError("");
 
    try {
      await createPlant(createForm);
      setCreateForm(INITIAL_STATE);
      setError("");
      history.push("/profile");
    } catch (error) {
      setError(error.message);
    }
  };
 
  const handleInput = (e) => {
    const { name, value } = e.target;
    setCreateForm({ ...createForm, [name]: value });
  };
 
  return (
      user && (
    <div>
      <h1 > ¡Wallasea tu anuncio!</h1>
      <form onSubmit={submitForm} className="createForm">
      <input class="inputBottom"
          type="text"
          name="img"
          value={createForm.img}
          onChange={handleInput}
          placeholder="  introduce el url de tu imagen"
        />
        
        <input class="inputBottom"
          type="text"
          name="name"
          value={createForm.name}
          onChange={handleInput}
          placeholder="  nombre"
        />
        <input class="inputBottom"
          type="text"
          name="specie"
          value={createForm.specie}
          onChange={handleInput}
          placeholder="  especie"
        />
        <input class="inputBottom"
          type="text"
          name="price"
          value={createForm.price}
          onChange={handleInput}
          placeholder="  precio"
        />
        <input class="inputBottom"
          type="text"
          name="description"
          value={createForm.description}
          onChange={handleInput}
          placeholder="  descripción"
        />
{/* 
        <label>
          Elige la especie
        </label>
        
        <select 
        type="text"
        name="specie"
        onChange={handleInput}
        >
          <option value={createForm.specie}>bonsai</option>
          <option value={createForm.specie}>cactus</option>
          <option value={createForm.specie}>Carnivoras</option>
          <option value={createForm.specie}>Árboles</option>
        </select> */}

        <button class="css-button-arrow--green" onClick={() => window.location.href="/profile"} type="submit">Crear Producto</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
      )
  );
};
 
export default CreatePlant; 