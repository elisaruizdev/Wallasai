import { GET_PLANTS } from "./fetch_routes";
import { CREATE_PLANT } from "./fetch_routes";
const getPlants = async () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "",
  };

  const token = localStorage.getItem("token");
  const tokenParsed = token.replaceAll('"', "");

  headers.Authorization = `Bearer ${tokenParsed}`;

  const plants = await fetch(GET_PLANTS, {
    method: "GET",
    credentials: "include",
    headers: headers,
  });
  const resPlants = await plants.json();
  console.log(resPlants);
  return resPlants;
};
export const createPlant = async (form) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "",
  };

  const plants = await fetch(CREATE_PLANT, {
    method: "POST",
    credentials: "include",
    headers: headers,
    body: JSON.stringify(form),
  });
  const resPlants = await plants.json();
  localStorage.setItem("name", JSON.stringify(resPlants.data.name));
  localStorage.setItem("img", JSON.stringify(resPlants.data.img));
  localStorage.setItem("specie", JSON.stringify(resPlants.data.specie));
  localStorage.setItem("price", JSON.stringify(resPlants.data.price));
  localStorage.setItem("description", JSON.stringify(resPlants.data.description));

  if (!plants.ok) {
    throw new Error("No se ha podido crear planta", resPlants.message);
  }
  return resPlants;
};

export default getPlants;
