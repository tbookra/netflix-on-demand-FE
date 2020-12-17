import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MovieSection from "../../components/MovieSection";
import { moviesUrls } from "../../config/movies-config";
import { sectionType } from "../../config/sectionTypes";

const MovieSections = () => {
  const { section } = useParams();
  const [page, setPage] = useState(1);

  const handlePageMove = (direction) => {
    if (direction === "Up" && page !== 1000) {
      setPage(page + 1);
    } else if (direction === "Down" && page !== 1) {
      setPage(page - 1);
    }
  };

  const url = moviesUrls(page);

  useEffect(() => {
    setPage(1);
  }, [section]);

  return (
    <div>
      <h1>{sectionType(section).sectionTitle}</h1>

      <MovieSection
        handlePageMove={handlePageMove}
        sectionUrl={url[sectionType(section).urlArr].fetchUrl}
      />
    </div>
  );
};

export default MovieSections;
