import React from 'react';
import SupportGeneralQuestions from '../../components/Support/SupportGeneralQuestions';
import SupportHeroSection from '../../components/Support/SupportHeroSection';
import ContactUsForm from '../../components/Contact/ContactUsForm';
import TokensTable from '../../components/Support/TokensTable';
import Layout from '../../components/Layout';
import Seo from '../../components/Common/Seo';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Support" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>

        <SupportHeroSection/>
        <SupportGeneralQuestions/>
        <TokensTable/>
    </>
  )
}
index.Layout =Layout;
