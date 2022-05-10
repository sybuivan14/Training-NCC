import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

function Product({ product }) {
  const navigate = useNavigate();
  return (
    <div className="product" onClick={() => navigate(`detail/${product.id}`)}>
      <div className="product-wrapper">
        <img src={product.thumbnailUrl} alt={product.name} />
        <h2 className="product-name">{product.name}</h2>
      </div>
    </div>
  );
}

Product.propTypes = {};

export default Product;
