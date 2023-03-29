import React, { useRef, useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import style from "../styles/Basic-info.module.css";


const DateOfBirth = () => {
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
  
    const handleChange = (e:any) => {
      setDate(e.target.value);
    };
  return (
    <>
      {/* ================================= */}

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
              }}
            >
              {/* ============first name========== */}

              <h2 className={style.Basic_info}>User Name</h2>
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
                      label="First Name"
                      id="fullWidth"
                      InputProps={{
                        style: styles.input,
                      }}
                    />
                  </Box>
                </Grid>
              </Grid> */}
   <div>
      <input
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
{/*       <p>Selected Date: {date}</p> */}
    </div>
              {/* ===========row 6 text area============= */}
              <div className="button-row" style={{ marginTop: "30px" }}>
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

export default DateOfBirth;
