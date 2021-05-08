import React from 'react';
import Carousel from './partials/Carousel/Carousel';
import GamesHub from './partials/GamesHub/GamesHub';
import UpcomingGames from './partials/UpcomingGames/UpcomingGames';

export default function pageBody() {
  return (
    <div className="page-body">
      <Carousel />
      <GamesHub />
      <UpcomingGames />
    </div>
  );
}
