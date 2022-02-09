import axios from "axios";
const URL="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"



const getPlacesData= async() => {
    try{
    const response = await axios.get(URL,{

        params: {
          bl_latitude: '11.847676',
          tr_latitude: '12.838442',
          bl_longitude: '109.095887',
          tr_longitude: '109.149359',
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': '9ec6b6afa2msh525393ead27bda3p1c32f0jsn2cffb1b4e514'
        }
      });
    } catch(error) {
console.log(error);
    }
}