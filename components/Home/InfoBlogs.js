import React from 'react';
import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";


export default function InfoBlogs() {
  const { t } = useTranslation("common");

  return (
    <div className='bg-white w-full h-auto py-24'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col w-full align-middle'>
                <p className='text-gray-500 text-lg font-normal text-center font-poppins'>{t("Latest Info")}</p>
                <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins'>
                    <span className='text-black'>{t("GET")}</span> {t("LATEST INFO")}
                </h3>
                <div className='flex flex-wrap w-full align-middle justify-center gap-10 mt-10 md:mt-20'>
                    <div className='flex-1 basis-[280px]'>
                        <div className='w-full h-56 relative'>
                            <Image src={'/images/blog-image-1.png'} layout='fill' alt='blogImage'/>
                        </div>
                        <div className='w-[85%] mx-auto -mt-8 bg-white px-[25px] py-10 relative shadow-blog-card-content'>
                            <div className='w-1 h-6 absolute bg-light-blue top-10 left-0'></div>
                            <p className='text-base text-gray-400'>
                                {t("Shared Hosting")}
                            </p>
                            <h3 className='text-2xl text-black font-bold my-3'>
                                {t("Attentive was born in 2015 help sales teams")}
                            </h3>
                            <p className='text-blue-content text-sm'>
                                {t("August 06, 2020")}
                            </p>
                        </div>
                    </div>
                    <div className='flex-1 basis-[280px]'>
                        <div className='w-full h-56 relative'>
                            <Image src={'/images/blog-image-1.png'} layout='fill' alt='blogImage'/>
                        </div>
                        <div className='w-[85%] mx-auto -mt-8 bg-white px-[25px] py-10 relative shadow-blog-card-content'>
                            <div className='w-1 h-6 absolute bg-light-blue top-10 left-0'></div>
                            <p className='text-base text-gray-400'>
                                {t("Shared Hosting")}
                            </p>
                            <h3 className='text-2xl text-black font-bold my-3'>
                                {t("Attentive was born in 2015 help sales teams")}
                            </h3>
                            <p className='text-blue-content text-sm'>
                                {t("August 06, 2020")}
                            </p>
                        </div>
                    </div>
                    <div className='flex-1 basis-[280px]'>
                        <div className='w-full h-56 relative'>
                            <Image src={'/images/blog-image-1.png'} layout='fill' alt='blogImage'/>
                        </div>
                        <div className='w-[85%] mx-auto -mt-8 bg-white px-[25px] py-10 relative shadow-blog-card-content'>
                            <div className='w-1 h-6 absolute bg-light-blue top-10 left-0'></div>
                            <p className='text-base text-gray-400'>
                                {t("Shared Hosting")}
                            </p>
                            <h3 className='text-2xl text-black font-bold my-3'>
                                {t("Attentive was born in 2015 help sales teams")}
                            </h3>
                            <p className='text-blue-content text-sm'>
                                {t("August 06, 2020")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
