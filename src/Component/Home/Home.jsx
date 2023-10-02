import React from 'react';
import Banner from './Banner/Banner';
import TopUpGame from './TopUpGame/TopUpGame';
import TrustUs from './TrustUs/TrustUs';
import Review from './Review/Review';

const Home = () => {
  return (
    <>
      {/* banner */}
      <Banner></Banner>

      {/* home shop */}
      <TopUpGame title={" TOP UP GAMES"}></TopUpGame>

      {/* Hot deal  */}
      <TopUpGame title={"Hot Deal"}></TopUpGame>

      {/* Top Tournament */}
      <TopUpGame title={"Top tournament"}></TopUpGame>

      {/* trust us */}
      <TrustUs></TrustUs>


      {/* Trusted Review */}
      <Review></Review>
    </>
  );
};

export default Home;