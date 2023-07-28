import React from "react";
import GridPlace from "../components/Grid/GridPlace";
import dataMan from "../dataMan.json";

export default function ManPage() {
  return (
    <>
      <h2 className="d-flex justify-content-center text-bg-dark bg-opacity-50 mt-4 rounded-bottom-5">
        Men clothing
      </h2>
      <GridPlace infoData={dataMan} />;
    </>
  );
}
