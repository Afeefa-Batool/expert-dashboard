// import React, { useState } from "react";

// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import style from "../styles/Basic-info.module.css";

// const styles = {
//   input: {
//     borderRadius: 10,
//     width: "100%",
//   },
// };
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
// const Phone = () => {
//   return (
//     <>
//           {/* ================================= */}

//           <div className="container">
//         <div className="row d-flex justify-content-between">
//           <div className="col-md-3">
//             <div className="card card-border">side bar</div>
//           </div>
//           <div className="col-md-9">
//             <Card
//               sx={{
//                 minWidth: 275,
//                 padding: "20px",
//                 borderRadius: "12px",
//               }}
//             >
//               {/* ============first name========== */}

//               <h2 className={style.Basic_info}>User Name</h2>

//               {/* ===========row 6 text area============= */}
//               <div className="button-row" style={{ marginTop: "30px" }}>
//                 <button className="button2">Save & Continue</button>
//               </div>
//             </Card>

//             {/* ===========input feilds section end================ */}
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Phone

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import style from "../styles/Basic-info.module.css";

export default class PhoneInputGfg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phone: "" };
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-md-3">
              <div className="card card-border">side bar</div>
            </div>
            <div className="col-md-9">
              {/* ===========create addres ssection============= */}
              <div className="card p-4">
                <h2 className={style.Basic_info}>User Name</h2>
                <div className="">
                  <div className="row">
                    <div
                      className="col-md-12"
                      style={{ height: "51px", width: "776px" }}
                    >
                      <PhoneInput
                        country={"us"}
                        value={this.state.phone}
                        onChange={(phone) => this.setState({ phone })}
                      />
                    </div>
                  </div>
                </div>
                <div className="button-row" style={{ marginTop: "30px" }}>
                <button className="button2">Save & Continue</button>
              </div>
              </div>

              {/* ===========input feilds section end================ */}
            </div>
          </div>
        </div>
        
      </>
    );
  }
}
