import React from 'react';
import ContactHeroSection from '../../components/Contact/ContactHeroSection';
import ContactUsForm from '../../components/Contact/ContactUsForm';
import FindUs from '../../components/Contact/FindUs';
import Layout from '../../components/Layout';
import Seo from '../../components/Common/Seo';

export default function index() {
  return (
    <>  
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <ContactHeroSection/>
        <FindUs/>
        <ContactUsForm/>
    </>
  )
}
index.Layout =Layout;
