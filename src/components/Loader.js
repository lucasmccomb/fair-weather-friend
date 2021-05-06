import React from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../store/loadingSlice";
import { Sun } from "react-bootstrap-icons";
import "../styles/App.scss";

export function Loader() {
  const loading = useSelector(selectLoading);
  return (
    <div className="fwf__loader--wrap">
      <div className="row justify-content-center">
        <Sun className={`fwf__loader--icon ${loading ? "spinning" : ""}`} />
      </div>
    </div>
  );
}

export default Loader;
