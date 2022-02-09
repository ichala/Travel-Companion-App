import { AppBar, Box, InputBase, Toolbar, Typography } from "@material-ui/core";
import {Autocomplete} from '@react-google-maps/api';
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles'
function Header() {
  let classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Companion
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore
          </Typography>
          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search ..." classes={{root: classes.inputRoot , input:classes.inputInput}} />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
