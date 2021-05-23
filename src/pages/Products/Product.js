/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
import TabPanel from "../../components/TabPanel";

const Product = ({ data }) => {
  const params = useParams();
  const productDetails = data.find(
    (product) => product.id.toString() === params.id
  );

  return (
    <TabPanel>
      <h3>{productDetails.name}</h3>
      <p>{productDetails.description}</p>
      <p>Status: {productDetails.status}</p>
    </TabPanel>
  );
};

export default Product;
