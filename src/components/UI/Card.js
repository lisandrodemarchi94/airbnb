import * as React from "react";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import classes from "./Card.module.css";

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 100 }}>
      <CardHeader
        title={props.title}
        sx={{ backgroundColor: "#1976d2", color:"white"}}
      >
      </CardHeader>
      <CardContent sx={{minHeight: `${props.minHeight}`}}>{props.children}</CardContent>
      <Divider></Divider>
      <div className={props.footer && classes.footer}>{props.footer}</div>
    </Card>
  );
}
