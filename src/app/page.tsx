"use client";
import { HomeSection, SubscribeSection } from "@/components";
import ForYouSection from "@/components/sections/for-you-section";
import MissionSection from "@/components/sections/mission-section";
import React from "react";

const Home = () => {
  return (
    <>
      <HomeSection id="home-section" />
      <ForYouSection id="for-you-section" />
      <SubscribeSection id="subscribe-section" />
      <MissionSection id="mission-section" />
    </>
  );
};

export default Home;
