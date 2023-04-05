import React, { useEffect, useState } from "react";

import img1 from "../public/images/img2.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineRight } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import axios from "axios";

import Link from "next/link";
interface Address {
  id: number;
  line1: string;
  townCity: string;
  addressnotes: string;
}

interface ApiResponse {
  result: {
    addresses: Address[];
  };
}
const Manageaddress = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  const router = useRouter();
  useEffect(() => {
    fetchData();
  }, []);
  // =================post API code========================

  async function fetchData() {
    const response = await fetch(
      "https://microexpertaddressapi-preprod.findanexpert.net/address_svc/pv/UserAddress/getAddress"
    );
    const data: ApiResponse = await response.json();
    setAddresses(data.result.addresses);
  }
  const [idd, setidd] = useState("");

  let handleDelete = async (id: any) => {
    try {
      let res = await fetch(
        "https://microexpertaddressapi-preprod.findanexpert.net/address_svc/pv/UserAddress/removeAddress",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJJU1NVRVJfRVhQRVJUIiwiYXVkaWVuY2UiOiJFWFBFUlQiLCJleHBpcmVzIjoiMjAyMy0wMy0yOVQxMDo0MjoyNi43NTZaIiwiY2xhaW1zIjoiZXlKbWIyOGlPaUp6YjIxbExXWnZieTEwWlhOMGFXNW5MV05zWVdsdElpd2libUZ0WlNJNkluTm9ZV2dnYTJoaGJHbGtJaXdpWlcxaGFXd2lPaUp6YUdGb2FXUWdZV1p5YVdScGN5SjkiLCJpc3MiOiJJU1NVRVJfRVhQRVJUIiwiYXVkIjoiRVhQRVJUIiwic3ViIjoiRVhQRVJUIiwiaWF0IjoxNjgwMDg2NDg2LCJleHAiOjE2ODAxNzI4ODZ9.kEChiH96sthLMHcxpa3WN-oBhLAm9UIiRWLHKv0Vaj1sKffouJy6uXo5S-uQGeKr2NYYlWgqiaXEaecJc0-uoFnyGWv2la8b4A61GFMEeqW2FdY5MxA1rwVMdcDa62WDRSDcSfc22R4nyTUsCKZWJlfegfogF1bivKoDkw3dGNMqHricsLE8STV4HcLcL7wAcPoRpTkFb9xishDZCra1ff2J4ciDyFXWy3_pXYo44XtJ4rotlynLfM4aiWHnE062Io2xlhTuvZAFfy0fb00CxKU5fvBV8r1FMQvKkcjNFgP_O3X131yH2E8M1ycDKoJRel54F4ThO846x-dGs--e7Q`,
          },
          body: JSON.stringify({
            id: id,
            modifiedBy: 0,
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        setidd("");
        fetchData();
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (address: any) => {
    router.push({
      pathname: "/Update-address-page",
      query: { state: JSON.stringify(address) },
    });
  };
  // ============post API code end================

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3">
            <div className="card card-border">side bar</div>
          </div>
          <div className="col-md-9">
            {/* ===========create addres ssection============= */}
            <div className="card p-3">
              <div className="row d-flex justify-content-between">
                <div className="col-md-9">
                  <h4 className="manage-address">Manage Addresses</h4>
                  <p className="manage-address-detail">
                    Don&apos;t worry, your information is private and we will
                    not share this info with anyone outside Expert!
                  </p>
                  <Link
                    href="/Map-location"
                    className="Learn-more mt-5"
                    // data-bs-toggle="modal"
                    // data-bs-target="#exampleModal"
                  >
                    Create New Address
                    <AiOutlineRight />
                  </Link>
                </div>
                <div className="col-md-3">
                  <Image
                    src={img1}
                    height={110}
                    width={180}
                    alt="create account"
                    className="rounded-circle mx-auto d-block"
                  />
                </div>
              </div>
            </div>

            {/* =========create address section end============= */}
            {/* ===========input feilds section start================ */}
            <div className="card p-3 mt-4">
              {addresses.map((address, index) => {
                return (
                  <div key={address.id}>
                    <div className="d-flex bd-highlight">
                      <div className="p-2 flex-grow-1 bd-highlight">
                        <span style={{ fontSize: "20px" }}>
                          <BiBuildings />
                        </span>
                        <span className="address-info">{address.line1}</span>
                        <p className="Office">
                          {address.townCity},{address.addressnotes}
                        </p>
                      </div>
                      <div className="p-2 bd-highlight">
                        <div className="badge">New Added</div>
                      </div>
                      <div className="dropdown">
                        <span
                          style={{
                            fontSize: "",
                            color: "#ccd2d8",
                            cursor: "pointer",
                            marginTop: "16px",
                            marginLeft: "-5px",
                            marginRight: "22px",
                          }}
                          // onClick={toggleOptions}
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <BsThreeDotsVertical />
                        </span>

                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <div className="">
                            <div
                              className="option"
                              onClick={(e) => handleEdit(address)}
                            >
                              <i className="fas fa-edit"></i>
                              {/* <Link href="/Update-address-page"> */}
                              <span>Edit</span>
                              {/* </Link> */}
                            </div>
                            <div
                              onClick={(e) => handleDelete(address.id)}
                              className="option"
                            >
                              <i className="fas fa-trash-alt"></i>
                              <span>Delete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="icon-text">
                      <span
                        style={{
                          marginRight: "10px",
                          marginLeft: "8px",
                          marginTop: "15px",
                          color: "#CCD2D8",
                        }}
                      >
                        <AiOutlineInfoCircle />
                      </span>

                      <span>{address.addressnotes}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <hr className="line-color" />
            {/* ============section2============= */}
            {/* <div className="d-flex bd-highlight">
                <div className="p-2 flex-grow-1 bd-highlight">
                  <span style={{ fontSize: "20px" }}>
                    <BiBuildings />
                  </span>
                  <span className="address-info">Office</span>
                  <p className="Office">
                    Beck Hall, Cove Road Malham Yorkshire, United Kingdom (BD23
                    4DJ){" "}
                  </p>
                </div>
                <div className="p-2 bd-highlight">
                <span style={{ fontSize: "15px",color:"#ccd2d8" }}>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div> */}

            <hr className="line-color" />
            {/* ===============section3=================== */}
            {/* {addresses.map((address, index) => (
                <div>
                  <div className="d-flex bd-highlight" key={index}>
                    <div className="p-2 flex-grow-1 bd-highlight">
                      <span style={{ fontSize: "20px" }}>
                        <AiOutlineHome />
                      </span>
                      <span className="address-info"> {address.line1}</span>
                      <p className="Office">{address.line1}</p>
                    </div>
                    <div className="p-2 bd-highlight">
                      <span style={{ fontSize: "15px", color: "#ccd2d8" }}>
                        <BsThreeDotsVertical />
                      </span>
                    </div>
                  </div>

                  <div className="icon-text">
                    <span
                      style={{
                        marginRight: "10px",
                        marginLeft: "8px",
                        marginTop: "15px",
                        color: "#CCD2D8",
                      }}
                    >
                      <AiOutlineInfoCircle />
                    </span>

                    <span>{address.line1}</span>
                  </div>
                </div>
              ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manageaddress;
