import React, { useEffect } from "react";
import classes from "./ReserveInfo.module.css";
import Card from "../UI/Card";
import { Avatar, Button, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import ManIcon from '@mui/icons-material/Man';
import BoyIcon from '@mui/icons-material/Boy';
import PetsIcon from '@mui/icons-material/Pets';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckIcon from '@mui/icons-material/Check';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';



const Revision = (props) => {

  const footer = 
    <>
      <p>Tú anfritión esta esperando por ti:</p>
      <textarea className={classes["text-area"]} rows="4" placeholder="Consultale lo que necesites"></textarea>
      <Button disabled={props.reserve.totalPrice && props.reserve.totalPrice > 0 ? false : true} variant="contained" 
        className={classes['btn-continue']}>
        Continuar
      </Button>
    </>;

  return (
    <>
      <Card title="Información de la reserva" color="#1976d2" footer={footer}>

        <Box sx={{ flexGrow: 1 }}>

          <Grid container spacing={1}>

            <Grid item xs={12} md={6}>

              <Card title="Casa Azul">

                <List>

                  <ListItem 
                    disablePadding 
                    secondaryAction={
                      <ListItemText edge="end" aria-label="comments">
                        <Avatar sx={{ bgcolor: 'blue', width: 24, height: 24 }}>{props.dataHouse.maxAdults}</Avatar>
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
                        <Avatar sx={{ bgcolor: 'blue', width: 24, height: 24 }}>{props.dataHouse.maxChildren}</Avatar>
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
                        {!props.dataHouse.petsAllow && <DoNotDisturbIcon></DoNotDisturbIcon>}
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

            </Grid>

            <Grid item xs={12} md={6}>

              <Card title="Tú Reserva">

                <List>

                  <ListItem 
                    disablePadding 
                    secondaryAction={
                      <>
                        <ListItemText aria-label="comments">
                          <Avatar sx={{ bgcolor: 'blue', width: 24, height: 24 }}>{props.reserve.qtyDays}</Avatar>
                        </ListItemText>
                      </>
                    }
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <CalendarTodayIcon />
                      </ListItemIcon>
                      <ListItemText primary="Días"/>
                    </ListItemButton>
                  </ListItem>

                  <Divider></Divider>

                  <ListItem 
                    disablePadding
                    secondaryAction={
                      <ListItemText edge="end" aria-label="comments">
                        <Avatar sx={{ bgcolor: 'blue', width: 24, height: 24 }}>{props.reserve.qtyAdults + props.reserve.qtyChildren}</Avatar>
                      </ListItemText>
                    }
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <FamilyRestroomIcon />
                      </ListItemIcon>
                      <ListItemText primary="Viajeros"/>
                    </ListItemButton>
                  </ListItem>

                  <Divider></Divider>

                  <ListItem 
                    disablePadding
                    secondaryAction={
                      <ListItemText edge="end" aria-label="comments">
                        {props.reserve.pets && <CheckIcon></CheckIcon>}
                        {!props.reserve.pets && <DoNotDisturbIcon></DoNotDisturbIcon>}
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

            </Grid>

          </Grid>

        </Box>

      </Card>
    </>
  );
};

export default Revision;
