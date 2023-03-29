import React, { useEffect, useState } from "react";

import img1 from "../public/images/img2.png";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";
interface Address {
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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://microexpertaddressapi-preprod.findanexpert.net/address_svc/pv/UserAddress/getAddress"
      );
      const data: ApiResponse = await response.json();
      setAddresses(data.result.addresses);
    }
    fetchData();
  }, []);
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
                    Don't worry, your information is private and we will not
                    share this info with anyone outside Expert!
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
              {addresses.map((address, index) => (
                <div>
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

                    <span>{address.addressnotes}</span>
                  </div>
                </div>
              ))}

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
      </div>
    </>
  );
};

export default Manageaddress;
