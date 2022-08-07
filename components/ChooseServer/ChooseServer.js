import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCartShopping, faCheck, faCircleInfo, faDollar, faFile, faPercent, faTrash } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";


export default function ChooseServer() {
    const { t } = useTranslation("common");


    const [showDomainReg, setShowDomainReg] = useState(true);
    const [showHostingPlan, setShowHostingPlan] = useState(true);
    const [showWebsite, setShowWebsite] = useState(true);
    const [showOnlineShop, setShowOnlineShop] = useState(true);

  return (
    <div className='bg-white w-full h-auto py-20'>
        <div className='container w-full items-center mx-auto'>
            <p className='text-gray-500 text-lg font-normal text-start font-poppins'>{t("Choose a service for")}</p>
            <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-start font-poppins mt-2'>
                {t("myDomain.com")}
            </h3>
            <div className='flex flex-wrap justify-center align-top gap-5'>
                <div className='w-full md:w-[77%] flex flex-col align-middle order-2 md:order-1'>

                    {/* Domain Registration */}
                    <div className='w-full flex flex-col align-top mt-20'>
                        <div className='flex flex-row align-middle justify-start gap-3'>
                            <span className='px-3 py-1 my-auto border border-black-100 text-base h-fit'>{t("www")}</span>
                            <button className='px-3 py-1 my-auto border border-black-100 text-base h-fit font-bold' onClick={() => setShowDomainReg(!showDomainReg)}>
                                { showDomainReg ? '-' : '+'}
                            </button>
                            <p className='my-auto text-lg md:text-xl font-medium text-black uppercase'>{t("Domain Registration")}</p>
                        </div>
                        <fieldset id='checkDomainReg' className={showDomainReg ? 'block' : 'hidden'}>
                            {/* Domain Card 1 */}
                            <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-5">
                                    <input className='w-5 h-5 my-auto' type={'radio'} name='checkDomainReg' />
                                    <div className='flex flex-col align-top my-auto'>
                                        <p className='text-xl md:text-2xl font-normal text-black'>{t("Domain")}</p>
                                        <p className='text-sm font-normal text-gray-500'>{t("Register the right domain and protect your identity online.")}</p> <br/>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-3 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DOMAIN")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("SWITE WEBSITE")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DNS/REDIRECT")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-auto flex flex-col align-middle md:align-bottom h-auto w-full md:w-auto mt-5 md:mt-0'>
                                    <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("$450.50")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                                    <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                                    <p className='w-fit ml-auto mr-auto md:mr-0 px-3 py-1 mt-2 rounded-full text-sm font-normal text-white bg-gradient-to-r from-green-600 to-green-300'>{t("Special Offer")}</p>
                                </div>
                            </div>
                            {/* Domain Card 2 */}
                            <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-5">
                                    <input className='w-5 h-5 my-auto' type={'radio'} name='checkDomainReg' />
                                    <div className='flex flex-col align-top my-auto'>
                                        <p className='text-xl md:text-2xl font-normal text-black'>{t("Domain With Email")}</p>
                                        <p className='text-sm font-normal text-gray-500 w-full md:w-[75%]'>{t("Choose and protect your domain name. Professional and distinctive email.")}</p>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-3 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DOMAIN")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("SWITE WEBSITE")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DNS/REDIRECT")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("WEBMAIL")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-auto flex flex-col align-middle md:align-bottom h-auto w-full md:w-auto mt-5 md:mt-0'>
                                    <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("$450.50")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                                    <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    {/* Hosting Plans */}
                    <div className='w-full flex flex-col align-top mt-20'>
                        <div className='flex flex-row align-middle justify-start gap-3'>
                            <span className='px-3 py-1 my-auto border border-black-100 text-base h-fit'><FontAwesomeIcon icon={faDollar} /></span>
                            <button className='px-3 py-1 my-auto border border-black-100 text-base h-fit font-bold' onClick={() => setShowHostingPlan(!showHostingPlan)}>
                                { showHostingPlan ? '-' : '+'}
                            </button>
                            <p className='my-auto text-lg md:text-xl font-medium text-black uppercase'>{t("Hosting Plans")}</p>
                        </div>
                        <fieldset id='checkHostingPlan' className={showHostingPlan ? 'block' : 'hidden'}>
                            {/* Hosting Plan Card 1 */}
                            <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-5">
                                    <input className='w-5 h-5 my-auto' type={'radio'} name='checkHostingPlan' />
                                    <div className='flex flex-col align-top my-auto'>
                                        <p className='text-xl md:text-2xl font-normal text-black'>{t("Basic Hosting")} <span className='text-xs md:text-sm px-2 py-1 inline-block w-fit h-fit bg-sky-300 rounded-md'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</span></p>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-2 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("Linux")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("Windows")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("Linux/Windows")}</span>
                                        </div>
                                        <p className='text-sm font-normal text-gray-500 mt-2'>{t("Register the right domain and protect your identity online.")}</p>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-2 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DOMAIN")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("SWITE WEBSITE")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DNS/REDIRECT")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-auto flex flex-col align-middle md:align-bottom h-fit w-full md:w-auto'>
                                    <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("$450.50")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                                    <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                                    <p className='w-fit ml-auto mr-auto md:mr-0 px-3 py-1 mt-2 rounded-full text-sm font-normal text-white bg-gradient-to-r from-green-600 to-green-300'>{t("Special Offer")}</p>
                                </div>
                            </div>
                            {/* Hosting Plan Card 2 */}
                            <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-5">
                                    <input className='w-5 h-5 my-auto' type={'radio'} name='checkHostingPlan' />
                                    <div className='flex flex-col align-top my-auto'>
                                        <p className='text-xl md:text-2xl font-normal text-black'>{t("Easy Hosting")} <span className='text-xs md:text-sm px-2 py-1 inline-block w-fit h-fit bg-sky-300 rounded-md'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</span></p>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-2 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("Linux")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("Windows")}</span>
                                        </div>
                                        <p className='text-sm font-normal text-gray-500 mt-2'>{t("Start creating your website now, with Database and")}<br/> {t("unlimited email accounts.")}</p>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-2 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DOMAIN")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("SWITE WEBSITE")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DNS/REDIRECT")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-auto flex flex-col align-middle md:align-bottom h-fit w-full md:w-auto'>
                                    <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("$450.50")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                                    <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                                </div>
                            </div>
                            {/* Hosting Plan Card 3 */}
                            <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className="w-full md:w-[65%] flex flex-col md:flex-row gap-2 md:gap-5">
                                    <input className='w-5 h-5 my-auto' type={'radio'} name='checkHostingPlan' />
                                    <div className='flex flex-col align-top my-auto'>
                                        <p className='text-xl md:text-2xl font-normal text-black'>{t("Advanced Hosting")} <span className='text-xs md:text-sm inline-block w-fit px-2 py-1 h-fit bg-sky-300 rounded-md'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</span></p>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-2 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("Linux")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("Windows")}</span>
                                        </div>
                                        <p className='text-sm font-normal text-gray-500 mt-2'>{t("All the benefits of Easy Hosting with more space for")}<br/>{t("your professional email and 5 PEC domain email accounts.")}</p>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-2 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DOMAIN")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("SWITE WEBSITE")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DNS/REDIRECT")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-auto flex flex-col align-middle md:align-bottom h-fit w-full md:w-auto'>
                                    <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("$450.50")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                                    <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                                    <p className='w-fit ml-auto mr-auto md:mr-0 px-3 py-1 mt-2 rounded-full text-sm font-normal text-white bg-gradient-to-r from-green-600 to-green-300'>{t("Special Offer")}</p>
                                </div>
                            </div>
                            {/* Hosting Plan Card 4 */}
                            <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className="w-full md:w-[65%] flex flex-col md:flex-row gap-2 md:gap-5">
                                    <input className='w-5 h-5 my-auto' type={'radio'} name='checkHostingPlan' />
                                    <div className='flex flex-col align-top my-auto'>
                                        <p className='text-xl md:text-2xl font-normal text-black'>{t("Professional Hosting")} <span className='text-xs md:text-sm px-2 py-1 inline-block w-fit h-fit bg-sky-300 rounded-md'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</span></p>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-2 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("Linux")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("Windows")}</span>
                                        </div>
                                        <p className='text-sm font-normal text-gray-500 mt-2'>{t("The professional web space, comprehensive solution")}<br/>{t("with 10 PEC email accounts.")}</p>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-2 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DOMAIN")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("SWITE WEBSITE")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DNS/REDIRECT")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-auto flex flex-col align-middle md:align-bottom h-fit w-full md:w-auto'>
                                    <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("VAT/1st year")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                                    <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    {/* Website */}
                    <div className='w-full flex flex-col align-top mt-20'>
                        <div className='flex flex-row align-middle justify-start gap-3'>
                            <span className='px-3 py-1 my-auto border border-black-100 text-base h-fit'><FontAwesomeIcon icon={faFile} /></span>
                            <button className='px-3 py-1 my-auto border border-black-100 text-base h-fit font-bold' onClick={() => setShowWebsite(!showWebsite)}>
                                { showWebsite ? '-' : '+'}
                            </button>
                            <p className='my-auto text-lg md:text-xl font-medium text-black uppercase'>{t("Website")}</p>
                        </div>
                        <fieldset id='checkWebsite' className={showWebsite ? 'block' : 'hidden'}>
                            {/* Website Card 1 */}
                            <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className="w-full md:w-[65%] flex flex-col md:flex-row gap-2 md:gap-5">
                                    <input className='w-5 h-5 my-auto' type={'radio'} name='checkWebsite' />
                                    <div className='flex flex-col align-top my-auto'>
                                        <p className='text-xl md:text-2xl font-normal text-black'>{t("Supersite Easy")} <span className='text-sm px-2 py-1 inline-block w-fit h-fit bg-sky-300 rounded-md'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</span></p>
                                        <p className='text-sm font-normal text-gray-500 mt-2'>{t("Choose a theme, enter the content and create your website directly from your phone!")}</p>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-2 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DOMAIN")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("SWITE WEBSITE")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DNS/REDIRECT")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-auto flex flex-col align-middle md:align-bottom h-fit w-full md:w-auto'>
                                    <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("$450.50")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                                    <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For rene $27.85 + VATwal")}</p>
                                    <p className='w-fit ml-auto mr-auto md:mr-0 px-3 py-1 mt-2 rounded-full text-sm font-normal text-white bg-gradient-to-r from-green-600 to-green-300'>{t("Special Offer")}</p>
                                </div>
                            </div>
                            {/* Hosting Plan Card 2 */}
                            <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-5">
                                    <input className='w-5 h-5 my-auto' type={'radio'} name='checkWebsite' />
                                    <div className='flex flex-col align-top my-auto'>
                                        <p className='text-xl md:text-2xl font-normal text-black'>{t("Wordpress Hosting")} <span className='text-xs md:text-sm inline-block w-fit px-2 py-1 h-fit bg-sky-300 rounded-md'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</span></p>
                                        <p className='text-sm font-normal text-gray-500 mt-2'>{t("Wordpress pre-installed to create and manage your site straight away.")}</p>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-2 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DOMAIN")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("SWITE WEBSITE")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DNS/REDIRECT")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-auto flex flex-col align-middle md:align-bottom h-fit w-full md:w-auto'>
                                    <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("$450.50")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                                    <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    {/* Online Shop */}
                    <div className='w-full flex flex-col align-top mt-20'>
                        <div className='flex flex-row align-middle justify-start gap-3'>
                            <span className='px-3 py-1 my-auto border border-black-100 text-base h-fit'><FontAwesomeIcon icon={faCartShopping} /></span>
                            <button className='px-3 py-1 my-auto border border-black-100 text-base h-fit font-bold' onClick={() => setShowOnlineShop(!showOnlineShop)}>
                                { showOnlineShop ? '-' : '+'}
                            </button>
                            <p className='my-auto text-lg md:text-xl font-medium text-black uppercase'>{t("Online Shop")}</p>
                        </div>
                        <fieldset id='checkOnlineShop' className={showOnlineShop ? 'block' : 'hidden'}>
                            {/* Website Card 1 */}
                            <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className="w-full md:w-[65%] flex flex-col md:flex-row gap-2 md:gap-5">
                                    <input className='w-5 h-5 my-auto' type={'radio'} name='checkOnlineShop' />
                                    <div className='flex flex-col align-top my-auto'>
                                        <p className='text-xl md:text-2xl font-normal text-black'>{t("Supersite Professional")} <span className='text-sm px-2 py-1 inline-block w-fit h-fit bg-sky-300 rounded-md'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</span></p>
                                        <p className='text-sm font-normal text-gray-500 mt-2'>{t("The most comprehensive version of the SuperSite with multilingual website and e-commerce form.")}</p>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-2 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DOMAIN")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("SWITE WEBSITE")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DNS/REDIRECT")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-auto flex flex-col align-middle md:align-bottom h-fit w-full md:w-auto'>
                                    <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("$450.50")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                                    <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                                    <p className='w-fit ml-auto mr-auto md:mr-0 px-3 py-1 mt-2 rounded-full text-sm font-normal text-white bg-gradient-to-r from-green-600 to-green-300'>{t("Special Offer")}</p>
                                </div>
                            </div>
                            {/* Hosting Plan Card 2 */}
                            <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray mt-5'>
                                <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-5">
                                    <input className='w-5 h-5 my-auto' type={'radio'} name='checkOnlineShop' />
                                    <div className='flex flex-col align-top my-auto'>
                                        <p className='text-xl md:text-2xl font-normal text-black'>{t("Managed Woocommerce Hosting")} <span className='text-sm px-2 py-1 inline-block w-fit h-fit bg-sky-300 rounded-md'><FontAwesomeIcon icon={faCircleInfo}/> {t("Info")}</span></p>
                                        <p className='text-sm font-normal text-gray-500 mt-2'>{t("Dedicated platform, optimized for WordPress and WooCommerce for managing online shops of any size.")}</p>
                                        <div className='flex flex-wrap align-middle gap-2 w-fit mt-2 text-xs md:text-sm text-black'>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DOMAIN")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("SWITE WEBSITE")}</span>
                                            <span className='px-2 py-1 bg-gray-300 rounded-md'>{t("DNS/REDIRECT")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-auto flex flex-col align-middle md:align-bottom h-fit w-full md:w-auto'>
                                    <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("$450.50")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                                    <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <div className='w-full my-5'>
                        <Link href="/search">
                            <p className='text-blue-content text-base font-bold cursor-pointer'>{t("Go back to domain Search")}</p>
                        </Link>
                    </div>

                    <div className='mt-20 w-full border border-black-100 p-5 rounded-xl shadow-contact-card'>
                        <div className='w-full flex flex-row justify-between align-middle'>
                            <span className='text-lg md:text-xl font-semibold text-black'>
                                <FontAwesomeIcon className='text-sm md:text-base' color='green' icon={faCheck} /> {t(".myDomain.com")}
                            </span>
                            <span className='text-base md:text-lg font-semibold text-black'>{t("$119.50")}</span>
                        </div>
                        <span className='text-xs md:text-sm font-normal ml-0 md:ml-5'>{t("Managed Woocommerce Hosting")}</span>
                        <div className='w-full flex flex-row justify-between align-middle my-3'>
                            <span className='text-base md:text-xl font-semibold text-gray-300 ml-0 md:ml-5'>{t(".myDomain.io")}</span>
                            <span className='text-base md:text-lg font-semibold text-gray-300'>{t("$50.25")} &nbsp;<FontAwesomeIcon className='cursor-pointer text-sm md:text-lg' icon={faTrash} /></span>
                        </div>
                        <div className='w-full flex flex-row justify-between align-middle'>
                            <span className='text-base md:text-xl font-semibold text-gray-300 ml-0 md:ml-5'>{t(".myDomain.store")}</span>
                            <span className='text-base md:text-lg font-semibold text-gray-300'>{t("$10.75")} &nbsp;<FontAwesomeIcon className='cursor-pointer text-sm md:text-lg' icon={faTrash} /></span>
                        </div>
                    </div>

                    <div className='mt-10 w-full border border-black-100 p-5 rounded-xl shadow-contact-card'>
                        <div className='w-full flex flex-row justify-between align-middle'>
                            <span className='text-base md:text-xl font-normal text-black'>{t("Total VAT excluded")}</span>
                            <span className='text-base md:text-lg font-normal text-black'>{t("$100.00")}</span>
                        </div>
                        <div className='w-full flex flex-row justify-between align-middle my-2'>
                            <span className='text-base md:text-xl font-normal text-gray-300'>{t("VAT 22%")}</span>
                            <span className='text-base md:text-lg font-normal text-gray-300'>{t("$22.00")}</span>
                        </div>
                        <hr className='h-[1px] border-none bg-gray-300 my-3'></hr>
                        <div className='w-full flex flex-row justify-between align-middle'>
                            <span className='text-base md:text-xl font-normal text-gray-300'>{t("Total VAT exluded:")}</span>
                            <span className='text-base md:text-lg font-normal text-gray-300'>{t("$122.00")}</span>
                        </div>
                    </div>
                    
                </div>
                <div className='w-full md:w-[18%] flex flex-col align-middle order-1 md:order-2'>
                    <div className='w-full mx-auto p-5 border border-black-100 rounded-xl mt-12 md:mt-[135px] shadow-contact-card '>
                        <p className='text-xs'>{t("All services include a domain even when you renew.")}</p>
                        <hr className='h-[1px] border-none bg-gray-300 my-2'></hr>
                        <div className='w-full flex flex-row justify-between align-middle'>
                            <span className='text-xs font-medium text-black w-[65%]'>{t(".myDomain.com")}</span>
                            <span className='text-xs font-medium text-black'>{t("$119.50")}</span>
                        </div>
                        <span className='text-[10px] font-normal block mt-1'>{t("Managed Woocommerce Hosting")}</span>
                        <div className='w-full flex justify-between align-middle mt-4'>
                            <FontAwesomeIcon className='my-auto mr-2' icon={faArrowDown} />
                            <p className='text-[10px]'>
                                {t("Scroll to the bottom of the page to continue with your order")}
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex justify-between align-middle mx-auto p-5 border border-black-100 rounded-xl mt-5 shadow-contact-card '>
                        <FontAwesomeIcon className='my-auto mr-2' icon={faPercent} />
                        <p className='text-[10px]'>
                            <b className='text-[10px]'>{t("Do you have a discount code?")}</b>
                            <p>{t("Great! Keep it ready to enter in the payment page to get your discount!")}</p>
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}
