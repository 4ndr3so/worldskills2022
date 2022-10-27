import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import { Container, Grid } from "@mui/material";
import logoblanco from "../../img/logos_blancos.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => (
  <div className={styles.footerBack}>
    <Container>
      <Grid container>
        <Grid item xs={8}>
          <div className={styles.Footer} data-testid="Footer">
            <p className={styles.titleSena}> Servicio Nacional de Aprendizaje SENA - Dirección General</p>
            <p> Calle 57 No. 8 - 69 Bogotá D.C. (Cundinamarca), Colombia</p>
            <p><br></br></p>
            <p> <a  href={"https://www.sena.edu.co/es-co/transparencia/Paginas/mecanismosContacto.aspx"} target="_blank" rel='noreferrer' className={styles.linkFooter}>Conozca aquí los puntos de atención</a></p>
            <p> Línea de atención al ciudadano: Bogotá +(57) 601 3430111 - Línea gratuita y resto del país 018000 910270</p>
            <p> Línea de atención al empresario: Bogotá +(57) 601 3430101 - Línea gratuita y resto del país 018000 910682</p>
            <p> Línea nacional, exclusiva para comunicarse con un servidor público SENA: +(57) 601 5461500</p>
            <p> <a href={"https://www.sena.edu.co/es-co/ciudadano/Paginas/pqrs.aspx"} target="_blank" rel='noreferrer' className={styles.linkFooter}>PQRS</a> </p>
            <p> <a href={"http://www.sena.edu.co/es-co/ciudadano/Paginas/chat.aspx"} target="_blank" rel='noreferrer' className={styles.linkFooter}>Chat en línea</a></p>
            <p> <a href={"https://www.sena.edu.co/es-co/transparencia/Paginas/mecanismosContacto.aspx#notificacionesJudiciales"} target="_blank" rel='noreferrer' className={styles.linkFooter}>Correo notificaciones judiciales</a></p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Grid container className={styles.logos}>
            <Grid item xs={12} className={styles.alignEnd}>
              <img src={logoblanco} alt="Logo del SENa y worldSkills" className={styles.logoBlanco} />
            </Grid>
            <Grid item xs={12} className={styles.alignEnd}>
              <a href={"https://www.instagram.com/senacomunica/?hl=es-la"} target="_blank" rel='noreferrer' >
                <InstagramIcon fontSize={"large"} className={styles.iconsR}></InstagramIcon>
              </a>
              <a href={"https://www.facebook.com/SENA/"} target="_blank" rel='noreferrer' >
                <FacebookIcon fontSize={"large"} className={styles.iconsR}></FacebookIcon>
              </a>
              <a href={"https://twitter.com/SENAComunica"} target="_blank" rel='noreferrer' >
                <TwitterIcon fontSize={"large"} className={styles.iconsR}></TwitterIcon>
              </a>
              <a href={"https://www.youtube.com/user/SENATV?app=desktop"} target="_blank" rel='noreferrer' >
                <YouTubeIcon fontSize={"large"} className={styles.iconsR}></YouTubeIcon>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
