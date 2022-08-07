import React from 'react';
import SideBar from '../../components/Account/SideBar';
import TopSection from '../../components/Account/TopSection';
import PlanBox from '../../components/Account/billing/PlanBox';
import PaymentBox from '../../components/Account/billing/PaymentBox';
import RemoteCachingBox from '../../components/Account/billing/RemoteCachingBox';
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import Seo from '../../components/Common/Seo';

export default function index(){
    return(
      <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
       <div className="min-h-[60vh]">
         <TopSection />
         <div className="maincontainer mx-auto mt-3 flex align-middle justify-between  gap-3">
              <SideBar />
              <div className='md:w-[75%] lg:w-[75%] xl:[75%] w-[75%] sm:w-[90%] xs:w-[95%] xs:mx-auto'>
              <PlanBox />
              <PaymentBox />
              <RemoteCachingBox />
              </div>
            </div>
       </div>       
      </>
    )
}
index.Layout =DashboardLayout;