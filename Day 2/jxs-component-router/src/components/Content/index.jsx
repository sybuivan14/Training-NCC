import React from "react";
import PropTypes from "prop-types";
import ProductList from "./ProductList";
import dataShop from "../../data/dataShop";
import "./content.css";
import Banner from "../Banner";
import data from "../../data/data";

function Content() {
  return (
    <>
      <Banner data={data} />
      <ProductList dataShop={dataShop} />;
    </>
  );
}

Content.propTypes = {};

export default Content;
