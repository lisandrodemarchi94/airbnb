import React from "react";
import Card from "C:/Users/Usuario/Desktop/Challenge/airbnb/src/components/UI/card/Card";
import { Avatar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckIcon from '@mui/icons-material/Check';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const YourReserve = (props) => {
  return (
    <Card title="Tú Reserva" smallCard="true">
      <List>
        <ListItem
          disablePadding
          secondaryAction={
            <>
              <ListItemText aria-label="comments">
                <Avatar sx={{ bgcolor: "blue", width: 24, height: 24 }}>
                  {props.reserve.qtyDays}
                </Avatar>
              </ListItemText>
            </>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary="Días" />
          </ListItemButton>
        </ListItem>

        <Divider></Divider>

        <ListItem
          disablePadding
          secondaryAction={
            <ListItemText edge="end" aria-label="comments">
              <Avatar sx={{ bgcolor: "blue", width: 24, height: 24 }}>
                {props.reserve.qtyAdults + props.reserve.qtyChildren}
              </Avatar>
            </ListItemText>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <FamilyRestroomIcon />
            </ListItemIcon>
            <ListItemText primary="Viajeros" />
          </ListItemButton>
        </ListItem>

        <Divider></Divider>

        <ListItem
          disablePadding
          secondaryAction={
            <ListItemText edge="end" aria-label="comments">
              {props.reserve.pets && <CheckIcon></CheckIcon>}
              {!props.reserve.pets && <HighlightOffIcon />}
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
              <p>{props.reserve.totalPrice}</p>
            </ListItemText>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="Total" />
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
  );
};

export default YourReserve;
