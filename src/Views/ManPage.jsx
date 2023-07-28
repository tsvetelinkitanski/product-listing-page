import React from "react";
import GridPlace from "../components/Grid/GridPlace";
import dataMan from "../dataMan.json";

export default function ManPage() {
  return <GridPlace infoData={dataMan} />;
}
