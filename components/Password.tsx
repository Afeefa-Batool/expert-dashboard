import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import style from "../styles/Basic-info.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
const styles = {
  input: {
    borderRadius: 10,
    width: "100%",
  },
};
const PasswordField = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  return (
    <>
      {/* ================================= */}

      {/* ================================ */}
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3">
            <div className="card card-border">side bar</div>
          </div>
          <div className="col-md-9">
            <Card
              sx={{
                minWidth: 275,
                padding: "20px",
                borderRadius: "12px",
                height: "500px",
              }}
            >
              {/* ============first name========== */}

              <h2 className={style.Basic_info}>Email</h2>

              {/* <Grid container>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      maxWidth: "100%",
                      borderRadius: 20,
                    }}
                  >
                    <TextField
                      fullWidth
                      label="Email Address"
                      id="fullWidth"
                      InputProps={{
                        style: styles.input,
                      }}
                      sx={{
                        "& label.Mui-focused": {
                          color: "#ccd2d8",
                          borderColor: "red",
                          borderBottomColor: "blue",
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid> */}
              <FormControl sx={{  width: "90ch" }} variant="outlined" style={{ borderRadius: '20px' }}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl sx={{  width: "90ch" }} variant="outlined" style={{ borderRadius: '20px',marginTop:"20px" }}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl sx={{  width: "90ch" }} variant="outlined" style={{ borderRadius: '20px',marginTop:"20px" }}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <div className="button-row" style={{ marginTop: "170px" }}>
                <button className="button2">Save & Continue</button>
              </div>
            </Card>

            {/* ===========input feilds section end================ */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordField;
