import React from "react";
import { useTopRateMoviesQuery } from "../../../../hooks/useTopLateMovies";
import { Alert } from "react-bootstrap";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const TopRateMovieSlide = () => {
  const { data, isError, error, isLoading } = useTopRateMoviesQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title="TopRate Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRateMovieSlide;
