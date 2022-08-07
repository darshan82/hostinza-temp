import React, { useState, useEffect, useContext } from "react";
import Footer from "../Footer";
import DashboardHeader from "./DashboardHeader";
import { useKeycloak } from "@react-keycloak/ssr";
import AuthContext from "../../utils/auth-context";
import Spinner from "../Common/Preloader";
export default function DashboardLayout({ children }) {
  const { setUser,user } = useContext(AuthContext);

  const { keycloak } = useKeycloak();
  useEffect(() => {
    if (keycloak) {
      keycloak.loadUserProfile().then(() => {
        setUser(keycloak);
      })
    }
  });

  return (
    <>
      <Spinner loading={!user?.profile}/>
      <div className="bg-[#FAFAFA]">
        <DashboardHeader />
        {children}
        <Footer />
      </div>
    </>
  );
}
