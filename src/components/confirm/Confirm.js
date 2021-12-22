import React from "react";
import Card from "../UI/Card";
import { Box, Button, ButtonGroup, CardActions, Checkbox, Divider, Grid, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Travelers from "../travelers/Travelers";
import BasicDatePicker from "../UI/BasicDataPicker";
import classes from "./Confirm.module.css";

const Confirm = () => {
  const calculateQtyNightsHandler = (date) => {
    console.log(date);
  };

  const footer = 
  <> 
    <h5>Costo de la Reserva</h5>

    <ul>
      <li>Duración de estadia</li>
      <li>Valor de noche</li>
      <li>Descuento</li>
      <li>Costo de Limpieza</li>
      <li>Total</li>
    </ul>
  </>;

  return (
    <>
      <Card title="Calcular costo de la reserva" footer={footer} minHeight="309px">

        <Box sx={{ flexGrow: 1 }}>

          <Grid container spacing={1}>

            <Grid item xs={12} md={6}>
              <BasicDatePicker
                label="CHECK-IN"
                onChangeDate={calculateQtyNightsHandler}
              ></BasicDatePicker>
            </Grid>

            <Grid item xs={12} md={6}>
              <BasicDatePicker label="CHECK-OUT"></BasicDatePicker>
            </Grid>

            <Grid item xs={12} md={12} sx={{marginTop:'20px'}}>

              <Grid container>

                <Grid item xs={6} md={6}>
                  <label>Adultos: 0</label>
                </Grid>

                <Grid item xs={6} md={6} className={classes["group-button"]}>
                  <ButtonGroup variant="contained" size="small">
                    <Button>-</Button>
                    <Button>+</Button>
                  </ButtonGroup>
                </Grid>

              </Grid>

            </Grid>

            <Grid item xs={12} md={12} sx={{marginTop:'20px'}}>

              <Grid container>

                <Grid item xs={6} md={6}>
                  <label>Niños: 0</label>
                </Grid>

                <Grid item xs={6} md={6} className={classes["group-button"]}>
                  <ButtonGroup variant="contained" size="small">
                    <Button>-</Button>
                    <Button>+</Button>
                  </ButtonGroup>
                </Grid>

              </Grid>

            </Grid>

            <Grid item xs={12} md={12} sx={{marginTop:'20px'}}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <label>¿Mascotas?</label>
                </Grid>

                <Grid item xs={6} md={6} className={classes["group-button"]}>
                  <Checkbox defaultChecked />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} sx={{marginTop: "20px"}}>
              <Button variant="contained" className={classes['btn-calc']}>Calcular</Button>
            </Grid>

          </Grid>

        </Box>

      </Card>
    </>
  );
};

export default Confirm;
