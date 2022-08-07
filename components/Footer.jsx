import { faEnvelope, faLocationDot, faSchool, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { faFacebookF, faGooglePlusG, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import useTranslation from "next-translate/useTranslation";


const Footer = () => {
	const { t } = useTranslation("common");

  return (
    <>
      <div className='bg-contain h-auto bg-center w-full footer-group p-5 md:p-12 bg-footer-bg' >
				<div className='container mx-auto'>
					<div className='my-5'>
						<Link href={'/'}>
							<span className='font-bold whitespace-nowrap w-[150px] relative'>
								<Image src={'/images/logo.png'} layout='fill' alt='logoFooter' />
							</span>
						</Link>
					</div>

					<div
						className='h-auto pt-6 flex flex-wrap container w-full'
						style={{ justifyContent: 'space-between' }}
					>
						<div className='w-auto text-left md:pr-24 pt-10 lg:pt-0 ml-6 md:ml-0'>
							<h1 className='text-xl font-bold text-white mb-0'>{t("Services")}</h1>
              				<hr className='h-1 bg-light-blue w-10 border-none my-4'></hr>
							<div className='flex flex-col w-auto mt-5'>
								<a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("Shared Hosting")}</a>
								<a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("Reseller Hosting")}</a>
								<a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("Cloud Hosting")}</a>
								<a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("VPS Hosting")}</a>
                				<a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("Dedicated Hosting")}</a>
							</div>
						</div>
						<div className='w-auto text-left md:pr-24 pt-10 lg:pt-0 ml-6 md:ml-0'>
							<h1 className='text-xl font-bold text-white mb-0'>{t("Company")}</h1>
							<hr className='h-1 bg-light-blue w-10 border-none my-4'></hr>
							<div className='flex flex-col w-auto mt-5'>
								<Link href={'/about-us'}><a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("About Us")}</a></Link>
								<Link href={'/contact'}><a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("Contact")}</a></Link>
								<Link href={'/support'}><a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("Support")}</a></Link>
								<Link href={'/'}><a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("Pricing")}</a></Link>
                				<Link href={'/refferal-program'}><a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("Affiliate")}</a></Link>
							</div>
						</div>
						<div className='w-auto text-left md:pr-24 pt-10 lg:pt-0 ml-6 md:ml-0'>
							<h1 className='text-xl font-bold text-white mb-0'>{t("Solutions")}</h1>
							<hr className='h-1 bg-light-blue w-10 border-none my-4'></hr>
							<div className='flex flex-col w-auto mt-5'>
								<a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("Whois")}</a>
								<a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("Terms of Service")}</a>
								<a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("Privacy Policy")}</a>
								<Link href={'/faq'}><a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("FAQ")}</a></Link>
								<Link href={'/login'}><a className='mt-5 pr-1 text-gray-300 text-sm cursor-pointer hover:text-white hover:scale-105 transition-all duration-500'>{t("Login")}</a></Link>
							</div>
						</div>
						<div className='w-auto text-left md:pr-24 pt-10 lg:pt-0 ml-6 md:ml-0'>
							<h1 className='text-xl font-bold text-white mb-0'>{t("Contact Info")}</h1>
							<hr className='h-1 bg-light-blue w-10 border-none my-4'></hr>
							<div className='flex flex-col w-auto mt-5'>
								<div className='mt-5 pr-1 text-white text-sm flex align-middle'><FontAwesomeIcon size='2x' color='#ffffff' icon={faLocationDot}/><p className='my-auto ml-3'>{t("9/4c, 1010 Avenue, NY, USA")}</p></div>
								<div className='mt-8 pr-1 text-white text-sm flex align-middle'><FontAwesomeIcon size='2x' color='#ffffff' icon={faSquarePhone}/><p className='my-auto ml-3'>009-215-5596 ({t("toll free")}) 009-215-5596</p></div>
								<div className='mt-8 pr-1 text-white text-sm flex align-middle'><FontAwesomeIcon size='2x' color='#ffffff' icon={faEnvelope}/><p className='my-auto ml-3'>{t("contact@hostinza.com")}</p></div>
							</div>
						</div>
					</div>
					<hr className='h-[0.5px] bg-white-200 w-full border-none my-10 md:my-20'></hr>
					<div className='flex flex-wrap w-full bg-transparent mt-10'>
						<div className='w-full md:w-[50%]'>
							<p className='text-base text-white font-medium leading-relaxed'>
								{t("Offers valid for a limited time onlyand reflect multi annual discounts. Other terms and conditions may apply.")} <a className='text-[#1ba3ff] underline underline-offset-2'>{t("Click Here")}</a>
							</p>
						</div>
						<div className='w-full md:w-[50%] flex flex-wrap justify-center gap-10 align-middle mt-7 md:mt-0'>
							<div className='w-20 h-8 relative'>
								<Image src={'/images/footer-icon-1.png'} layout='fill' alt='footer-icon-1' />
							</div>
							<div className='w-20 h-8 relative'>
								<Image src={'/images/footer-icon-2.png'} layout='fill' alt='footer-icon-1' />
							</div>
							<div className='w-20 h-8 relative'>
								<Image src={'/images/footer-icon-3.png'} layout='fill' alt='footer-icon-1' />
							</div>
							<div className='w-20 h-8 relative'>
								<Image src={'/images/footer-icon-4.png'} layout='fill' alt='footer-icon-1' />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='h-auto bg-dark-blue-2 flex flex-wrap align-middle justify-evenly gap-5 md:gap-10 p-5 md:p-10'>
				<h1 className='text-center text-white h-fit my-auto'>
					&copy; {t("2022 Host")} | <strong>{t("Web ")}</strong> <a className='text-[#1ba3ff] underline underline-offset-2 cursor-pointer' href='https://host-front.vercel.app?up_rollout=true'>{t("@Noice")}</a>
				</h1>
				<div className='w-20 h-10 relative my-auto cursor-pointer'>
					<Image src={'/images/logo.png'} layout='fill' alt='footer-logo' />
				</div>
				<div className='flex flex-wrap align-middle justify-center gap-5 h-auto my-auto'>
					<div className='w-10 md:w-12 h-10 md:h-12 relative border border-white rounded-full p-2 md:p-3 cursor-pointer flex align-middle'>
						<FontAwesomeIcon className='m-auto text-light-blue hover:text-white hover:scale-105 duration-300' icon={faFacebookF} alt='footerFacebook' />
					</div>
					<div className='w-10 md:w-12 h-10 md:h-12 relative border border-white rounded-full p-2 md:p-3 cursor-pointer flex align-middle'>
						<FontAwesomeIcon className='m-auto text-[#2aa3ef] hover:text-white hover:scale-105 duration-300' icon={faTwitter} alt='footerFacebook' />
					</div>
					<div className='w-10 md:w-12 h-10 md:h-12 relative border border-white rounded-full p-2 md:p-3 cursor-pointer flex align-middle'>
						<FontAwesomeIcon className='m-auto text-[#1178b3] hover:text-white hover:scale-105 duration-300' icon={faLinkedinIn} alt='footerFacebook' />
					</div>
					<div className='w-10 md:w-12 h-10 md:h-12 relative border border-white rounded-full p-2 md:p-3 cursor-pointer flex align-middle'>
						<FontAwesomeIcon className='m-auto text-[#e8715c] hover:text-white hover:scale-105 duration-300' icon={faInstagram} alt='footerFacebook' />
					</div>
					<div className='w-10 md:w-12 h-10 md:h-12 relative border border-white rounded-full p-2 md:p-3 cursor-pointer flex align-middle'>
						<FontAwesomeIcon className='m-auto text-[#dc4a38] hover:text-white hover:scale-105 duration-300' icon={faGooglePlusG} alt='footerFacebook' />
					</div>
				</div>
			</div>
    </>
  )
}

export default Footer
