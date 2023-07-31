import React from "react";
import GridPlace from "../components/Grid/GridPlace";
import dataWoman from "../dataWoman.json";

export default function WomanPage() {
  return (
    <>
      <h2 className=" align-content-center font-weight-bold rounded-5 p-3 text-bg-dark mt-4 text-center">
        Women's clothing collection
      </h2>
      <p className="d-flex justify-content-center text-secondary lead">
        Dive to the trend
      </p>
      <GridPlace infoData={dataWoman} />;
    </>
  );
}
