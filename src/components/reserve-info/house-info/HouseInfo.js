import React from "react";
import Card from "C:/Users/Usuario/Desktop/Challenge/airbnb/src/components/UI/card/Card";
import { Avatar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ManIcon from '@mui/icons-material/Man';
import BoyIcon from '@mui/icons-material/Boy';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import PetsIcon from '@mui/icons-material/Pets';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckIcon from '@mui/icons-material/Check';

const HouseInfo = (props) => {
  return (
    <Card title="Casa Azul">
      <List>
        <ListItem
          disablePadding
          secondaryAction={
            <ListItemText edge="end" aria-label="comments">
              <Avatar sx={{ bgcolor: "blue", width: 24, height: 24 }}>
                {props.dataHouse.maxAdults}
              </Avatar>
            </ListItemText>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <ManIcon />
            </ListItemIcon>
            <ListItemText primary="Adultos" />
          </ListItemButton>
        </ListItem>

        <Divider></Divider>

        <ListItem
          disablePadding
          secondaryAction={
            <ListItemText edge="end" aria-label="comments">
              <Avatar sx={{ bgcolor: "blue", width: 24, height: 24 }}>
                {props.dataHouse.maxChildren}
              </Avatar>
            </ListItemText>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <BoyIcon />
            </ListItemIcon>
            <ListItemText primary="Niños" />
          </ListItemButton>
        </ListItem>

        <Divider></Divider>

        <ListItem
          disablePadding
          secondaryAction={
            <ListItemText edge="end" aria-label="comments">
              {props.dataHouse.petsAllow && <CheckIcon></CheckIcon>}
              {!props.dataHouse.petsAllow && (
                <DoNotDisturbIcon></DoNotDisturbIcon>
              )}
            </ListItemText>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary="Mascotas" />
          </ListItemButton>
        </ListItem>

        <Divider></Divider>

        <ListItem
          disablePadding
          secondaryAction={
            <ListItemText edge="end" aria-label="comments">
              <p>{props.dataHouse.minNightPrice}</p>
            </ListItemText>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Precio" />
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
  );
};

export default HouseInfo;
