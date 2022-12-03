import React from "react";

export default function register_donor() {
  return (
    <>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6 p-3">
            <label for="FirstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="FirstName"
              placeholder="Enter Donor's First Name"
            />
          </div>
          <div className="form-group col-md-6 p-3">
            <label for="SecondName">Second Name</label>
            <input
              type="text"
              className="form-control"
              id="SecondName"
              placeholder="Enter Donor's Second Name"
            />
          </div>
          <div className="form-group col-md-6 p-3">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group col-md-6 p-3">
            <label for="BloodGroup" className="form-label">
              Select Blood Group
            </label>
            <input
              className="form-control"
              list="BloodGroupOptions"
              id="BloodGroup"
              placeholder="Select..."
            />
            <datalist id="BloodGroupOptions">
              <option value="A+" />
              <option value="A-" />
              <option value="B+" />
              <option value="B-" />
              <option value="O+" />
              <option value="O-" />
              <option value="AB+" />
              <option value="AB-" />
            </datalist>
          </div>
          <div className="form-group col-md-2 p-3">
            <label for="inputAge">Age</label>
            <input type="number" className="form-control" id="inputAge" />
          </div>
          <button type="submit" className="btn btn-primary m-3">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
