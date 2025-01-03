import React from "react";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
import { Alert } from "react-bootstrap";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const UpcomingMovieSlide = () => {
  const { data, isError, error, isLoading } = useUpcomingMoviesQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title="UpComing Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMovieSlide;
