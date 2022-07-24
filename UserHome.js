import React from "react";

export default function UserHome() {
  return (
    <>
      <div>
        <div style={{ textAlign: "right" }}>
          <button type="button" className="btn btn-primary">
            Log out
          </button>
        </div>
        <h2 className="text-center my-3">My Policies</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Policy No.</th>
              <th scope="col">Creation Date</th>
              <th scope="col">Effective Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Agent Name</th>
              <th scope="col">Claims</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}
