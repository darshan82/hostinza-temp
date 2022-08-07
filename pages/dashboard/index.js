import dynamic from 'next/dynamic'
import CardContainer from "../../components/Dashboard/CardContainer"
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import {parseContextCookie} from '../../utils/parse-cookie'
import Seo from '../../components/Common/Seo';
const TopSection = dynamic(()=>import("../../components/Dashboard/TopSection"))

export const getServerSideProps= async (context) => {
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

export default function Index(){

    return(
      <>
        <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
        <div className="min-h-[80vh]">
         <TopSection />
          <CardContainer />
        </div>
      </>
    )
}

Index.Layout =DashboardLayout;