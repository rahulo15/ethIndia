import React from "react";
import "../Styles/Contact.css";
export default function Contact() {
  return (
    <>
      <div className="container d-flex">
        <div className="contactLeft py-4 px-4">
          <div className="mx-auto my-4">
            <h2 className="px-4">Submit your query</h2>

            <div className="d-flex flex-column">
              <div className="d-flex px-4 py-2 justify-content-between">
                <h6 className="inputHeading px-4 py-2">Name</h6>
                <input type="text" className="form-control inputType" />
              </div>

              <div className="d-flex px-4 py-2 justify-content-between">
                <h6 className="inputHeading px-4 py-2">Email address</h6>
                <input type="email" className="form-control inputType" />
              </div>

              <div className="d-flex px-4 py-2 justify-content-between">
                <h6 className="inputHeading px-4 py-2">Contact Number</h6>
                <input type="text" className="form-control inputType" />
              </div>

              <div className="d-flex px-4 py-2 justify-content-between">
                <h6 className="inputHeading px-4 py-2">Describe your query</h6>
                <input type="text" className="form-control inputType query" />
              </div>

              <div class="py-4 col-md-12 text-center">
                <button type="submit" className="button btn btn-block">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-end py-4"></div>

        <div className="contactRight py-4 px-4">
          <div className="contact mx-auto">
            <div className="mx-0 my-4">
              <h6 className="contactText m-0">Phone:</h6>
              <p className="text m-0">1800-1003-2319</p>
            </div>

            <div className="mx-0 my-4">
              <h6 className="contactText m-0">email:</h6>
              <p className="text m-0">contact@donor.com</p>
            </div>

            <div className="mx-0 my-4">
              <h6 className="contactText m-0">address:</h6>
              <div className="address">
                <p className="text m-0 p-0">101-xyz heights,</p>
                <p className="text m-0 p-0">abc street,</p>
                <p className="text m-0 p-0">Bangalore-560027</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
