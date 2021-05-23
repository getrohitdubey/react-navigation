import React from "react";
import { useParams } from "react-router-dom";
import TabPanel from "../../components/TabPanel";

const Item = () => {
  const params = useParams();

  return <TabPanel>{params.name.toUpperCase()}</TabPanel>;
};

export default Item;
