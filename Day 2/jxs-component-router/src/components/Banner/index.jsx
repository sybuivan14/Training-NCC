import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

function Banner({ data }) {
  console.log(data);
  return (
    <div className="container">
      <div className={style.bannerWrapper}>
        {data.map((item) => (
          <div className={style.banner} key={item.id}>
            <img src={item.thumbnailUrl} alt="" className={style.bannerImage} />
          </div>
        ))}
      </div>
    </div>
  );
}

Banner.propTypes = {};

export default Banner;
