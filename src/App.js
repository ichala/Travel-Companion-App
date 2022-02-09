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
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  },[]);
  
  useEffect(() => {
    console.log(coordinates, bounds);
    getPlacesData(bounds.sw,bounds.ne).then((data) => {
      console.log(data);
      SetPlaces(data);
    });
  }, [coordinates, bounds]);
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List PlaceList={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            SetBounds={SetBounds}
            coordinates={coordinates}
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
