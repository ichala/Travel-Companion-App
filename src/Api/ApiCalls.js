import axios from "axios";


export const getPlacesData = async (type,sw,ne) => {
  const URL =
  "https://travel-advisor.p.rapidapi.com/"+type+"/list-in-boundary";
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "c18f8c08bamsh66ee7baf39efe6ep19af4cjsne430a02717fa",
      },
    });
    return(data);
  } catch (error) {
    console.log(error);
  }
};
export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find?units=metric', {
        params: { lat, lon: lng },
        headers: {
          'x-rapidapi-key': 'c18f8c08bamsh66ee7baf39efe6ep19af4cjsne430a02717fa',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};