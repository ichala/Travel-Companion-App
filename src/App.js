import React, { useEffect, useState } from "react";

import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
import Places from "./Components/Places/Places";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./Api/ApiCalls";
function App() {
  const [places, SetPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, SetBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  },[]);
  
  useEffect(() => {
    setIsLoading(true)
    console.log(coordinates, bounds);
    getPlacesData(type,bounds.sw,bounds.ne).then((data) => {
     
      SetPlaces(data);
      setIsLoading(false)
    });
  }, [type,coordinates, bounds]);
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List PlaceList={places}
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
            places ={places}
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
