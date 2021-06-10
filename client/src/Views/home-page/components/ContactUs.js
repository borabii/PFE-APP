import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";
function ContactUs() {
  const [message, setMessage] = useState({});
  const handelChange = (event) => {
    setMessage({
      ...message,
      [event.target.name]: event.target.value,
    });
  };
  console.log(message);

  const handelSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/Contact/ContactUs", message);
  };
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
            <div className="col  col-xs-2  col-sm-12 col-md-12 col-lg-9">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nom"
                    name="nom"
                    onChange={handelChange}
                    value={message.nom}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={handelChange}
                    value={message.email}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    name="message"
                    value={message.message}
                    onChange={handelChange}
                    required
                  />
                </div>
                <button
                  onClick={handelSubmit}
                  className="btn btn-custom btn-lg"
                >
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
