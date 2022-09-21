import * as React from 'react';
import PropTypes from "prop-types";
import styles from "./MainMenu.module.scss";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const MainMenu = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
  <div className={styles.MainMenu} data-testid="MainMenu">
      <nav className={"navbar navbar-expand-lg  px-0 "}>
        <div className={"container-fluid px-0 "+styles.navbarN}>
          <a className={"navbar-brand "+styles.colorInicio} href="#">INICIO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={"navbar-nav me-auto mb-2 mb-lg-0 "}>
              <li className="nav-item">
                <a className={"nav-link "+styles.navlink} aria-current="page" href="#">COMPETENCIA</a>
              </li>
              <li className="nav-item">
                <a className={"nav-link "+styles.navlink} href="#">EQUIPO</a>
              </li>
              <li className="nav-item">
                <a className={"nav-link "+styles.navlink} href="#">NOTICIAS</a>
              </li>
              <li className="nav-item">
                <a className={"nav-link "+styles.navlink} href="#">GALERIA</a>
              </li>
              <li className="nav-item">
                <a className={"nav-link "+styles.navlink} href="#">VIDEO</a>
              </li>
        
            </ul>

          </div>
        </div>
      </nav>
  </div>)
};

MainMenu.propTypes = {};

MainMenu.defaultProps = {};

export default MainMenu;
