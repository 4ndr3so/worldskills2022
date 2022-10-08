import React, { Children } from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import Banner from "./../components/Banner";
import MainMenu from "./../components/MainMenu";
import Footer from "./../components/Footer";
import "./styles.scss";


const TemplatePrinci = ({children}) => {
  return (
    <>
    <Container direction="column">
        <Grid item xs={12}>
            <Banner></Banner>
        </Grid>
        <Grid container spacing={1}>
            <MainMenu></MainMenu>
        </Grid>
        <Grid container spacing={1}>
                {children}
        </Grid>
    
    </Container>
    <Footer></Footer>
  </>
  )
}

TemplatePrinci.propTypes = {}

export default TemplatePrinci