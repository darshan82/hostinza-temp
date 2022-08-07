import React from 'react';
import AboutHeroSection from '../../components/AboutUs/AboutHeroSection';
import LifeAtHostinza from '../../components/AboutUs/LifeAtHostinza';
import MeetOurTeam from '../../components/AboutUs/MeetOurTeam';
import WhoWeAre from '../../components/AboutUs/WhoWeAre';
import WhyChooseUs from '../../components/Home/WhyChooseUs';
import AboutWhyChooseUs from "../../components/AboutUs/AboutWhyChooseUs";
import GetProOffers from "../../components/AboutUs/GetProOffers";
import OurMission from "../../components/AboutUs/OurMission";
import Layout from '../../components/Layout';
import Seo from '../../components/Common/Seo';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <AboutHeroSection/>
        <WhoWeAre/>
        <WhyChooseUs/>
        <LifeAtHostinza/>
        <MeetOurTeam/>
        <AboutWhyChooseUs />
        <OurMission />
        <GetProOffers />
    </>
  )
}
index.Layout =Layout;
