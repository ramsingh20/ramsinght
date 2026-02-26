"use client";

import Hero from '@/components/Home/Hero';
import Work from '@/components/Home/work';
import TimeLine from '@/components/Home/timeline';
import Faq from '@/components/Home/Faq';
import GlobalReach from '@/components/Home/GlobalReach';

const HomeContainer = () => {
  return (
    <>
      <Hero />
      <Work />
      <GlobalReach />
      <TimeLine />
      <Faq />
    </>
  );
};

export default HomeContainer;
