import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { createRef, useEffect, useState } from "react";
import Places from "../Places/Places";

import useStyles from "./styles";
function List({ PlaceList,type, setType, rating, setRating, childClicked, isLoading }) {
 
 
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
   const refs = Array(PlaceList?.length).fill().map((_, i) => elRefs[i] || createRef());
     setElRefs(refs);
  }, [PlaceList]);


  return (
    <div className={classes.container}>
      <Typography variant="h4">
        {" "}
        Nearby Hotels , Restaurants & Leisures ..{" "}
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Leisures</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {PlaceList?.map(
          (place, i) =>
            place.name && (
              <Grid key={i} ref={elRefs[i]} item  xs={12}>
                <Places key={i} selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </Grid>
            )
        )}
      </Grid>
        </>
        )}
    </div>
  );
}

export default List;
