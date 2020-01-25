import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer-section">
        <div className="footer-content">
          <h1 className="footer-title">Join our mailing list</h1>
          <p className="footer-par">
            Stay up to date on deals, services, and new arrivals.
          </p>
          <div className="footer-body">
            <input
              type="email"
              placeholder="Please enter an email address"
              name=""
              id=""
            />
            <button onClick="">SIGN ME UP!</button>
          </div>
        </div>
      </div>
    </>
  );
}
