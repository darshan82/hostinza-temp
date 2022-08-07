import React from 'react'
import DSClients from '../../components/DSHosting/DSClients'
import DSHeroSection from '../../components/DSHosting/DSHeroSection'
import DSPlans from '../../components/DSHosting/DSPlans'
import FeaturesOffered from '../../components/VPSHosting/FeaturesOffered'
import Layout from '../../components/Layout';
import Seo from '../../components/Common/Seo';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <DSHeroSection/>
        <DSPlans/>
        <FeaturesOffered/>
        <DSClients/>
    </>
  )
}
index.Layout =Layout;
