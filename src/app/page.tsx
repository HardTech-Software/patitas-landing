"use client";
import {
  HomeSection,
  InfoSection,
  SubscribeSection,
  MissionSection,
  ContactSection,
} from "@/components";
import React from "react";

const Home = () => {
  return (
    <>
      <HomeSection id="home-section" />
      <InfoSection id="info-section" />
      <SubscribeSection id="subscribe-section" />
      <MissionSection id="mission-section" />
      <ContactSection id="contact-section" />
    </>
  );
};

export default Home;
