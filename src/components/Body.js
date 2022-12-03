import React from "react";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <div className="container d-flex-column">
      <Link
        type="button"
        className="btn btn-outline-success w-100 m-4 p-4"
        to="/register_donor"
      >
        Register Donor
      </Link>

      <Link
        type="button"
        className="btn btn-outline-success w-100 m-4 p-4"
        to="/register_patient"
      >
        Register Patient
      </Link>

      <Link
        type="button"
        className="btn btn-outline-success w-100 m-4 p-4"
        to="/view_donor"
      >
        View Donor
      </Link>

      <Link
        type="button"
        className="btn btn-outline-success w-100 m-4 p-4"
        to="/view_patient"
      >
        View Patient
      </Link>
    </div>
  );
}
