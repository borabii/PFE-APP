import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Contacter Nous</h2>
              <p>
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col  col-xs-2  col-sm-5 col-md-7 col-lg-9">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nom"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
