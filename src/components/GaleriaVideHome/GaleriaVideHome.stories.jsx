/* eslint-disable */
import GaleriaVideHome from './GaleriaVideHome';
import { Container, Grid } from "@mui/material";

export default {
  title: "GaleriaVideHome",
};

export const Default = () => (
  <Container direction="column">
      <Grid container>
        <Grid item  xs={12}>
          <GaleriaVideHome></GaleriaVideHome>
        </Grid> 
    </Grid>
  </Container>
)




Default.story = {
  name: 'default',
};
