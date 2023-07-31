import React from "react";
import GridPlace from "../components/Grid/GridPlace";
import dataMan from "../dataMan.json";

export default function ManPage() {
  return (
    <>
      <h2 className=" align-content-center font-weight-bold rounded-5 p-3 text-bg-dark mt-4 text-center">
        Men's clothing collection
      </h2>
      <GridPlace infoData={dataMan} />;
    </>
  );
}


// d-flex justify-content-center text-bg-dark bg-opacity-50 mt-4 rounded-bottom-5