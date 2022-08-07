import React from 'react';
import Login from '../../components/Login/Login';
import Layout from '../../components/Layout';
import Seo from '../../components/Common/Seo';
export default function index() {
  return (
    <>
      <Seo title="Hostinza - Login" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
      <Login/>
    </>
  )
}
index.Layout =Layout;