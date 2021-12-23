import * as React from "react";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import classes from "./Card.module.css";

export default function BasicCard(props) {
  const cardHeaderStyle = {
    backgroundColor: "#1976d2",
    color: "white",
    padding: props.smallCard && "5px",
    paddingLeft: props.smallCard && "15px",
  };

  return (
    <Card sx={{ minWidth: 100 }}>
      <CardHeader title={props.title} sx={cardHeaderStyle}></CardHeader>
      <CardContent sx={{ minHeight: `${props.minHeight}` }}>
        {props.children}
      </CardContent>
      <Divider></Divider>
      <div className={props.footer && classes.footer}>{props.footer}</div>
    </Card>
  );
}
