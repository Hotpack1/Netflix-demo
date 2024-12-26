import React from 'react'
import "./HomePage.style.css";
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRateMovieSlide from './components/TopRateMovieSlide/TopRateMovieSlide';
import UpcomingMovieSlide from './components/UpcomingMovieSlide/UpcomingMovieSlide';


const Homepage = () => {
  return (
    <div className='back-color'>
      <Banner/>
      <PopularMovieSlide/>
      <TopRateMovieSlide/>
      <UpcomingMovieSlide/>
    </div>
  )
}

export default Homepage
