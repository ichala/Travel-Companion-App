import React from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
import { Chip, Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import mapStyles from "./mapStyles";
function Map({
  setCoordinates,
  SetBounds,
  coordinates,
  places,
  setChildClicked,
  weatherData,
}) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:650px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          SetBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isMobile ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {" "}
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg"
                  }
                />
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            )}
          </div>
        ))}
        {weatherData?.list?.length &&
          weatherData.list.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img
                height={100}
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                height="70px"
              />
              <Chip size="small" label={"Temp: " + data.main.temp}></Chip>
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
