import React from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import { useMediaQuery } from "@material-ui/core";

function Map({setCoordinates,SetBounds,coordinates}) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:650px)");
  
  return (
    <div className={classes.mapContainer}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCu-xEUxGhsKMZE-7Zya46V2lNVl50OrbQ" }}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      onChange={e=>{
        setCoordinates({lat: e.center.lat,lng:e.center.lng})
        SetBounds({ne:e.marginBounds.ne , sw :e.marginBounds.sw})
      }}
      options={''}
      onChildClick={''}
    >

    </GoogleMapReact></div>
  );
}

export default Map;
