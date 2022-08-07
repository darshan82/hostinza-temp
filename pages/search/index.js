import React from 'react'
import SearchHeroSection from '../../components/Search/SearchHeroSection';
import SearchResults from '../../components/Search/SearchResults';
import Layout from '../../components/Layout';
import Seo from '../../components/Common/Seo';

export default function index() {
  return (
    <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <SearchHeroSection/>
        <SearchResults/>
    </>
  )
}
index.Layout =Layout;
