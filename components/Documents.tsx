import React from "react";
import style from "../styles/Basic-info.module.css";
import img1 from "../public/images/a.png";
import img2 from "../public/images/b.png";
import img3 from "../public/images/c.png";
import Image from "next/image";
const Documents = () => {
  return (
    <>
      {/* ===========================document body============================ */}
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-3">
            <div className="card card-border">side bar</div>
          </div>
          <div className="col-md-9">
            <div className="card p-4">
              <h2 className={style.Basic_info} style={{marginBottom:"30px"}}>Personal Documents</h2>
              <div className="row">
                <div className="col-md-2">
                  <div className="card-body">
                    <div className="card-image">
                      <Image
                        src={img2}
                        alt="Image description"
                        height={66}
                        width={66}
                      />
                    </div>
                    <div className="card-text">
                      <p>3.5Kbs</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card-body">
                    <div className="card-image">
                      <Image
                        src={img1}
                        alt="Image description"
                        height={66}
                        width={66}
                      />
                    </div>
                    <div className="card-text">
                      <p>3.5Kbs</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card-body">
                    <div className="card-image">
                      <Image
                        src={img2}
                        alt="Image description"
                        height={66}
                        width={66}
                      />
                    </div>
                    <div className="card-text">
                      <p>3.5Kbs</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card-body">
                    <div className="image">
                      <Image
                        src={img3}
                        alt="Image description"
                        height={38}
                        width={46}
                        style={{ marginTop: "10px", marginLeft: "31px" }}
                      />
                    </div>
                    <div className="text-upload">
                      <p>Upload</p>
                      <p>or</p>
                      <p className="browse-file" style={{color:"#db0406"}}>Browse File</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-row" style={{ marginTop: "220px" }}>
                <button className="button2">Save & Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documents;
