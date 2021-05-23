/* eslint-disable react/jsx-props-no-spreading */
import "./App.css";
import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Home from "./pages/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            label="Home"
            className={classes.tabLink}
            component={Link}
            to="/"
            {...a11yProps(0)}
          />
          <Tab
            label="Category"
            className={classes.tabLink}
            component={Link}
            to="/category"
            {...a11yProps(1)}
          />
          <Tab
            label="Products"
            className={classes.tabLink}
            component={Link}
            to="/products"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      {/* Route components are rendered if the path prop matches the current URL */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
