import React from "react";
import style from "../styles/Profile.module.css";
import img1 from "../public/images/img11.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { HiBadgeCheck } from "react-icons/hi";
const Profile_page = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3">
            <div className="card card-border">side bar</div>
          </div>
          <div className="col-md-9">
            {/* ===========card 1=========== */}
            <div className="card p-4">
              <div className={style.section_content}>
                <div>
                  <Image
                    src={img1}
                    alt="profile image"
                    height={100}
                    width={100}
                    style={{ borderRadius: 50, marginRight: 18 }}
                  />
                </div>
                <div>
                  <h3 className={style.heading}>Hi, Muhammad Zeeshan</h3>
                  <p className={style.details}>Personal Account</p>
                  <Link href="" className={style.redtext}>
                    Switch Account
                  </Link>
                </div>
              </div>
            </div>
            {/* ===========card 2=========== */}
            <div className="card p-4 mt-3">
              <h3 className={style.basic_info}>Basic Info</h3>
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>First Name</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>Muhammad</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Last Name</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>Zeeshan</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Gender</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>Male</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Date of Birth</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>March 25, 2000</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
            </div>
            {/* ===========card 3=========== */}
            <div className="card p-4 mt-3">
              <h3 className={style.basic_info}>Contact Info</h3>
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Emails</p>
                </div>
                <div className={style.style_left_text}>
                  <div>
                    <p className={style.right_email}>
                      junaidahmed999@gmail.com
                    </p>
                    <p className={style.right_email}>
                      malik.zeeshan7458@gmail.com
                    </p>
                    <div className={style.third_email}>
                      <div className={style.badge}>
                        <span
                          style={{
                            fontSize: "16px",
                            color: "#5fdf5a",
                            marginRight: "3px",
                            paddingBottom:"15px",
                          }}
                        >
                          <HiBadgeCheck />
                          verified
                        </span>
                                   
                      </div>
                      <p className={style.right_email1}>
                        muhammad.zeeshan123@gmail.com
                      </p>
                    </div>
                  </div>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Phone</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>03035579649</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
            {/* ===========card 4=========== */}
            <div className="card p-4 mt-3">
              <h3 className={style.basic_info}>Password</h3>
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Last changed Oct 19</p>
                </div>
                <div className={style.style_left_text}>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="password-input"
                  />
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            </div>
            {/* ===========card 5=========== */}
            <div className="card p-4 mt-3">
              <h3 className={style.basic_info}>Personal Documents</h3>
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>National Identity Card</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>Muhammad</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Educational documents</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>Zeeshan</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
              <hr className="line-color" />
              <div className={style.wrapper_Text}>
                <div>
                  <p className={style.left_text}>Medical documents</p>
                </div>
                <div className={style.style_left_text}>
                  <p className={style.right_text}>Male</p>
                  <span style={{ marginBottom: "19px", color: "#ccd2d8" }}>
                    <IoIosArrowForward />
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

export default Profile_page;
