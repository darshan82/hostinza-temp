import React from 'react';
import VDSClients from '../../components/VDSHosting/VDSClients';
import VDSHeroSection from '../../components/VDSHosting/VDSHeroSection';
import VDSPlans from '../../components/VDSHosting/VDSPlans';
import FeaturesOffered from '../../components/VPSHosting/FeaturesOffered';
import Layout from '../../components/Layout';
import Seo from '../../components/Common/Seo';

export default function index() {
  return (
    <>
        <Seo title="vbs-hosting - Hostinza" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <VDSHeroSection/>
        <VDSPlans/>
        <FeaturesOffered/>
        <VDSClients/>
    </>
  )
}
index.Layout =Layout;
