import React, { useState } from "react";
import Card from "../UI/Card";
import { Box, Button, ButtonGroup, Checkbox, Grid } from "@mui/material";
import Travelers from "../travelers/Travelers";
import BasicDatePicker from "../UI/BasicDataPicker";
import classes from "./Confirm.module.css";

const Confirm = (props) => {
  const [qtyAdults, setQtyAdults] = useState(0);
  const [qtyChildren, setQtyChildren] = useState(0);
  const [pets, setPets] = useState(false);
  const [qtyDays, setQtyDays] = useState(0);

  const calculateQtyNightsHandler = (date) => {
    console.log(date);
  };

  const footer = (
    <>
      <h5>Costo de la Reserva</h5>

      <ul>
        <li>Duración de estadia</li>
        <li>Valor de noche</li>
        <li>Descuento</li>
        <li>Costo de Limpieza</li>
        <li>Total</li>
      </ul>
    </>
  );

  const onClickCalculateHandler = () => {
    props.onCalculateReserve(qtyAdults, qtyChildren, pets, qtyDays);
  };

  const addAdult = () => {
    setQtyAdults((prevState) => {
      return prevState < props.maxAdults ? prevState + 1 : prevState;
    });
  };

  const removeAdult = () => {
    setQtyAdults((prevState) => {
      return prevState > 0 ? prevState - 1 : 0;
    });
  };

  const addChildren = () => {
    setQtyChildren((prevState) => {
      return prevState < props.maxChildren ? prevState + 1 : prevState;
    });
  };

  const removeChildren = () => {
    setQtyChildren((prevState) => {
      return prevState > 0 ? prevState - 1 : 0;
    });
  };

  const onClickPetsHandler = () => {
    setPets((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <Card
        title="Calcular costo de la reserva"
        footer={footer}
        minHeight="309px"
      >
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

            <Grid item xs={12} md={12} sx={{ marginTop: "20px" }}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <label>Adultos: {qtyAdults}</label>
                </Grid>

                <Grid item xs={6} md={6} className={classes["group-button"]}>
                  <ButtonGroup variant="contained" size="small">
                    <Button onClick={removeAdult}>-</Button>
                    <Button
                      onClick={addAdult}
                      disabled={qtyAdults >= props.maxAdults}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} sx={{ marginTop: "20px" }}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <label>Niños: {qtyChildren}</label>
                </Grid>

                <Grid item xs={6} md={6} className={classes["group-button"]}>
                  <ButtonGroup variant="contained" size="small">
                    <Button onClick={removeChildren}>-</Button>
                    <Button
                      onClick={addChildren}
                      disabled={qtyChildren >= props.maxChildren}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} sx={{ marginTop: "20px" }}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <label>¿Mascotas?</label>
                </Grid>

                <Grid item xs={6} md={6} className={classes["group-button"]}>
                  <Checkbox onClick={onClickPetsHandler} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} sx={{ marginTop: "20px" }}>
              <Button
                variant="contained"
                className={classes["btn-calc"]}
                onClick={onClickCalculateHandler}
              >
                Calcular
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default Confirm;
