import React from "react";
import GridPlace from "../components/Grid/GridPlace";
import dataSale from "../dataSale.json";

export default function SalePage() {
  return (
    <>
      <h2 className=" align-content-center font-weight-bold rounded-5 p-3 text-bg-dark mt-4 text-center">
        Sale clothing
      </h2>
      <GridPlace infoData={dataSale} />;
    </>
  );
}
