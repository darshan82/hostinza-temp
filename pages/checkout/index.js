import React from 'react';
import CheckoutHeroSection from '../../components/Checkout/CheckoutHeroSection';
import CheckoutSteps from '../../components/Checkout/CheckoutSteps';
import Layout from '../../components/Layout';
import Seo from '../../components/Common/Seo';

export default function index() {

  return (
      <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>

        {/* <CheckoutHeroSection/> */}
        <CheckoutSteps/>
      </>
  )
}
index.Layout =Layout;