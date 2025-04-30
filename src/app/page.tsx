"use client";
import {
  HomeSection,
  InfoSection,
  SubscribeSection,
  MissionSection,
} from "@/components";
import React from "react";

const Home = () => {
  return (
    <>
      <HomeSection id="home-section" />
      <InfoSection id="info-section" />
      <SubscribeSection id="subscribe-section" />
      <MissionSection id="mission-section" />
    </>
  );
};

export default Home;
