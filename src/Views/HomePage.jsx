import React, { useState } from "react";
import allData from "../dataAll.json";
import Button from "react-bootstrap/Button";
import GridPlace from "../components/Grid/GridPlace";

export default function HomePage() {
  const [loadMore, setLoadMore] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  const [renderKey, setRenderKey] = useState(0);

  const getRandomData = () => {
    const shuffledData = allData.sort(() => 0.5 - Math.random());
    return shuffledData.slice(0, 8);
  };

  if (displayedData.length === 0) {
    const randomData = getRandomData();
    setDisplayedData(randomData);
  }

  const handleLoadMore = () => {
    setLoadMore(true);
    setDisplayedData(allData);
    setRenderKey(renderKey + 1);
  };
  return (
    <>
      <h2 className=" align-content-center font-weight-bold rounded-5 p-3 text-bg-dark mt-4 text-center">
        Home page
      </h2>
      <GridPlace key={renderKey} infoData={displayedData} />
      {!loadMore && (
        <div className="d-flex justify-content-center mb-5">
          <Button variant="outline-dark" onClick={handleLoadMore}>
            Load more
          </Button>
        </div>
      )}
    </>
  );
}
