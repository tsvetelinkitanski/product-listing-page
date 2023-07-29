import React, { useEffect, useState } from "react";
import allData from "../allData.json";
import Button from "react-bootstrap/Button";
import GridPlace from "../components/Grid/GridPlace";

export default function HomePage() {
  const [loadMore, setLoadMore] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  const [renderKey, setRenderKey] = useState(0);

  const getRandomData = () => {
    const shuffledData = allData.sort(() => 0.5 - Math.random());
    return shuffledData.slice(0, 6);
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
      <h2 className="d-flex justify-content-center text-bg-info bg-opacity-50 mt-4 rounded-bottom-5">
        Home page
      </h2>
      <GridPlace key={renderKey} infoData={displayedData} />
      {!loadMore && (
        <Button className="text-bg-secondary" onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </>
  );
}
