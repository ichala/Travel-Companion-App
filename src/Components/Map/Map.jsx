import React from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import { useMediaQuery } from "@material-ui/core";

function Map() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:650px)");
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCu-xEUxGhsKMZE-7Zya46V2lNVl50OrbQ" }}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      onChange={''}
      options={''}
      onChildClick={''}
    >

    </GoogleMapReact></div>
  );
}

export default Map;
