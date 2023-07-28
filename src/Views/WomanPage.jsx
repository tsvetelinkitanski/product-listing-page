import React from "react";
import GridPlace from "../components/Grid/GridPlace";
import dataWoman from "../dataWoman.json";

export default function WomanPage() {
  return <GridPlace infoData={dataWoman} />;
}
