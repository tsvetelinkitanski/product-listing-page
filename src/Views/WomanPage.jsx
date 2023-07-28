import React from "react";
import GridPlace from "../components/Grid/GridPlace";
import dataWoman from "../dataWoman.json";

export default function WomanPage() {
  return (
    <>
      <h2 className="d-flex justify-content-center text-bg-dark bg-opacity-50 mt-4 rounded-bottom-5">
        Woman dress
      </h2>
      <GridPlace infoData={dataWoman} />;
    </>
  );
}
