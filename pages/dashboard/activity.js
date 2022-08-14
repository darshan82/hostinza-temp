import React from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { parseContextCookie } from "../../utils/parse-cookie";
import Seo from "../../components/Common/Seo";
import Link from "next/link";

export const getServerSideProps = async (context) => {
  const cookies = parseContextCookie(context?.req?.headers?.cookie);
  if (!cookies?.kcToken) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return {
    props: {
      cookies: parseContextCookie(context?.ctx?.req),
    },
  };
};

export default function index() {
  return (
    <>
      <Seo
        title="Hostinza - Home"
        description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."
      />
      <div className="min-h-[60vh]">
        <div className="maincontainer w-full mx-auto">
          <div className="py-12">
            <h2 className="text-3xl font-bold">Activity</h2>
          </div>
          <div className="border-b border-gray-500"></div>
          
          <h2 className="font-bold my-4">Month 2022</h2>
          <div>
            <div className="border-b border-gray-400 py-2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="https://avatars.githubusercontent.com/akramnarejo?s=64"
                    className="w-8 rounded-full border" alt="" />
                    <p className="text-sm">You deployed savings-calculator (b6c8477 in master) to production</p>
                </div>
                <p className="text-sm">6d</p>
            </div>
            <div className="border-b border-gray-400 py-2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="https://avatars.githubusercontent.com/akramnarejo?s=64"
                    className="w-8 rounded-full border" alt="" />
                    <p className="text-sm">You logged in via Github</p>
                </div>
                <p className="text-sm">6d</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
index.Layout = DashboardLayout;
