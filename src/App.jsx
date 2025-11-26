import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import BookingSteps from './components/BookingSteps';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';
import PartnersLogo from './components/PartnersLogo';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <BookingSteps />
      <PartnersLogo />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
