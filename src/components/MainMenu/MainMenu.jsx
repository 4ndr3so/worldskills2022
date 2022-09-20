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
    <Button
      id="Inicio_1"
      aria-controls={open ? "Inicio" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
    >Inicio</Button>
    <Button
      id="Inicio_1"
      aria-controls={open ? "Inicio" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
    >COMPETENCIA</Button>
    <Button
      id="Inicio_1"
      aria-controls={open ? "Inicio" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
    >EQUIPO</Button>
    <Button
      id="Inicio_1"
      aria-controls={open ? "Inicio" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
    >NOTICIAS</Button>
    <Button
      id="Inicio_1"
      aria-controls={open ? "Inicio" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
    >GALERIA</Button>
    <Button
      id="Inicio_1"
      aria-controls={open ? "Inicio" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
    >VIDEOS</Button>
  </div>)
};

MainMenu.propTypes = {};

MainMenu.defaultProps = {};

export default MainMenu;
