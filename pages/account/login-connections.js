import React from 'react';
import BoxContainer from '../../components/Account/Loginconnections/BoxContainer';
import SideBar from '../../components/Account/SideBar';
import TopSection from '../../components/Account/TopSection';
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
              <BoxContainer />
            </div>
       </div>       
      </>
    )
}
index.Layout =DashboardLayout;
