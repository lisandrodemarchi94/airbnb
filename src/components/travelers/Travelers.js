import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

const Travelers = () => {
  const [qtyAdults, setQtyAdults] = useState(0);
  const [qtyChildren, setQtyChildren] = useState(0);

  const onClickAddHandler = () => {
    setQtyAdults(qtyAdults + 1);
  };

  const onClickRemoveHandler = () => {
    if (qtyAdults > 0) {
      setQtyAdults(qtyAdults - 1);
    }
  };

  return (
    <>
      <Box>

        <Grid container spacing={1}>

          <Grid container spacing={1} columnSpacing={{ md: 6 }}>

            <Grid item xs={12} md={6}>
              <label>Adultos: {qtyAdults}</label>
            </Grid>

            <Grid item xs={12} md={6}>
              <ButtonGroup size="small">
                <Button onClick={onClickRemoveHandler}>-</Button>
                <Button onClick={onClickAddHandler}>+</Button>
              </ButtonGroup>
            </Grid>

          </Grid>

          <Grid container spacing={1}>

            <Grid item xs={12} md={6}>
              <label>Niños: {qtyChildren}</label>
            </Grid>

            <Grid item xs={12} md={6}>
              <ButtonGroup size="small">
                <Button onClick={onClickRemoveHandler}>-</Button>
                <Button onClick={onClickAddHandler}>+</Button>
              </ButtonGroup>
            </Grid>

          </Grid>

        </Grid>

      </Box>
    </>
  );
};

export default Travelers;
