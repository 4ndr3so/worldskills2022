import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import "./styles.scss";

import TemplatePrinci from "./../utils/TemplatePrinci"
import NoticiasHome from "../components/NoticiasHome";
import { useDispatch, useSelector } from "react-redux";
import { getNoticiasError, getNoticiasStatus, selectAllNoticias } from "../redux/noticiaSlice";
import { fetchNoticias } from "../api/apiData";


function Noticias(props) {

  const noticias= useSelector(selectAllNoticias);
  const notiStatus= useSelector(getNoticiasStatus);
  const notiError=useSelector(getNoticiasError);

  const dispatch=useDispatch();

  useEffect(() => {
    
    if(notiStatus==="idle"){

      dispatch(fetchNoticias())
    }
   }, [notiStatus,dispatch]);

  //console.log(data)
  return (
    <TemplatePrinci>
      <NoticiasHome noticiasCom={noticias} place={"historico"} statusN={notiStatus} errorN={notiError}></NoticiasHome>
    </TemplatePrinci>
  )
}

Noticias.propTypes = {}

export default Noticias
