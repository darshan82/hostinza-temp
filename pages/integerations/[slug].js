import React from 'react';
import { useRouter } from 'next/router';
import SlugTopSection from '../../components/Integerations/SlugTopSection';
import ImagesContainer from '../../components/Integerations/ImagesContainer';
import DetailsContainer from '../../components/Integerations/DetailsContainer';
import GetStartedBox from '../../components/Integerations/GetStartedBox';
import Layout from '../../components/Layout';

export default function Index() {

    const router = useRouter();
    console.log(router);

    return (
        <Layout>
        <div className="minH-[100vh] bg-[#FAFAFA]">
            <SlugTopSection />
            <div className='xs:overflow-x-auto sm:overflow-x-auto md:w-[95%] max-w-[1220px] mx-auto mt-12'>
                <ImagesContainer />
                <DetailsContainer />
                <GetStartedBox />
            </div>
        </div>
        </Layout>
    )
}