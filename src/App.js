import React from "react";

import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
import Places from "./Components/Places/Places";
import {CssBaseline ,Grid} from '@material-ui/core'
function App() {
  return (
    <div className="App">
      
      <CssBaseline />
      <Header />
        <Grid container spacing={3} style={{width :'100%'}}>
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
        </Grid>
      
      {/* 
      <Map />
      <Places /> */}
    </div>
  );
}

export default App;
