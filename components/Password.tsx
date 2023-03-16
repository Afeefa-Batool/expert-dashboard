import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import style from "../styles/Basic-info.module.css";

const styles = {
  input: {
    borderRadius: 10,
    width: "100%",
    borderColor: "red",
  },
};
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Password = () => {
  function handleSubmit(event: any) {
    event.preventDefault();
  }

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

              <Grid container>
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
              </Grid>

              <div className="button-row" style={{ marginTop: "320px" }}>
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

export default Password;
