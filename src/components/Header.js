import React from "react";
import { CloudLightningRain, Umbrella } from "react-bootstrap-icons";
import "../styles/App.scss";

export function Header() {
  return (
    <header className="fwf__header row">
      <h1>
        <CloudLightningRain size={24} className="fwf__header--icon" />
        fair weather friend <Umbrella size={24} className="fwf__header--icon" />
      </h1>
    </header>
  );
}

export default Header;
