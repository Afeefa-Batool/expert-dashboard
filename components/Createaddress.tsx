import React from "react";
import img1 from "../public/images/img3.png";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
const Createaddress = () => {
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
            <div className="card p-4 mt-4">
              <div className="row d-flex justify-content-around">
                <div className="col-md-12">
                  <div className="input-group">
                    <input type="text" required value={"abc"}/>
                    {/* <label htmlFor="">username</label> */}
                    <label htmlFor="">
                      {/* <BiBuildings />
                      <span className="Beck-Hall">Beck Hall, Cove Road Malham Yorkshire, United Kingdom (BD23 4DJ)</span> */}
                    Address
                    </label>
                  </div>
                </div>
                <div className="row p-0">
                  <div className="col-md-12">
                    <div className="input-group">
                      <input type="text" required />
                      <label htmlFor="">Address Name</label>
                    </div>
                  </div>
           
                </div>
                <div className="row p-0">
                  <div className="col-md-6">
                    <div className="input-group">
                      <input type="text" required />
                      <label htmlFor="">Flat & Building Number</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <input type="text" required />
                      <label htmlFor="">Street Address</label>
                    </div>
                  </div>
                </div>
                <div className="row p-0">
                  <div className="col-md-6">
                    <div className="input-group">
                      <input type="text" required />
                      <label htmlFor="">City</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <input type="text" required />
                      <label htmlFor="">Postal Code</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-group">
                    <textarea  required className="note-section" />
                    <label htmlFor="">Address Note (Optional)</label>
                  </div>
                </div>

                <div className="button-row">
                  <button className="button1">Cancel</button>
                  <button className="button2">Save</button>
                </div>
              </div>
            </div>
            {/* ===========input feilds section end================ */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Createaddress



