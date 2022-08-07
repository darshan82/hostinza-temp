import React from 'react'
import CardContainer from '../../components/Integerations/CardContainer'
import Sidebar from '../../components/Integerations/Sidebar'
import TopSection from '../../components/Integerations/TopSection'
import Layout from '../../components/Layout';
import Seo from '../../components/Common/Seo';

export default function index() {
  return (
    <>
      <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
      <div className="minH-[100vh] bg-[#FAFAFA]">
            <TopSection />
          <div className='xs:overflow-x-auto sm:overflow-x-auto md:w-[95%] max-w-[1220px] mx-auto mt-12 flex align-middle justify-between   gap-3 '>
            <Sidebar />
            <CardContainer />
          </div>
      </div>
    </>
  )
}
index.Layout =Layout;
