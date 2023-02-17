import React from "react";
import img1 from "../public/images/img1.jpg";
import Image from "next/image";
const Modal = () => {
  return (
    <>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog p-3">
            <div className="modal-content">
              <Image
                src={img1}
                height={100}
                width={100}
                alt="create account"
                className="rounded-circle mx-auto d-block mt-3"
              />
              <div className="text-center">
                <h5 className="mt-2">Muhammad Zeeshan</h5>
                <p className="grey-text">Personal Account</p>
                <div className="card create-account">
                  <p className="mt-2">Create Business Account</p>
                </div>
              </div>
              <hr className="line-color" />

              {/* ==========start list========= */}
              <div className="container">
                <ul className="list-group list-group-light">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        style={{ width: 45, height: 45 }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <h5 className=" mb-1">John Doe</h5>
                        <p className="text-muted mb-0">john.doe@gmail.com</p>
                      </div>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultValue="option1"
                      />
                    </div>
                  </li>
                  <hr className="line-color" />
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                        className="rounded-circle"
                        alt=""
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-3">
                        <h5 className="mb-1">Alex Ray</h5>
                        <p className="text-muted mb-0">alex.ray@gmail.com</p>
                      </div>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultValue="option1"
                      />
                    </div>
                  </li>
                  <hr className="line-color" />
                  <li className="list-group-item d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                        className="rounded-circle"
                        alt=""
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-3">
                        <h6 className="mb-1">Kate Hunington</h6>
                        <p className="text-muted mb-0">
                          kate.hunington@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultValue="option1"
                      />
                    </div>
                    {/* <input type="radio" id="html" name="fav_language" defaultValue="HTML"  className="form-check"/> */}
                  </li>
                </ul>
              </div>

              {/* ===========end list========== */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
