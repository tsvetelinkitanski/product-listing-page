import React from "react";
import GridPlace from "../components/Grid/GridPlace";
import dataSale from "../dataSale.json";

export default function SalePage() {
  return (
    <>
      <h2 className="d-flex justify-content-center text-bg-danger mt-4 rounded-bottom-5">
        Sale page
      </h2>
      <GridPlace infoData={dataSale} />;
    </>
  );
}
