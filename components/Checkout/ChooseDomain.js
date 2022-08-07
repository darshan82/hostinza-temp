import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";

export default function ChooseDomain() {
    const { t } = useTranslation("common");

  return (
    <div className='bg-white w-full h-auto pt-24 pb-20 md:pb-28'>
        <div className='container w-full items-center mx-auto'>

            <div className='w-full p-5 flex flex-col align-middle mt-10 rounded-xl border-2 border-gray-400'>
                <h3 className='text-3xl font-semibold text-black'>{t("myDomain.com")}</h3>
                <p className='text-sm text-black font-normal mt-1'><span className='text-red-700 font-semibold'>{t("Not available")}</span>, {t("because it has already been registered by someone else.")}</p>
                <div className='w-full my-5 flex flex-wrap justify-between align-middle p-5 rounded-xl border border-gray-400'>
                    <div className='flex w-fit'>
                        <div className='w-12 h-12 relative'>
                            <Image src={'/images/domainTransfer.png'} layout='fill' alt='DomainTransfer' />
                        </div>
                        <div className='ml-3 flex flex-col justify-center'>
                            <p className='text-sm text-black font-semibold'>{t("Do you already own it?")}</p>
                            <p className='text-xs text-black font-normal m-0'>{t("If the domain already belongs to you, you can transfer it to hostinza.com?")}</p>
                        </div>
                    </div>
                    <button className='w-fit h-fit my-auto text-sm md:text-base text-white py-2 px-6 bg-light-blue rounded-full'>
                        Transfer
                    </button>
                </div>
                <div className='w-full flex flex-wrap justify-between align-middle p-5 rounded-xl border border-gray-400'>
                    <div className='flex w-full md:w-[80%]'>
                        <div className='w-12 h-12 block relative'>
                            <Image src={'/images/userDomain.png'} layout='fill' alt='DomainTransfer' />
                        </div>
                        <div className='ml-3 flex flex-col justify-center w-[95%]'>
                            <p className='text-sm text-black font-semibold'>{t("Domain Recovery Service - Brokerage")}</p>
                            <p className='text-xs text-black font-normal m-0'>{t("If the domain that you wanted is already in use and is of particular importance to you and your online activity, we can still try to buy it. We will get in touch with the current owner on your behalf and negotiate the best possible sale price")}</p>
                        </div>
                    </div>
                    <button className='w-fit h-fit my-auto text-sm md:text-base text-white py-2 px-6 bg-light-blue rounded-full'>
                        {t("Enquire")}
                    </button>
                </div>
            </div>

            <p className='mt-10 text-sm font-normal'>
                {t("Protect your brand and improve your visibility by registering other TLDs:")}
            </p>

            <div className='flex flex-col align-middle w-full gap-5 md:gap-10 mt-20'>
                {/* Domain Small Card 1 */}
                <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray'>
                    <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-5">
                        <input className='w-5 h-5 my-auto' type={'checkbox'} />
                        <div className='flex flex-col align-top my-auto'>
                            <p className='text-lg font-semibold text-black'>{t("myDomain.com")}</p>
                        </div>
                    </div>
                    <div className='my-auto flex flex-wrap align-middle md:align-bottom h-auto w-full md:w-auto mt-5 md:mt-0'>
                        <p className='w-fit ml-auto mr-auto my-auto px-3 py-1 h-fit rounded-full text-sm font-normal text-white bg-gradient-to-r from-green-600 to-green-300'>{t("Premium")}</p>
                        <p className='text-lg md:text-xl font-bold text-black my-auto ml-2 mr-auto md:mr-0 flex align-middle'>{t("$450.50")} <span className='text-xs ml-1 my-auto font-normal'>{t("+VAT/1st year")}</span></p>
                        <p className='text-xs font-normal my-auto ml-2 mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                    </div>
                </div>
                {/* Domain Small Card 2 */}
                <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray'>
                    <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-5">
                        <input className='w-5 h-5 my-auto' type={'checkbox'} />
                        <div className='flex flex-col align-top my-auto'>
                            <p className='text-lg font-semibold text-black'>{t("myDomain.com")}</p>
                        </div>
                    </div>
                    <div className='my-auto flex flex-wrap align-middle md:align-bottom h-auto w-full md:w-auto mt-5 md:mt-0'>
                        <p className='w-fit ml-auto mr-auto my-auto px-3 py-1 h-fit rounded-full text-sm font-normal text-white bg-gradient-to-r from-green-600 to-green-300'>{t("Premium")}</p>
                        <p className='text-lg md:text-xl font-bold text-black my-auto ml-2 mr-auto md:mr-0 flex align-middle'>{t("$450.50")} <span className='text-xs ml-1 my-auto font-normal'>{t("+VAT/1st year")}</span></p>
                        <p className='text-xs font-normal my-auto ml-2 mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                    </div>
                </div>
                {/* Domain Small Card 3 */}
                <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray'>
                    <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-5">
                        <input className='w-5 h-5 my-auto' type={'checkbox'} />
                        <div className='flex flex-col align-top my-auto'>
                            <p className='text-lg font-semibold text-black'>{t("myDomain.com")}</p>
                        </div>
                    </div>
                    <div className='my-auto flex flex-wrap align-middle md:align-bottom h-auto w-full md:w-auto mt-5 md:mt-0'>
                        <p className='w-fit ml-auto mr-auto my-auto px-3 py-1 h-fit rounded-full text-sm font-normal text-white bg-gradient-to-r from-green-600 to-green-300'>{t("Premium")}</p>
                        <p className='text-lg md:text-xl font-bold text-black my-auto ml-2 mr-auto md:mr-0 flex align-middle'>{t("$450.50")} <span className='text-xs ml-1 my-auto font-normal'>{t("+VAT/1st year")}</span></p>
                        <p className='text-xs font-normal my-auto ml-2 mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                    </div>
                </div>
            </div>

            
            <div className='w-full md:w-[70%] mx-auto bg-white rounded-full border-[1px] border-gray-300 h-[70px] flex align-middle p-2 searchDomainContainer mt-5 md:mt-10'>
                <input className='outline-none bg-transparent border-none flex-1 pl-2 md:pl-5 pr-2 w-[60%] md:[70%]' placeholder='myDomain.com' />
                <Link href="/search">
                    <button className='text-base text-white px-3 md:px-10 bg-light-blue rounded-full'>
                        {t("Search")}
                    </button>
                </Link>
            </div>

            <div className='flex flex-wrap align-middle justify-end gap-5 mt-10'>
                <button className='text-sm md:text-lg text-light-blue py-3 px-5 md:px-10 border border-light-blue rounded-full'>
                    {t("3 Selected Domains")}
                </button>
                <button className='text-sm md:text-lg text-white py-3 px-5 md:px-10 bg-light-blue rounded-full'>
                    {t("Proceed")}
                </button>
            </div>
            
            <div className='flex flex-col align-middle w-full gap-5 md:gap-10 mt-20'>
                {/* Domain Card 1 */}
                <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray'>
                    <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-10">
                        <input className='w-5 h-5 my-auto' type={'checkbox'} />
                        <div className='flex flex-col align-top my-auto'>
                            <p className='text-2xl font-normal text-black'>{t("myDomain.com")}</p>
                            <p className='text-base font-normal text-green-500'>{t("Available!")}</p>
                        </div>
                    </div>
                    <p className='w-fit ml-auto mr-auto my-auto px-3 py-1 h-fit rounded-full text-sm font-normal text-white bg-gradient-to-r from-orange-600 to-orange-300'>{t("Premium")}</p>
                    <div className='my-auto flex flex-col align-middle md:align-bottom h-auto w-full md:w-auto mt-5 md:mt-0'>
                        <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("$450.50")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                        <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                    </div>
                </div>

                {/* Domain Card 2 */}
                <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray'>
                    <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-10">
                        <input className='w-5 h-5 my-auto' type={'checkbox'} />
                        <div className='flex flex-col align-top my-auto'>
                            <p className='text-2xl font-normal text-black'>{t("myDomain.com")}</p>
                            <p className='text-base font-normal text-green-500'>{t("Available!")}</p>
                        </div>
                    </div>
                    <p className='w-fit ml-auto mr-auto my-auto px-3 py-1 h-fit rounded-full text-sm font-normal text-white bg-gradient-to-r from-orange-600 to-orange-300'>{t("Premium")}</p>
                    <div className='my-auto flex flex-col align-middle md:align-bottom h-auto w-full md:w-auto mt-5 md:mt-0'>
                        <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("$450.50")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                        <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                    </div>
                </div>

                {/* Domain Card 3 */}
                <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray'>
                    <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-10">
                        <input className='w-5 h-5 my-auto' type={'checkbox'} />
                        <div className='flex flex-col align-top my-auto'>
                            <p className='text-2xl font-normal text-black'>{t("myDomain.com")}</p>
                            <p className='text-base font-normal text-green-500'>{t("Available!")}</p>
                        </div>
                    </div>
                    <p className='w-fit ml-auto mr-auto my-auto px-3 py-1 h-fit rounded-full text-sm font-normal text-white bg-gradient-to-r from-orange-600 to-orange-300'>{t("Premium")}</p>
                    <div className='my-auto flex flex-col align-middle md:align-bottom h-auto w-full md:w-auto mt-5 md:mt-0'>
                        <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("$450.50")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                        <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                    </div>
                </div>

                {/* Domain Card 4 */}
                <div className='w-full flex flex-wrap align-middle justify-between p-5 rounded-xl border bg-light-gray'>
                    <div className="w-full md:w-fit flex flex-col md:flex-row gap-2 md:gap-10">
                        <input className='w-5 h-5 my-auto' type={'checkbox'} />
                        <div className='flex flex-col align-top my-auto'>
                            <p className='text-2xl font-normal text-black'>{t("myDomain.com")}</p>
                            <p className='text-base font-normal text-green-500'>{t("Available!")}</p>
                        </div>
                    </div>
                    <p className='w-fit ml-auto mr-auto my-auto px-3 py-1 h-fit rounded-full text-sm font-normal text-white bg-gradient-to-r from-orange-600 to-orange-300'>{t("Premium")}</p>
                    <div className='my-auto flex flex-col align-middle md:align-bottom h-auto w-full md:w-auto mt-5 md:mt-0'>
                        <p className='text-xl md:text-3xl font-bold text-black mt-5 md:mt-1 ml-auto mr-auto md:mr-0'>{t("$450.50")} <span className='text-xs ml-1 font-normal'>{t("+VAT/1st year")}</span></p>
                        <p className='text-xs font-normal mt-1 ml-auto mr-auto md:mr-0'>{t("For renewal $27.85 + VAT")}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
