import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          {" "}
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="/"
            end
          >
            Produtos
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink
            activeClassName={styles.active}
            className={styles.link}
            to="contact"
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
