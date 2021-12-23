import React, { useReducer } from "react";
import Revision from "./components/reserve-info/ReserveInfo";
import ReserveCost from "./components/reserve-cost/ReserveCost";
import classes from "./App.module.css";
import ResponsiveAppBar from "./components/UI/ResponsiveAppBar";
import { Grid } from "@mui/material";

const DUMMY_DATA_HOUSE = {
  name: "Casa Azul",
  maxAdults: 4,
  maxChildren: 2,
  petsAllow: true,
  adultPrice: 150,
  childPrice: 50,
  cleaningCost: 100,
  petsCost: 100,
  minNightPrice: 250
};

const reserveReducer = (state, action) => {
  state = {
    qtyAdults: action.qtyAdults,
    qtyChildren: action.qtyChildren,
    pets: action.pets,
    qtyDays: action.qtyDays,
    totalPrice: action.totalPrice
  };
  return state;
};

function App() {
  const [reserve, dispatchReserve] = useReducer(reserveReducer, {
    qtyAdults: 0,
    qtyChildren: 0,
    pets: false,
    qtyDays: 0,
    totalPrice: 0
  });

  const onCalculateReserveHandler = (qtyAdults, qtyChildren, pets, qtyDays) => {
    let price = 0;

    if (reserve.qtyAdults !== qtyAdults || reserve.qtyChildren !== qtyChildren || reserve.qtyDays !== qtyDays || reserve.pets !== pets) {
      price = ((qtyAdults * DUMMY_DATA_HOUSE.adultPrice + qtyChildren * DUMMY_DATA_HOUSE.childPrice) * qtyDays) + DUMMY_DATA_HOUSE.cleaningCost;
      if (pets) {
        price += DUMMY_DATA_HOUSE.petsCost;
      }
    } else {
      price = reserve.totalPrice;
    }

    dispatchReserve({
      qtyAdults: qtyAdults,
      qtyChildren: qtyChildren,
      pets: pets,
      qtyDays: qtyDays,
      totalPrice: price
    });
  };

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid container maxWidth="lg" spacing={4} sx={{ marginTop: "30px" }}>
          <Grid item xs={12} md={6}>
            <Revision dataHouse={DUMMY_DATA_HOUSE} reserve={reserve}></Revision>
          </Grid>
          <Grid item xs={12} md={6}>
            <ReserveCost
              dataHouse={DUMMY_DATA_HOUSE}
              onCalculateReserve={onCalculateReserveHandler}
              totalPrice={reserve.totalPrice}
            ></ReserveCost>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
