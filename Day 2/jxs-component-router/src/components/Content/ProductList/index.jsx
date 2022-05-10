import React from "react";
import Product from "../Product";

function ProductList({ dataShop }) {
  return (
    <div className="container">
      <div className="product-list">
        {dataShop.map((product) => (
          <Product
            product={product}
            key={product.id}
            
          />
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;
