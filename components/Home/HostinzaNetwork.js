import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import useTranslation from "next-translate/useTranslation";


export default function HostinzaNetwork() {
  const { t } = useTranslation("common");

  return (
    <div className='bg-white w-full h-auto pt-24 pb-20 md:pb-28'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col w-full align-middle'>
                <p className='text-gray-500 text-lg font-normal text-center font-poppins'>{t("World-class Data centers With Premium Connectivity")}</p>
                <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins mt-2'>
                    <span className='text-black'>{t("HOSTINZA")}</span> {t("NETWORK")}
                </h3>
                <div className='hidden lg:block mt-16 w-full'>
                  <div className='w-[85%] h-[450px] mx-auto relative'>
                    <Image src={'/images/map.png'} layout='fill' alt='NetworkMap' />
                    <div className="location-Saudi">
                      <div className="location-button">
                        <div className="location-button-outer"></div>
                        <div className="location-button-inner"></div>
                      </div>
                      <div className="message">{t("Saudi Arabia")}</div>
                    </div>
                    <div className="location-brazil">
                      <div className="location-button">
                        <div className="location-button-outer"></div>
                        <div className="location-button-inner"></div>
                      </div>
                      <div className="message">{t("Brazil")}</div>
                    </div>
                    <div className="location-usa">
                      <div className="location-button">
                        <div className="location-button-outer"></div>
                        <div className="location-button-inner"></div>
                      </div>
                      <div className="message">{t("United States of America")}</div>
                    </div>
                    <div className="location-russia">
                      <div className="location-button">
                        <div className="location-button-outer"></div>
                        <div className="location-button-inner"></div>
                      </div>
                      <div className="message">{t("Russia")}</div>
                    </div>
                  </div>
                </div>

                <div className='w-full flex flex-wrap align-middle justify-evenly gap-5 lg:hidden p-5'>
                  <div className='w-full max-w-[320px] flex flex-col p-5'>
                    <h4 className='text-xl font-bold leading-relaxed text-black my-2'>
                      {t("South Carolina Data Center")}
                    </h4>
                    <p className='text-base text-black my-2'>{t("4708 Ocello Street,")}<br/>{t("California")}<br/>{t("USA")}</p>
                  </div>
                  <div className='w-full max-w-[320px] flex flex-col p-5'>
                    <h4 className='text-xl font-bold leading-relaxed text-black my-2'>
                      {t("South Carolina Data Center")}
                    </h4>
                    <p className='text-base text-black my-2'>{t("4708 Ocello Street,")}<br/>{t("California")}<br/>{t("USA")}</p>
                  </div>
                  <div className='w-full max-w-[320px] flex flex-col p-5'>
                    <h4 className='text-xl font-bold leading-relaxed text-black my-2'>
                      {t("South Carolina Data Center")}
                    </h4>
                    <p className='text-base text-black my-2'>{t("4708 Ocello Street,")}<br/>{t("California")}<br/>{t("USA")}</p>
                  </div>
                  <div className='w-full max-w-[320px] flex flex-col p-5'>
                    <h4 className='text-xl font-bold leading-relaxed text-black my-2'>
                      {t("South Carolina Data Center")}
                    </h4>
                    <p className='text-base text-black my-2'>{t("4708 Ocello Street,")}<br/>{t("California")}<br/>{t("USA")}</p>
                  </div>
                </div>

                <div className='flex flex-col lg:flex-row align-middle justify-center w-full mt-20 md:mt-48'>
                  <div className='w-full lg:w-[55%]'>
                    <div className='w-[65%] h-[500px] relative mx-auto'>
                      <Image src={'/images/info-img-1.png'} layout='fill' alt='NetworkImage1' />
                    </div>
                  </div>
                  <div className='w-full lg:w-[45%] flex flex-col justify-center font-poppins p-10 lg:p-0'>
                    <div className='w-16 h-16 relative'>
                      <Image src={'/images/round.png'} layout='fill' alt='round' />
                      <Image src={'/images/electric-wave.png'} layout='fill' alt='round' />
                    </div>
                    <h4 className='text-3xl text-black font-bold mt-5'>
                      {t("Get best plans for more Power")}
                    </h4>
                    <p className='text-gray-400 text-base font-normal my-5 md:my-10'>
                      {t("Our best-in-class WordPress solution, with additional optimization to make running a WooCommerce online store easy. Our prices are clear and straight forward so you can")}
                    </p>
                    <p className='flex align-middle text-gray-500 text-base mb-5'>
                      <FontAwesomeIcon className='my-auto' color='#1141d3' icon={faCircleCheck} />&nbsp;&nbsp;
                      <span>{t("We")}&apos;{t("ve been supporting WordPress since the beginning.")}</span>
                    </p>
                    <p className='flex align-middle text-gray-500 text-base mb-5'>
                      <FontAwesomeIcon className='my-auto' color='#1141d3' icon={faCircleCheck} />&nbsp;&nbsp;
                      <span>{t("We")}&apos;{t("ve been supporting WordPress since the beginning.")}</span>
                    </p>
                    <p className='flex align-middle text-gray-500 text-base mb-10'>
                      <FontAwesomeIcon className='my-auto' color='#1141d3' icon={faCircleCheck} />&nbsp;&nbsp;
                      <span>{t("We")}&apos;{t("ve been supporting WordPress since the beginning.")}</span>
                    </p>
                    <button className='w-fit text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full'>
                      {t("Get Started")}
                    </button>
                  </div>
                </div>

                <div className='flex flex-col lg:flex-row align-middle justify-center w-full mt-20 md:mt-40'>
                  <div className='w-full lg:w-[45%] flex flex-col justify-center font-poppins p-10 lg:p-0'>
                    <h4 className='text-3xl text-black font-bold mt-5'>
                      {t("Powerful Server and Platform")}
                    </h4>
                    <div className='flex flex-row mt-12'>
                      <div className='w-11 h-10 relative'>
                        <Image src={'/images/gaurd-icon.png'} layout='fill' alt='InfoPoint1' />
                      </div>
                      <div className='flex-1 ml-2'>
                        <h4 className='text-xl text-black font-semibold tracking-wide'>
                          {t("Better Security and faster Server")}
                        </h4>
                        <p className='text-base text-gray-500 font-normal mt-2'>{t("Our best-in-class WordPress solution, with additio nal optiz ation to make running a WooCommerce")}</p>
                      </div>
                    </div>
                    <div className='flex flex-row mt-10'>
                      <div className='w-11 h-10 relative'>
                        <Image src={'/images/cloud-icon.png'} layout='fill' alt='InfoPoint1' />
                      </div>
                      <div className='flex-1 ml-2'>
                        <h4 className='text-xl text-black font-semibold tracking-wide'>
                          {t("Better Security and faster Server")}
                        </h4>
                        <p className='text-base text-gray-500 font-normal mt-2'>{t("Our best-in-class WordPress solution, with additio nal optiz ation to make running a WooCommerce")}</p>
                      </div>
                    </div>
                    <div className='flex flex-row mt-10'>
                      <div className='w-9 h-9 relative'>
                        <Image src={'/images/clock-icon.png'} layout='fill' alt='InfoPoint1' />
                      </div>
                      <div className='flex-1 ml-3'>
                        <h4 className='text-xl text-black font-semibold tracking-wide'>
                        {t("Better Security and faster Server")}
                        </h4>
                        <p className='text-base text-gray-500 font-normal mt-2'>{t("Our best-in-class WordPress solution, with additio nal optiz ation to make running a WooCommerce")}</p>
                      </div>
                    </div>
                    <button className='w-fit text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full mt-10'>
                      {t("Get Started")}
                    </button>
                  </div>
                  <div className='w-full lg:w-[55%]'>
                    <div className='w-[65%] h-[500px] relative mx-auto'>
                      <Image src={'/images/info-img-2.png'} layout='fill' alt='NetworkImage1' />
                    </div>
                  </div>
                </div>

            </div>
        </div>
    </div>
  )
}
