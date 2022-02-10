import { AppBar, Box, InputBase, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import {Autocomplete} from '@react-google-maps/api';
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles'
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
function Header({ onPlaceChanged, onLoad }) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:650px)"); 
  return (
   !isMobile ? (<AppBar position="static"  style={{backgroundColor:"#02353C" ,maxHeight:'10vh'}}>
      <Toolbar className={classes.toolbar}>
      <Typography variant="h5" className={classes.title}>
        <EmojiNatureIcon fontSize="large"/>Travel Buddy Companion
        </Typography>
        <Box display="flex">
         
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="New York City" classes={{root: classes.inputRoot , input:classes.inputInput}} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>):(<AppBar position="static"  style={{backgroundColor:"#02353C" ,maxHeight:'6vh'}}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
        <EmojiNatureIcon fontSize="large"/>Travel Buddy Companion
        </Typography>
        <Box display="flex">
         
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="New York City" classes={{root: classes.inputRoot , input:classes.inputInput}} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>)
  );
}

export default Header;
