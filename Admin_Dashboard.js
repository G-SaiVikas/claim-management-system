import React from "react";

export default function Admin_Dashboard() {
  return (
    <>
      <div style={{ textAlign: "right" }}>
        <button type="button" className="btn btn-primary my-3">
          Log out
        </button>
      </div>
      <h2 className="text-center">Admin DashBoard</h2>

      <div className="row row-cols-1 row-cols-md-3 my-3 g-4">
        <div className="row">
          <div
            className="card text-white bg-success mb-3 my-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Accepted Claims</div>
            <div className="card-body">
              <p className="card-text">..</p>
              <a href="/#" class="stretched-link" />
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="card text-white bg-danger mb-3 my-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Rejected Claims</div>
            <div className="card-body">
              <p className="card-text">..</p>
              <a href="/#" class="stretched-link" />
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="card text-white bg-warning mb-3 my-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Pending Claims</div>
            <div className="card-body">
              <p className="card-text">..</p>
              <a href="/#" className="stretched-link" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
