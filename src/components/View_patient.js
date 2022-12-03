import React from "react";

export default function view_patient() {
  return (
    <>
      <form>
        <div className="form-row p-4">
          <div className="form-group col-md-6 p-3">
            <label for="PatientID">Patient's ID</label>
            <input
              type="text"
              className="form-control"
              id="PatientID"
              placeholder="Enter Patient's ID"
            />
          </div>
          <button type="fetch" className="btn btn-warning m-3">
            Fetch
          </button>
        </div>
      </form>
    </>
  );
}
