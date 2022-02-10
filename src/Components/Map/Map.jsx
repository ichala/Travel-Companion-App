import React from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from "@material-ui/lab/Rating";
function Map({setCoordinates,SetBounds,coordinates,places ,setChildClicked,}) {
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
      onChildClick={(child) => setChildClicked(child)}
    >
    {places?.map((place,i)=>(
      <div className={classes.markerContainer}
      lat={Number(place.latitude)}
      lng={Number(place.longitude)}
      key={i}
      >
          {!isMobile ? (
            <LocationOnOutlinedIcon color="primary" fontSize="large" />
          ):(
              <Paper elevation={3} className={classes.paper}>
               <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg'}
                  />
              <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
            </Paper>
          )}
      </div>
    ))}
    </GoogleMapReact></div>
  );
}

export default Map;
