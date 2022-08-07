import React from 'react';
import CartHeroSection from '../../components/Cart/CartHeroSection';
import DomainsInCart from '../../components/Cart/DomainsInCart';
import Layout from '../../components/Layout';
import Seo from '../../components/Common/Seo';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <CartHeroSection/>
        <DomainsInCart/>
    </>
  )
}
index.Layout =Layout;
