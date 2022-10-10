import * as React from 'react';
import PropTypes from "prop-types";
import styles from "./MainMenu.module.scss";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink,useLocation } from "react-router-dom";
//link
import MainPage from "../../pages/MainPage";
import Noticias from "../../pages/Noticias";
import Galeria from "../../pages/Galeria";
import Equipo from "../../pages/Equipo";
import Competencia from "../../pages/Competencia";
import NotFound from "../../pages/NotFound";

import Habilidades from "../../pages/Habilidades";
import WSNacional from "../../pages/WSNacional";
import Americas from "../../pages/Americas";
import Internacional from "../../pages/Internacional";
import Empoderamiento from "../../pages/Empoderamiento";
import Delegados from "../../pages/Delegados";
import Expertos from "../../pages/Expertos"
import CompetidoresColombia from "../../pages/CompetidoresColombia"
import JefeEquipos from "../../pages/JefeEquipos"
import GalImageDetalle from "../../components/GalImageDetalle";
import Videos from "../../pages/Videos"

const MainMenu = () => {

  const location = useLocation();

 
  const [compVi,setCompVi]= React.useState(false);
  const [equipoVi,setEquipoVi]= React.useState(false);
  const [collapseVi,setCollapseVi]=React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [activeCo,setActiveCo]=React.useState(false);
  const [activeEqui,setActiveEqui]=React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const comptDesplegar= (e) => {

    e.preventDefault();
    setEquipoVi(false)
    setCompVi(!compVi)
  };
  const equipoDesplegar= (e) => {

    e.preventDefault();
    setEquipoVi(!equipoVi)
    setCompVi(false)
  };

  const collapDesplegar= (e) => {
   
    e.preventDefault();
    setCollapseVi(!collapseVi)

  };

  React.useEffect(() => {
    if(location.pathname==="/habilidades"){
      setActiveCo(true);
    }else if(location.pathname==="/nacional"){
      setActiveCo(true);
    }
    else if(location.pathname==="/americas"){
      setActiveCo(true);
    }else if(location.pathname==="/internacional"){
      setActiveCo(true);
    }else if(location.pathname==="/empoderamiento"){
      setActiveCo(true);
    }else{
      setActiveCo(false);
    }

    if(location.pathname==="/delegados"){
      setActiveEqui(true);
    }else if(location.pathname==="/expertos"){
      setActiveEqui(true);
    }
    else if(location.pathname==="/competidorescolombia"){
      setActiveEqui(true);
    }else if(location.pathname==="/jefe-quipos"){
      setActiveEqui(true);
    }else{
      setActiveEqui(false);
    }

    
  });

  return(
  <div className={styles.MainMenu} data-testid="MainMenu">
      <nav className={"navbar navbar-expand-lg  px-0 "}>
        <div className={"container-fluid px-0 "+styles.navbarN}>
          <NavLink className={({ isActive }) =>
              isActive ? styles.activeLink+" navbar-brand "+styles.colorInicio : "navbar-brand "+styles.colorInicio
            }  to={"/"} >INICIO</NavLink>
          <button className="navbar-toggler" type="button" onClick={collapDesplegar} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={"collapse navbar-collapse" +(collapseVi==true ? " show":"")+" "+styles.collapse2} id="navbarSupportedContent">
            <ul className={"navbar-nav me-auto mb-2 mb-lg-0 "}>
              <li className="nav-item">
                <a className={"nav-link "+styles.navlink +" "+styles.navbar2+" "+(activeCo? styles.activeLink2:"")} aria-current="page" onClick={comptDesplegar}>
                  COMPETENCIA<ArrowDropDownIcon fontSize={"large"} className={styles.tamNu}></ArrowDropDownIcon></a>
                <div className={"dropdown-menu "+(compVi==true ? " show":"")+" "+styles.dropdownMenu2} aria-labelledby="navbarDropdown">
                <NavLink className={"dropdown-item "+styles.dropDownSobreEscri} to="/habilidades">Habilidades</NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className={"dropdown-item "+styles.dropDownSobreEscri} to="/nacional" >Nacional</NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className={"dropdown-item "+styles.dropDownSobreEscri} to="/americas">Américas</NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className={"dropdown-item "+styles.dropDownSobreEscri} to="/internacional" >Internacional</NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className={"dropdown-item "+styles.dropDownSobreEscri} to="/empoderamiento">Empoderamiento</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <a className={"nav-link "+styles.navlink+" "+styles.navbar2+" "+(activeEqui ? styles.activeLink2 : "")} onClick={equipoDesplegar}>
                  EQUIPO<ArrowDropDownIcon fontSize={"large"} className={styles.tamNu}></ArrowDropDownIcon></a>
                  <div className={"dropdown-menu "+(equipoVi==true ? " show":"")+" "+styles.dropdownMenu2} aria-labelledby="navbarDropdown">
                  <NavLink className={"dropdown-item "+styles.dropDownSobreEscri} to="/delegados">Delegados</NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className={"dropdown-item "+styles.dropDownSobreEscri} to="/expertos">Expertos</NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className={"dropdown-item "+styles.dropDownSobreEscri} to="/competidorescolombia">Competidores</NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className={"dropdown-item "+styles.dropDownSobreEscri} to="/jefe-quipos">Jefes de Equipo e Intérpretes</NavLink>
                </div>
              </li>
              <li className="nav-item">
              <NavLink  className={({ isActive }) =>
              isActive ? styles.activeLink+" nav-link "+styles.navlink : "nav-link "+styles.navlink
            }  to={"/noticias"}>NOTICIAS</NavLink>
              </li>
              <li className="nav-item">
              <NavLink  className={({ isActive }) =>
              isActive ? styles.activeLink+" nav-link "+styles.navlink : "nav-link "+styles.navlink
            }  to={"/galeria"}>GALERIA</NavLink>
              </li>
              <li className="nav-item">
              <NavLink  className={({ isActive }) =>
              isActive ? styles.activeLink+" nav-link "+styles.navlink : "nav-link "+styles.navlink
            }  to={"/videos"}>VIDEO</NavLink>
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
