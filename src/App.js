import Revision from "./components/revision/Revision";
import Confirm from "./components/confirm/Confirm";
import styles from "./App.module.css";
import ResponsiveAppBar from "./components/UI/ResponsiveAppBar";
import { Box, Grid } from "@mui/material";

function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box sx={{ flexGrow: 1, margin: "30px" }}>
        <Grid container maxWidth="lg" spacing={4}>
          <Grid item xs={12} md={6}>
            <Revision></Revision>
          </Grid>
          <Grid item xs={12} md={6}>
            <Confirm></Confirm>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
