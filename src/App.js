import React, { useEffect, useState } from "react";

import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
import Places from "./Components/Places/Places";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData, getWeatherData } from "./Api/ApiCalls";
function App() {
  const [places, SetPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({lat: 1, lng: 1});
  const [bounds, SetBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [autocomplete, setAutocomplete] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [rating, setRating] = useState(0);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  },[]);
  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);
  useEffect(() => {
    if(bounds.sw && bounds.ne){
    setIsLoading(true)
    getWeatherData(coordinates.lat, coordinates.lng)
        .then((data) => setWeatherData(data));
    getPlacesData(type,bounds.sw,bounds.ne).then((data) => {
      setFilteredPlaces([]);
      setRating('');
      SetPlaces(data.filter((place) => place.name && place.num_reviews > 0));
      setIsLoading(false)
    });}
  }, [type, bounds]);
  return (
    <div className="App">
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad}/>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List PlaceList={filteredPlaces.length ? filteredPlaces : places}
           isLoading={isLoading}
           childClicked={childClicked}
           type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
           setChildClicked={setChildClicked}
            setCoordinates={setCoordinates}
            SetBounds={SetBounds}
            coordinates={coordinates}
            places ={filteredPlaces.length ? filteredPlaces : places}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>

      {/* 
      <Map />
      <Places /> */}
    </div>
  );
}

export default App;
