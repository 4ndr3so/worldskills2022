import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';
import Banner1 from "../../img/banner_1.png"
import Banner2 from "../../img/banner_2.jpg"
import Banner3 from "../../img/banner_3.jpg"
import Carousel from 'react-bootstrap/Carousel';
import ButonVerMas from '../../utils/ButonVerMas';
import { useSelector } from 'react-redux';
import { getDatosEStaError, getDatosEStaStatus, selectAllDatosESta } from '../../redux/datosStaticosSlice';

const Slider = () => {


  const accionBtnver=()=>{
    window.open('http://www.google.com', '_blank');
  }

  return(
  <Carousel data-testid="Carousel" style={{minHeight:"200px"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner1}
      alt="First slide"
    />
    <Carousel.Caption className={styles.carouselCaption}>
      <h3>CALENDARIO WORLDSKILLS COLOMBIA</h3>
      <p>Conozca las fechas 
        {
          <ButonVerMas textNotic="Ver noticia" accionBtnver={accionBtnver} ></ButonVerMas>
        }
      </p>
    </Carousel.Caption>
  </Carousel.Item>
 { /*<Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner3}
      alt="Second slide"
    />

    <Carousel.Caption className={styles.carouselCaption}>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner2}
      alt="Third slide"
    />

    <Carousel.Caption className={styles.carouselCaption}>
      <h3>Third slide label</h3>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
</Carousel.Item>*/ }
</Carousel>
)};

Slider.propTypes = {};

Slider.defaultProps = {};

export default Slider;
