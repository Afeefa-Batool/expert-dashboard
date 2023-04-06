import React, { useState, useEffect } from "react";

import img1 from "../public/images/img3.png";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useRouter } from "next/router";

const styles = {
  input: {
    borderRadius: 10,
  },
};
const styles1 = {
  input: {
    borderRadius: 10,
    width: "790px",
  },
};
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface Address {
  line1: string;
  line2: string;
  townCity: string;
  postalCode: string;
  state: string;
  addressNote: string;
}
// interface UpdateProps {
//   addressProp: string;
// }
const Update = ({ addressProp }:any) => {
  // ==================update code started=========================

  const [line1, setLine1] = useState("");

  console.log("--------------->", addressProp);
  const router = useRouter();

  const [address, setAddress] = useState<Address>({
    line1: "",
    line2: "",
    townCity: "",
    postalCode: "",
    state: "",
    addressNote: "",
  });
  useEffect(() => {
    setAddress({ ...addressProp, ModifiedBy: addressProp.userId });
  }, []);
  // useEffect(() => {
  //   setAddress({ ...addressProp, ModifiedBy: addressProp.userId });
  // }, [addressProp, address]);
  // old code
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };
  const updateSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log("------ updating address --------");
      console.log(address);
      console.log("------ updating address --------");
      const response = await fetch(
        "https://microexpertaddressapi-preprod.findanexpert.net/address_svc/pv/UserAddress/updateAddress",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(address),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error); // Handle the error here
      }

      const data = await response.json();
      console.log("-------- response ok ----------");
      console.log(data);
      console.log("-------- response ok ----------");
      console.log(data); // Handle the response data here

      if (data.code === 0) {
        router.push("/Manage-address-page");
      } else {
        alert(data.message);
      }
      // Redirect to another page using Next.js router
    } catch (error) {
      console.error(error);
      // Handle the error here by displaying an error message to the user
    }
  };

  // =============update code end====================

  // ==================populate data in feild code ======================
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    const location = localStorage.getItem("selectedLocation");
    if (location) {
      setSelectedLocation(location);
    }
  }, []);
  // ==================populate data in feild code End======================

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
              <div className="row d-flex justify-content-between">
                <div className="col-md-9">
                  <h4 className="create-address">Create Address</h4>
                  <p>{JSON.stringify(address)}</p>
                  <p className="address-detail">
                    Your home and work addresses are used to personalize your
                    experiences across Expert Services, like showing search
                    results near your home, directions to work in Maps, and for
                    more relevant ads. You can remove them any time.
                  </p>
                  <a href="" className="Learn-more mt-5">
                    Learn more
                    <AiOutlineRight />
                  </a>
                </div>
                <div className="col-md-3">
                  <Image
                    src={img1}
                    height={100}
                    width={200}
                    alt="create account"
                    className="rounded-circle mx-auto d-block "
                  />
                </div>
              </div>
            </div>

            {/* =========create address section end============= */}
            {/* ===========input feilds section start================ */}
            <Card
              sx={{
                padding: "20px",
                marginTop: "15px",
                borderRadius: "12px",
              }}
            >
              <form action="" onSubmit={updateSubmit}>
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        marginBottom: "14px",
                        borderRadius: 20,
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Address"
                        id="fullWidth"
                        required
                        InputProps={{
                          style: styles.input,
                        }}
                        value={selectedLocation}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        marginBottom: "14px",

                        marginTop: "15px",
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Address Name"
                        required
                        id="fullWidth"
                        InputProps={{
                          style: styles.input,
                        }}
                        name="line1"
                        value={address.line1}
                        // onChange={(event) => setLine1(event.target.value)}
                        // value={address.line1}
                        onChange={handleChange}
                      />
                    </Box>
                  </Grid>
                </Grid>
                {/* =============row 3================= */}
                <Box>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          marginBottom: "14px",

                          marginTop: "15px",
                        }}
                      >
                        <TextField
                          fullWidth
                          label="Flat & Building Number"
                          id="fullWidth"
                          InputProps={{
                            style: styles.input,
                          }}
                          name="line2"
                          value={address.line2}
                          onChange={handleChange}
                          // value={formData.line2}
                          // onChange={handleChange}
                        />
                      </Box>{" "}
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          width: 500,
                          maxWidth: "100%",
                          marginTop: "15px",
                        }}
                      >
                        <TextField
                          fullWidth
                          required
                          label="Street Address"
                          id="fullWidth"
                          InputProps={{
                            style: styles.input,
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                {/* ==============row 4================ */}
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          width: 500,
                          maxWidth: "100%",
                          marginTop: "15px",
                          marginBottom: "14px",
                        }}
                      >
                        <TextField
                          fullWidth
                          label="City"
                          required
                          id="fullWidth"
                          InputProps={{
                            style: styles.input,
                          }}
                          name="townCity"
                          value={address.townCity}
                          onChange={handleChange}
                          // value={formData.townCity}
                          // onChange={handleChange}
                        />
                      </Box>{" "}
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          width: 500,
                          maxWidth: "100%",
                          marginTop: "15px",
                        }}
                      >
                        <TextField
                          fullWidth
                          label="Postal Code"
                          required
                          id="fullWidth"
                          InputProps={{
                            style: styles.input,
                          }}
                          name="postalCode"
                          value={address.postalCode}
                          onChange={handleChange}
                          // onChange={handleChange}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                {/* ===========row 5============ */}
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        marginBottom: "14px",

                        borderRadius: "50px",
                        marginTop: "15px",
                      }}
                    >
                      <TextField
                        fullWidth
                        label="State"
                        id="fullWidth"
                        required
                        InputProps={{
                          style: styles.input,
                        }}
                        name="state"
                        value={address.state}
                        onChange={handleChange}
                        // onChange={handleChange}
                      />
                    </Box>
                  </Grid>
                </Grid>
                {/* ============row 6============ */}

                <Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        borderRadius: "50px",
                        marginTop: "15px",
                        marginBottom: "30px",
                      }}
                    >
                      <TextField
                        id="my-textarea"
                        label="Address Notes (Optional)"
                        required
                        multiline
                        rows={4}
                        InputProps={{
                          style: styles1.input,
                        }}
                        name="addressNote"
                        value={address.addressNote}
                        onChange={handleChange}
                      />
                    </Box>
                  </Grid>
                </Grid>
                <div className="button-row">
                  <button className="button1">Cancel</button>
                  <button className="button2">Save</button>
                </div>
              </form>

              {/* ===========row 6 text area============= */}
            </Card>

            {/* ===========input feilds section end================ */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;

interface AddressI {
  line1: string;
  line2: string;
}
