import React, { useEffect, useState } from "react";
import Card from "../UI/card/Card";
import { Box, Button, ButtonGroup, Checkbox, Divider, Grid } from "@mui/material";
import BasicDatePicker from "../UI/BasicDataPicker";
import classes from "./ReserveCost.module.css";

const ReserveCost = (props) => {
  const [qtyAdults, setQtyAdults] = useState(0);
  const [qtyChildren, setQtyChildren] = useState(0);
  const [pets, setPets] = useState(false);
  const [qtyDays, setQtyDays] = useState(0);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  useEffect(() => { 
    if (dateFrom && dateTo) {
      let diff = dateTo.getTime() - dateFrom.getTime();   
      let daydiff = diff / (1000 * 60 * 60 * 24); 
      setQtyDays(Math.trunc(daydiff));
    } else {
      setQtyDays(0);
    }
  }, [dateFrom, dateTo]);

  const footer = (
    <>
      <h4>Costo de la Reserva</h4>
      <div>
        <label>Duración de estadia: </label>
        <span>{qtyDays} dias</span>
      </div>
      <div>
        <label>Costo por Adulto: </label>
        <span>${props.dataHouse.adultPrice}</span>
      </div>
      <div>
        <label>Costo por Niño: </label>
        <span>${props.dataHouse.childPrice}</span>
      </div>
      <div>
        <label>Costo de limpieza: </label>
        <span>${props.dataHouse.cleaningCost}</span>
      </div>
      <Divider></Divider>
      <div>
        <p><strong>Total:${props.totalPrice}</strong></p>
        <span><strong></strong></span>
      </div>
    </>
  );

  const onChangeDateHandler = (date, id) => {
    if (id === "dateTo" && date <= dateFrom) {
      setDateTo(null);
    }
    id === "dateFrom" ? setDateFrom(date) : setDateTo(date) ;
  };

  const onClickCalculateHandler = () => {
    props.onCalculateReserve(qtyAdults, qtyChildren, pets, qtyDays);
  };

  const addAdult = () => {
    setQtyAdults((prevState) => {
      return prevState < props.dataHouse.maxAdults ? prevState + 1 : prevState;
    });
  };

  const removeAdult = () => {
    setQtyAdults((prevState) => {
      return prevState > 0 ? prevState - 1 : 0;
    });
  };

  const addChildren = () => {
    setQtyChildren((prevState) => {
      return prevState < props.dataHouse.maxChildren ? prevState + 1 : prevState;
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
        minHeight="285px"
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <BasicDatePicker
                id="dateFrom"
                label="CHECK-IN"
                onChangeDate={onChangeDateHandler}
              ></BasicDatePicker>
            </Grid>

            <Grid item xs={12} md={6}>
              <BasicDatePicker
                id="dateTo"
                label="CHECK-OUT"
                onChangeDate={onChangeDateHandler}
              ></BasicDatePicker>
            </Grid>

            <Grid item xs={12} md={12} sx={{ marginTop: "10px" }}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <label>Adultos: {qtyAdults}</label>
                </Grid>

                <Grid item xs={6} md={6} className={classes["group-button"]}>
                  <ButtonGroup variant="contained" size="small">
                    <Button onClick={removeAdult}>-</Button>
                    <Button
                      onClick={addAdult}
                      disabled={qtyAdults >= props.dataHouse.maxAdults}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} sx={{ marginTop: "10px" }}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <label>Niños: {qtyChildren}</label>
                </Grid>

                <Grid item xs={6} md={6} className={classes["group-button"]}>
                  <ButtonGroup variant="contained" size="small">
                    <Button onClick={removeChildren}>-</Button>
                    <Button
                      onClick={addChildren}
                      disabled={qtyChildren >= props.dataHouse.maxChildren}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} sx={{ marginTop: "10px" }}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <label>¿Mascotas?</label>
                </Grid>

                <Grid item xs={6} md={6} className={classes["group-button"]}>
                  <Checkbox onClick={onClickPetsHandler} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} sx={{ marginTop: "28px" }}>
              <Button
                variant="contained"
                className={classes["btn-calc"]}
                onClick={onClickCalculateHandler}
                disabled={(qtyAdults > 0 && qtyDays > 0) ? false : true}
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

export default ReserveCost;
