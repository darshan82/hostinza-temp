import React from 'react'
import FaqHeroSection from '../../components/FAQ/FaqHeroSection'
import FrequentlyAskedQuestion from '../../components/FAQ/FrequentlyAskedQuestion'
import HostingQuestions from '../../components/FAQ/HostingQuestions'
import Layout from '../../components/Layout';
import Seo from '../../components/Common/Seo';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <FaqHeroSection/>
        <FrequentlyAskedQuestion/>
        <HostingQuestions/>
    </>
  )
}
index.Layout =Layout;
