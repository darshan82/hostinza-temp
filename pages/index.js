import dynamic from 'next/dynamic'
import React from "react";
import Layout from "../components/Layout";
import FeaturesWeOffer from "../components/Home/FeaturesWeOffer";
import HomeHeroSection from "../components/Home/HomeHeroSection";
import HomeSlider from "../components/Home/HomeSlider";
import InfoBlogs from "../components/Home/InfoBlogs";
import PricingPlans from "../components/Home/PricingPlans";
// import SelectPlan from "../components/Home/SelectPlan";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import DomainName from '../components/Home/DomainName';
// import ServicesWeOffer from "../components/Home/ServicesWeOffer";
// import OurCustomer from "../components/Home/OurCustomer";
// import ExploreLocations from "../components/Home/ExploreLocations";
import AccelerateYourApp from "../components/Home/AccelerateYourApp";
import Seo from "../components/Common/Seo";
const HostinzaNetwork = dynamic(()=>import("../components/Home/HostinzaNetwork"))
const SearchDomain = dynamic(()=>import("../components/Home/SearchDomain"))

export default function Home() {
 
  return (
    <>
      <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
      <HomeHeroSection />
      <SearchDomain />
      <WhyChooseUs />
      <DomainName />
      <PricingPlans />
      {/* <SelectPlan/> */}
      <FeaturesWeOffer />
      <HostinzaNetwork />
      <HomeSlider />
      <InfoBlogs />
      {/* <ServicesWeOffer/> */}
      {/* <OurCustomer/> */}
      {/* <ExploreLocations/> */}
      <AccelerateYourApp/>
    </>
  );
}
Home.Layout =Layout;
