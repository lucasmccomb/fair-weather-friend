import React from "react";
import { useSelector } from "react-redux";
import { selectLocation } from "../store/locationSlice";
import { CursorFill } from "react-bootstrap-icons";
import "../styles/App.scss";

export function LocationInput() {
  const currentLocation = useSelector(selectLocation);
  return currentLocation ? (
    <div className="fwf__location-label--wrap">
      <div className="row justify-content-center">
        <CursorFill size={18} className="fwf__location-label--icon" />
        <h4>{currentLocation}</h4>
      </div>
    </div>
  ) : null;
}

export default LocationInput;
