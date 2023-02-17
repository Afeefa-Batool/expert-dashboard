import React from "react";
import img1 from "../public/images/img1.jpg";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
const Manageaddress = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-between">
          <div className="col-md-4">
            <div className="card card-border">side bar</div>
          </div>
          <div className="col-md-8">
            {/* ===========create addres ssection============= */}
            <div className="card p-4">
              <div className="row d-flex justify-content-between">
                <div className="col-md-6">
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
                    height={80}
                    width={80}
                    alt="create account"
                    className="rounded-circle mx-auto d-block mt-3"
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
                    <input type="text" required />
                    <label htmlFor="">username</label>
                  </div>
                </div>
                <div className="row p-0">
                  <div className="col-md-6">
                    <div className="input-group">
                      <input type="text" required />
                      <label htmlFor="">username</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <input type="text" required />
                      <label htmlFor="">username</label>
                    </div>
                  </div>
                </div>
                <div className="row p-0">
                  <div className="col-md-6">
                    <div className="input-group">
                      <input type="text" required />
                      <label htmlFor="">username</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <input type="text" required />
                      <label htmlFor="">username</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-group">
                    <input type="text" required />
                    <label htmlFor="">username</label>
                  </div>
                </div>
                <div className="float">
                <div className="row d-flex justify-content-between">
<h1>hi</h1>
<h1>gy</h1>

                </div>
                </div>
              </div>
            </div>
            {/* ===========input feilds section end================ */}
          </div>
        </div>
      </div>
    </> 
  );
};

export default Manageaddress;
