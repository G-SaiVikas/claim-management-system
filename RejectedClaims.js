import React from "react";

export default function RejectedClaims() {
  return (
    <>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>No Accepted Claims!</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div>
        <div style={{ textAlign: "right" }}>
          <button type="button" className="btn btn-primary">
            Log out
          </button>
        </div>
        <h2 className="text-center my-3">Accepted Claims</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Claim id</th>
              <th scope="col">User id</th>
              <th scope="col">Policy id</th>
              <th scope="col">Owner Name</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}
