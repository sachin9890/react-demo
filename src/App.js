import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App bg">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
             
            </Typography>
            <Button color="inherit">LOGIN</Button>
            <Button color="secondary">SIGNUP</Button>
          </Toolbar>
        </AppBar>
        <div class="container-fluid bg">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12"></div>
            <div class="col-md-4 col-sm-4 col-xs-12">
                <form class="form-container">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Enter password" />
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" /> Remember Me
                        </label>
                    </div>
                    <button type="submit" class="btn btn-success btn-block">Submit</button>
                </form>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12"></div>
        </div>
    </div>
    </div>
  );
}

export default App;
