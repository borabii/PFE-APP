import React, { Fragment } from "react";
import spinner1 from "./spinner1.gif";

export default () => (
  <Fragment>
    <img
      src={spinner1}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="Loading..."
    />
  </Fragment>
);
