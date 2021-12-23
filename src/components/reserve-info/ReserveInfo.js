import React from "react";
import classes from "./ReserveInfo.module.css";
import Card from "../UI/card/Card";
import HouseInfo from "./house-info/HouseInfo";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import YourReserve from "./your-reserve/YourReserve";

const ReserveInfo = (props) => {
  const footer = (
    <>
      <p>Tú anfritión esta esperando por ti:</p>
      <textarea
        className={classes["text-area"]}
        rows="4"
        placeholder="Consultale lo que necesites"
      ></textarea>
      <Button
        disabled={
          props.reserve.totalPrice && props.reserve.totalPrice > 0
            ? false
            : true
        }
        variant="contained"
        className={classes["btn-continue"]}
      >
        Continuar
      </Button>
    </>
  );

  return (
    <>
      <Card
        title="Información de la reserva"
        footer={footer}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <HouseInfo dataHouse={props.dataHouse} />
            </Grid>
            <Grid item xs={12} md={6}>
              <YourReserve reserve={props.reserve} />
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default ReserveInfo;
