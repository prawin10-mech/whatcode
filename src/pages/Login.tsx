import { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import loginImg from "../assets/loginImg.png";
import bottomImg from "../assets/bottomLines.png";
import { loginState } from "../Types/loginTypes/login.types";

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  } as loginState);

  const handleValues = (e, target) => {
    setValues((prev) => ({ ...prev, [target]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      console.log(values);
      localStorage.setItem("user", JSON.stringify(values));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="space-around"
        sx={{ backgroundColor: "#F7F7F7", py: "30px" }} // Set minimum height for the whole page
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={loginImg}
            alt="login home"
            style={{ width: "100%", maxWidth: "400px", height: "300px" }} // Center and limit image width
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid style={{ maxWidth: "400px", margin: "auto" }}>
            <Typography variant="h5" fontWeight="700">
              Login here!
            </Typography>
            <form
              onSubmit={(e) => handleLogin(e)}
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <TextField
                placeholder="Enter email"
                label="Email"
                value={values.email}
                onChange={(e) => handleValues(e, "email")}
                sx={{ mt: 2 }}
                fullWidth
              />
              <TextField
                placeholder="Enter password"
                label="Password"
                value={values.password}
                onChange={(e) => handleValues(e, "password")}
                type="password"
                sx={{ mt: 2 }}
                fullWidth
              />

              <Typography textAlign="end" color="gray">
                Forgot Password?
              </Typography>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#f22b7e",
                  borderRadius: "200px",
                  fontWeight: "bolder",
                  mt: 2,
                  "&:hover": {
                    backgroundColor: "#f22b77"
                  }
                }}
                fullWidth
              >
                Login
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
      <img
        src={bottomImg}
        alt="bottom lines"
        style={{
          width: "100%",
          objectFit: "cover",

          zIndex: 1
        }}
      />
    </>
  );
};
