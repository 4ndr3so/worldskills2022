import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';
import Banner1 from "../../img/banner_1.png"
import Banner2 from "../../img/banner_2.jpg"
import Banner3 from "../../img/banner_3.jpg"
import Carousel from 'react-bootstrap/Carousel';
import ButonVerMas from '../../utils/ButonVerMas';
import { useDispatch, useSelector } from 'react-redux';
import { getDatosEStaError, getDatosEStaStatus, selectAllDatosESta } from '../../redux/datosStaticosSlice';
import { Skeleton } from '@mui/material';

const Slider = () => {

  const datosEsStatus=useSelector(getDatosEStaStatus);
  const datosEsta=useSelector(selectAllDatosESta);

  const dispatch=useDispatch();


  const accionBtnver=()=>{
    window.open('http://www.google.com', '_blank');
  }

  const Cargador = ({ value }) => {
    return <Skeleton variant="rectangular"  height={500}></Skeleton>;
  };

  return(
    <>
      {  
      
      datosEsStatus!=="succed" ? <Cargador></Cargador>  :
        
      <Carousel data-testid="Carousel" style={{minHeight:"200px"}}>
        {
         // console.log(datosEsta.sliderImg[0])
        }
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={datosEsta.sliderImg[0] && datosEsta.sliderImg[0].img}
            alt="First slide"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <h3>{datosEsta.sliderImg[0] && datosEsta.sliderImg[0].titulo}</h3>
            <p>{datosEsta.sliderImg[0] && datosEsta.sliderImg[0].mensaje}
              {
                <a href={datosEsta.sliderImg[0] && datosEsta.sliderImg[0].link} target="_blank" rel="noreferrer" > 
                  <ButonVerMas textNotic="Ver más" accionBtnver={accionBtnver} ml="10px" otrosStilos={{float:"none"}}></ButonVerMas>
                </a>
                
              }
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
      
      }
    </>
    )
  };

Slider.propTypes = {};

Slider.defaultProps = {};

export default Slider;
