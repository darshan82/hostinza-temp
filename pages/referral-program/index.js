import React from 'react';
import RefferalHeroSection from '../../components/RefferalProgram/RefferalHeroSection';
import WhoWeAre from '../../components/AboutUs/WhoWeAre';
import HowAffiliateWorks from '../../components/RefferalProgram/HowAffiliateWorks';
import StepGuide from '../../components/RefferalProgram/StepGuide';
import GenerateReferralLink from '../../components/RefferalProgram/GenerateReferralLink';
import Layout from '../../components/Layout';
import Seo from '../../components/Common/Seo';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <RefferalHeroSection/>
        <WhoWeAre/>
        <HowAffiliateWorks/>
        <StepGuide/>
        <GenerateReferralLink/>
    </>
  )
}
index.Layout =Layout;
