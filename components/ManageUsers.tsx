import React, { useState } from "react";
import img1 from "../public/images/img7.png";
import img2 from "../public/images/profile1.png";
import img3 from "../public/images/profile2.png";

import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/Manage-users.module.css";
const ManageUsers = () => {


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
                  <h4 className="manage-address">Manage Users</h4>
                  <p className="manage-address-detail">
                  Don&apos;t worry, your information is private and we will not share this info with
anyone outside Expert!
                  </p>
                  
                  <a
                    href=""
                    className="Learn-more"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Add New User
                    <AiOutlineRight />
                  </a>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog mt-5">
                      <div className="card p-3 pb-4 pt-4 rounded">
                        <p className="text-center">Select Address Type</p>
                        <div className="">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="card text-center p-2 rounded">
                                <div className="text-center">
                                  <span
                                    style={{ fontSize: "20px", top: "50px" }}
                                  >
                                    <BiBuildings />
                                  </span>
                                </div>
                                <p>Office Address</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card text-center p-2 ">
                                <span style={{ fontSize: "20px", top: "50px" }}>
                                  <BiBuildings />
                                </span>

                                <p>Home Address</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="card text-center p-2">
                                <span style={{ fontSize: "20px", top: "50px" }}>
                                  <BiBuildings />
                                </span>

                                <p>Other</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
              <div className={styles.choose_section}>
                <div className={styles.left_section}>
                  <p> Users List</p>
                </div>
                <div className={styles.right_section}>
                  <div className="search-wrapper">
                    <span style={{ marginBottom: "3px", marginLeft: "10px",color:"#ccd2d8" }}>
                      <FiSearch />
                    </span>
                    <input type="text" placeholder="Search" style={{color:"#ccd2d8" }}/>
                  </div>
                  <div className={styles.add_button}>
                    {/* <span style={{ color: "#ffffff" }}>
                      <AiOutlinePlus />
                    </span> */}
                    <p className="">+ Add</p>
                  </div>
                </div>
              </div>

              <div className="d-flex bd-highlight">
                <div className="flex-grow-1 bd-highlight">
                  <div className="d-flex align-items-center">
                    <Image
                      src={img2}
                      alt="avatar"
                      style={{borderRadius: "8px"}}
                      width={60}
                      height={60}
                    />
                    <div className="ms-3">
                      <h5 className={styles.roles_name}>Muhammad Zeeshan</h5>
                      <p className={styles.roles}>Owner</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 bd-highlight">
                  <span style={{ fontSize: "15px", color: "#ccd2d8" }}>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>

              <hr className="line-color" />
              {/* ============section2============= */}
              <div className="d-flex bd-highlight">
                <div className="flex-grow-1 bd-highlight">
                  <div className="d-flex align-items-center">
           
                     <Image
                      src={img3}
                      alt="avatar"
                      style={{borderRadius: "8px"}}
                      width={60}
                      height={60}
                    />
                    <div className="ms-3">
                      <h5 className={styles.roles_name}>Ayesha Riaz</h5>
                      <p className={styles.roles}>Assistant Manager</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 bd-highlight">
                  <span style={{ fontSize: "15px", color: "#ccd2d8" }}>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
              {/* ===============section3=================== */}
              <div className="d-flex bd-highlight">
                <div className="flex-grow-1 bd-highlight">
                  <div className="d-flex align-items-center">
        
                      <Image
                      src={img2}
                      alt="avatar"
                      style={{borderRadius: "8px"}}
                      width={60}
                      height={60}
                    />
                    <div className="ms-3">
                      <h5 className={styles.roles_name}>Ahsan Khan</h5>
                      <p className={styles.roles}>HR Manager</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 bd-highlight">
                  <span style={{ fontSize: "15px", color: "#ccd2d8" }}>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>
              <hr className="line-color" />

              {/* ===========section 4================ */}
              <div className="d-flex bd-highlight">
                <div className="flex-grow-1 bd-highlight">
                  <div className="d-flex align-items-center">
       
                    <Image
                      src={img3}
                      alt="avatar"
                      style={{borderRadius: "8px"}}
                      width={60}
                      height={60}
                    />
                    <div className="ms-3">
                      <h5 className={styles.roles_name}>Junaid Ahmad</h5>
                      <p className={styles.roles}>Design Lead</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 bd-highlight">
                  <span style={{ fontSize: "15px", color: "#ccd2d8" }}>
                    <BsThreeDotsVertical />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
