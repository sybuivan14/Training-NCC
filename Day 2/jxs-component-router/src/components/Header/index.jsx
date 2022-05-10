import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerWrapper}>
        <div className={style.header__logo}>
          <Link to="/">
            <img
              src="https://logowik.com/content/uploads/images/shopee1950.jpg"
              alt="Logo"
            />
          </Link>
        </div>

        <nav className={style.nav}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <Link to="#">Home</Link>
            </li>
            <li className={style.navItem}>
              <Link to="#">About</Link>
            </li>
            <li className={style.navItem}>
              <Link to="#">Team</Link>
            </li>
            <li className={style.navItem}>
              <Link to="#">Services</Link>
            </li>
            <li className={style.navItem}>
              <Link to="#">People</Link>
            </li>
            <li className={style.navItem}>
              <Link to="#">Contact</Link>
            </li>
            <li className={style.navItem}>
              <Link to="#">Profiles</Link>
            </li>
          </ul>
        </nav>

        <div className={style.formSearch}>
          <form action="">
            <div className={style.inputSearch}>
              <input type="text" placeholder="Enter search term..." />
              <button>
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="60px"
                  height="60px"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
