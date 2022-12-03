import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light py-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 mx-5" role="button">
            <Link
              className="nav-link active mx-3"
              role="button"
              aria-current="page"
              to="/"
            >
              Donor's Choice
            </Link>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-3"
                  role="button"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" role="button" to="#">
                  Location
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" role="button" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Important Links
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" role="button" to="#">
                      Link Wallet
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" role="button" to="#">
                      Deposit Entry Fees
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <form className="d-flex mr-auto mx-5" role="contact">
            <button class="btn btn-outline-danger" type="submit">
              <Link
                className="nav-link active mx-3"
                role="button"
                aria-current="page"
                to="/contact"
              >
                Get in Touch ASAP!
              </Link>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
