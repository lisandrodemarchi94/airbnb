import React, { useState } from "react";
import classes from "./ReserveInfo.module.css";
import Card from "../UI/card/Card";
import HouseInfo from "./house-info/HouseInfo";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import YourReserve from "./your-reserve/YourReserve";
import BasicDialog from "../UI/Dialog";

const ReserveInfo = (props) => {
  const [showDialog, setShowDialog] = useState();

  const onClickConfirmHandler = () => {
    setShowDialog({
      title: "Confirmación de reserva",
      message: "Su reserva ha sido confirmada con éxito.",
    });
  };

  const showDialogHandler = () => {
    props.onConfirmReserve();
    setShowDialog(null);
  };

  const footer = (
    <>
      <p>Tú anfritión esta esperando por ti:</p>
      <textarea
        className={classes["text-area"]}
        rows="4"
        placeholder="Consultale lo que necesites"
      ></textarea>
      <Button
        onClick={onClickConfirmHandler}
        disabled={
          props.reserve.totalPrice && props.reserve.totalPrice > 0
            ? false
            : true
        }
        variant="contained"
        className={classes["btn-continue"]}
      >
        Confirmar
      </Button>
    </>
  );

  return (
    <>
      {showDialog && (
        <BasicDialog
          title={showDialog.title}
          message={showDialog.message}
          handleClose={showDialogHandler}
        />
      )}
      <Card title="Información de la reserva" footer={footer}>
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
