import React, { useState } from "react";
// import axios from "axios";
export default function Footer() {
  const [email, setEmail] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    // axios
    //   .post("http://localhost:5000/joinlist", { email: email })
    //   .then(res => {
    //     res.json();
    //     console.log(res);
    //   })
    //   .catch(error => console.log(error));

    // function ValidateEmail() {
    //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //     return setSuccessfulSubmit(true)

    //   }
    //   throwError(true)
    //   return (false)
    // }
    // console.log(ValidateEmail);

    // ValidateEmail()

  };
  return (
    <>
      <div className="footer-section">
        <div className="footer-content">
          <h1 className="footer-title">Join our mailing list</h1>
          <p className="footer-par">
            Stay up to date on deals, services, and new arrivals.
          </p>
          <div className="footer-body">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Please enter an email address"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
              <button>SIGN ME UP!</button>
            </form>
          </div>
          {/* <div className="footer-body">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder={successfulSubmit ? 'Thank you for subscribing' : 'Please enter an email address'}
                style={error ? { border: '2px solid red' } : undefined}
                onChange={e => { throwError(false); setEmail(e.target.value) }}
                value={email}
              />
              <button>SIGN ME UP!</button>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
}


