import { PICTURES } from "./fetch_routes";



const getPictures = async () => { 

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
 
};

const token = localStorage.getItem("token")
const tokenParsed = token.replaceAll('"','')


headers.Authorization = `Bearer ${tokenParsed}`
  
  const pictures = await fetch(PICTURES, {
    method: "GET",
    credentials: "include",
    headers: headers,
  });
  const resPictures = await pictures.json();
  console.log(resPictures);
  return resPictures;
};

const postPictures = async () => { 

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
     
    };
    
    const token = localStorage.getItem("token")
    const tokenParsed = token.replaceAll('"','')
    
    
    headers.Authorization = `Bearer ${tokenParsed}`
      
      const pictures = await fetch(PICTURES, {
        method: "POST",
        credentials: "include",
        headers: headers,
      });
      const resPictures = await pictures.json();
      console.log(resPictures);
      return resPictures;
};

/* const deletePictures = async () => { 

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
     
    };
    
    const token = localStorage.getItem("token")
    const tokenParsed = token.replaceAll('"','')
    
    
    headers.Authorization = `Bearer ${tokenParsed}`
      
      const pictures = await fetch(PICTURES, {
        method: "DELETE",
        credentials: "include",
        headers: headers,
      });
      const resPictures = await pictures.json();
      console.log(resPictures);
      return resPictures;
}; */




export {getPictures, postPictures} 
