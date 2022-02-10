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
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import useStyles from "./styles";
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import { Card, CardHeader } from "@mui/material";
function List({ PlaceList,type, setType, rating, setRating, childClicked, isLoading }) {
 
 
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
   const refs = Array(PlaceList?.length).fill().map((_, i) => elRefs[i] || createRef());
     setElRefs(refs);
  }, [PlaceList]);


  return (
    <div className={classes.container}>
      <Typography variant="h4" style={{color:"white"}}>
        {" "}
       Find Nearby Hotels , Restaurants & Leisures ..{" "}
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel style={{color:'white'}}>Type</InputLabel>
        <Select style={{color:'white' }} value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Leisures</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel style={{color:'white'}}>Rating</InputLabel>
        <Select style={{color:'white'}} value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}><StarIcon fontSize="small" color="secondary" /><StarIcon  fontSize="small" color="secondary" /><StarIcon fontSize="small" color="secondary" />+</MenuItem>
          <MenuItem value={4}><StarIcon fontSize="small" color="secondary" /><StarIcon fontSize="small" color="secondary" /><StarIcon fontSize="small" color="secondary" /><StarIcon fontSize="small" color="secondary" />+</MenuItem>
          <MenuItem value={4.5}><StarIcon fontSize="small" color="secondary" /><StarIcon fontSize="small" color="secondary" /><StarIcon fontSize="small" color="secondary" /><StarIcon fontSize="small" color="secondary" /><StarHalfIcon fontSize="small"color="secondary" />+</MenuItem>
        </Select>
      </FormControl>
      {isLoading ? (
      <>
      <Card sx={{ maxWidth: "100%", m: 2 }}>
   
            <Skeleton sx={{ height: 500 }} animation="wave" variant="rectangular" />
            <CardHeader
        avatar={ <Skeleton animation="wave" variant="circular" width={40} height={40} /> }
        title={
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />}
        />
         </Card> 
         <Card sx={{ maxWidth: "100%", m: 2 }}>
   
   <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
   <CardHeader
avatar={ <Skeleton animation="wave" variant="circular" width={40} height={40} /> }
title={
   <Skeleton
     animation="wave"
     height={10}
     width="80%"
     style={{ marginBottom: 6 }}
   />}
/>
</Card> 


         </>
      ) : (
        <>
      
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
