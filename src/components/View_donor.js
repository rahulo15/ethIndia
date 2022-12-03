import React from "react";

export default function view_donor() {
  return (
    <>
      <form>
        <div className="form-row p-4">
          <div className="form-group col-md-6 p-3">
            <label for="DonorID">Donor's ID</label>
            <input
              type="text"
              className="form-control"
              id="DonorID"
              placeholder="Enter Donor's ID"
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
