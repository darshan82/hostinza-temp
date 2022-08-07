import React from 'react';
import FeaturesOffered from '../../components/VPSHosting/FeaturesOffered';
import VPSClients from '../../components/VPSHosting/VPSClients';
import VPSHeroSection from '../../components/VPSHosting/VPSHeroSection';
import VPSPlans from '../../components/VPSHosting/VPSPlans';
import Layout from '../../components/Layout';
import Seo from '../../components/Common/Seo';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - vps-hosting" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <VPSHeroSection/>
        <VPSPlans/>
        <FeaturesOffered/>
        <VPSClients/>
    </>
  )
}
index.Layout =Layout;
