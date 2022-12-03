import React from "react";

export default function About() {
  return (
    <>
      <div className="acc p-4 m-4">
        <h3 className="m-auto">About Us</h3>
        <div className="accordion my-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Theme of Idea
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Organ donation being the most noble deed requires
                revolutionization. De-Organ provides an efficient platform for
                potential organ donors and those who need the organs to connect.
                Built on the Solana network,it is known to be a decentralized
                and distributed network which stores records that is Trackable
                on BlockChain & immutable. overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Key Features
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="container d-flex-row">
                  <ul class="list-group">
                    <li class="list-group-item px-4">Ethereum Blockchain</li>
                    <li class="list-group-item px-4">Decentralization</li>
                    <li class="list-group-item px-4">Authentication</li>
                    <li class="list-group-item px-4">Decentralization</li>
                    <li class="list-group-item px-4">Tracable Public Chain</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Our Team
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul className="list-group">
                  <li className="list-group-item px-4">
                    <strong>Pranayak Uniyal</strong>
                  </li>
                  <li className="list-group-item px-4">
                    <strong>Rahul Kumar</strong>
                  </li>
                  <li className="list-group-item px-4">
                    <strong>Rehan Khan</strong>
                  </li>
                  <li className="list-group-item px-4">
                    <strong>Swaroop Kammath</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
