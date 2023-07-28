import React from "react";
import GridPlace from "../components/Grid/GridPlace";
import dataSale from "../dataSale.json";

export default function SalePage() {
  return <GridPlace infoData={dataSale} />;
}
