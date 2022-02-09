import { FormControl, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from "./styles";
function List() {
  const classes =useStyles();
  const [type,setType]=useState('restaurants')
  const [rating,setRating]=useState('')
  return (
    <div className={classes.container}>
      <Typography variant='h4' > Nearby Hotels , Restaurants & Leisures .. </Typography>
      <FormControl className={classes.formControl}>
<InputLabel>Type</InputLabel>
<Select value={type} onChange={e=>setType(e.target.value)}>
<MenuItem value="restaurants">Restaurants</MenuItem>
<MenuItem value="hotels">Hotels</MenuItem>
<MenuItem value="leisures">Leisures</MenuItem>
</Select>
      </FormControl>
      <FormControl className={classes.formControl}>
<InputLabel>Rating</InputLabel>
<Select value={rating} onChange={e=>setRating(e.target.value)}>
<MenuItem value={0}>All</MenuItem>
<MenuItem value={3}>Above 3.0</MenuItem>
<MenuItem value={4}>Above 4.0</MenuItem>
<MenuItem value={4.5}>Above 4.5</MenuItem>
</Select>
      </FormControl>
    </div>
  )
}

export default List