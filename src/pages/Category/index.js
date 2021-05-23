/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Item from "./Item";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const Category = () => {
  const { url, path } = useRouteMatch();
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        aria-label="Vertical tabs example"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab
          label="Shoes"
          className={classes.tabLink}
          component={Link}
          to={`${url}/shoes`}
          {...a11yProps(0)}
        />
        <Tab
          label="Boots"
          className={classes.tabLink}
          component={Link}
          to={`${url}/boots`}
          {...a11yProps(1)}
        />
        <Tab
          label="Footwear"
          className={classes.tabLink}
          component={Link}
          to={`${url}/footwear`}
          {...a11yProps(2)}
        />
      </Tabs>
      <Route path={`${path}/:name`}>
        <Item />
      </Route>
    </div>
  );
};

export default Category;
