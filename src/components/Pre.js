import React from "react";
import { ImSpinner2 } from "react-icons/im";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"} ><ImSpinner2 className="loader-icon" /></div>;
}

export default Pre;
