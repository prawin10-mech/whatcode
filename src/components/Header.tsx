import { Grid } from "@mui/material";
import Reflect from "../assets/REFLECT.png";

export const Header = () => {
  return (
    <Grid container justifyContent="center">
      <img src={Reflect} alt="Reflect logo" />
    </Grid>
  );
};
