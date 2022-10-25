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
            <p> Conmutador Nacional (601) 5461500 - Extensiones</p>
            <p> Atención presencial: lunes a viernes 8:00 a.m. a 5:30 p.m. - Resto del país sedes y horarios</p>
            <p> Atención telefónica: lunes a viernes 7:00 a.m. a 7:00 p.m. - sábados 8:00 a.m. a 1:00 p.m.</p>
            <p> Atención al ciudadano: Bogotá (601) 343 0111 - Línea gratuita y resto del país 018000 910270</p>
            <p> Atención al empresario: Bogotá (601) 343 0101 - Línea gratuita y resto del país 018000 910682</p>
            <p>  PQRS</p>
            <p> Chat en línea</p>
            <p> Correo notificaciones judiciales: servicioalciudadano@sena.edu.co</p>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Grid container className={styles.logos}>
            <Grid item xs={12} className={styles.alignEnd}>
              <img src={logoblanco} alt="Logo del SENa y worldSkills" className={styles.logoblanco} />
            </Grid>
            <Grid item xs={12} className={styles.alignEnd}>
              <a href={"https://www.instagram.com/senacomunica/?hl=es-la"} target="_blank" rel='noreferrer'>
                <InstagramIcon fontSize={"large"} className={styles.iconsR}></InstagramIcon>
              </a>
              <a href={"https://www.facebook.com/SENA/"} target="_blank" rel='noreferrer'>
                <FacebookIcon fontSize={"large"} className={styles.iconsR}></FacebookIcon>
              </a>
              <a href={"https://twitter.com/SENAComunica"} target="_blank" rel='noreferrer'>
                <TwitterIcon fontSize={"large"} className={styles.iconsR}></TwitterIcon>
              </a>
              <a href={"https://www.youtube.com/user/SENATV?app=desktop"} target="_blank" rel='noreferrer'>
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
