import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import dataShop from "../../../data/dataShop";

function ProductDetail() {
  const { id } = useParams();
  console.log(typeof id);
  const productDetails = dataShop.find((item) => item.id === Number(id));
  console.log(productDetails);
  const { thumbnailUrl, name } = productDetails;
  return (
    <div className="product-detail container">
      <div className="product-detail-container">
        <img src={thumbnailUrl} alt="" />
        <h2>{name}</h2>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;
