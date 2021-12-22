import Revision from "./components/revision/Revision";
import Confirm from "./components/confirm/Confirm";
import classes from "./App.module.css";
import ResponsiveAppBar from "./components/UI/ResponsiveAppBar";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          maxWidth="lg"
          spacing={4}
          sx={{ marginTop: "30px" }}
        >
          <Grid item xs={12} md={6}>
            <Revision></Revision>
          </Grid>
          <Grid item xs={12} md={6}>
            <Confirm></Confirm>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
