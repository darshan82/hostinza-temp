/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import Link from "next/dist/client/link";
import { useKeycloak } from "@react-keycloak/ssr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { siteSettings } from "../config/site-setting";
import {faBars,faEnvelope,faHeadset,faKey,faPhone,faXmark} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../utils/auth-context";
import useTranslation from "next-translate/useTranslation";
import AuthBtn from "./Layout/AuthBtn";
import Spinner from "./Common/Preloader";

export default function Header() {
	const { t } = useTranslation("common");

  const { keycloak } = useKeycloak();
  const router = useRouter();
  const [showHead, setShowHead] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showMobilePages, setShowMobilePages] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [loading,setLoading]=useState(true)
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023) {
        setToggle(false);
      }
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScroll(true);
        setShowHead(false);
      } else {
        setScroll(false);
        setShowHead(true);
      }
    });
  });

  useEffect(() => {
    if (keycloak) {
      keycloak.loadUserProfile().then(() => {
        setLoading(false)
      }).catch(()=>{
        setLoading(false)
      })
    }
  }, [keycloak]);

  
  return (
    <div >
      {
        loading&&(<Spinner loading={loading}/>)
      }
      {/* Header */}
      {showHead ? (
        <div className="bg-dark-blue fixed z-10 w-full min-h-[6vh]">
          <div className="container mx-auto w-full">
            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between align-middle py-2">
              <div className="flex flex-col md:flex-row justify-between align-middle max-w-[300px] w-full mx-auto md:mx-0">
                <p className="text-white text-sm font-light mx-auto md:mx-0">
                  <FontAwesomeIcon color="#ffffff" size="sm" icon={faPhone} />
                  &nbsp;009-215-5596
                </p>
                <p className="text-white text-sm font-light mx-auto md:mx-0">
                  <FontAwesomeIcon
                    color="#ffffff"
                    size="sm"
                    icon={faEnvelope}
                  />
                  &nbsp;{t("info@domain.com")}
                </p>
              </div>
              <div className="flex flex-row justify-between align-middle max-w-[180px] w-full mx-auto md:mx-0 mt-2 md:mt-0">
                <button className="text-white text-sm font-light">
                  <FontAwesomeIcon color="#ffffff" size="sm" icon={faKey} />{" "}
                  &nbsp;{t("Login")}
                </button>
                <button className="text-white text-sm font-light">
                  <FontAwesomeIcon color="#ffffff" size="sm" icon={faHeadset} />{" "}
                  &nbsp;{t("Support")}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Navbar */}
      <div
        className={`w-full fixed  z-10 border-b-[0.5px] min-h-[12vh] border-gray-300 ${
          scroll ? "bg-dark-blue mt-0" : `${router.pathname.startsWith('/integerations') ? 'bg-dark-blue' : 'bg-dark-blue'} -mt-10 md:mt-10`}`}
      >
        <div className="container mx-auto w-full">
          <div className="flex justify-between align-middle w-full bg-black-1">
            <img
              className="w-[70px] md:w-[100px] py-3"
              src="/images/logo.png"
              alt="Logo"
            />
            <div className="flex flex-1 align-middle justify-center">
              {toggle === false ? (
                <button
                  className="navToggleBtn"
                  
                  onClick={() => setToggle(true)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              ) : null}
              <ul className="navMenu">
                <li className="nav-item p-2 mx-5">
                  <Link href="/">
                    <a
                      className={`nav-link text-white p-0 text-base ${
                        router.pathname === "/"
                          ? "font-bold underline underline-offset-8 text-lg"
                          : null
                      }`}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="group nav-item px-2 mx-5">
                  <div className="inline-block text-left py-2">
                    <div>
                      <button
                        type="button"
                        // hover:text-lg
                        className="inline-flex justify-center w-full shadow-base px-4 py-5 bg-transparent text-base font-medium text-white focus:outline-none"
                        id="menu-button"
                      >
                        Pages
                        <svg
                          className="-mr-1 ml-2 h-5 w-5 my-auto"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Dropdown for Pages */}
                    <div
                      className="hidden mt-2 group-hover:block origin-bottom-right absolute right-[15%] w-[50%] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      id="menu-dropdown"
                    >
                      <div className="flex flex-col align-middle w-full py-5 px-10">
                          {
                            siteSettings?.headerMenuItems.map((parent,j)=>{
                              return(
                                
                                <div key={j} className="flex flex-row align-middle justify-between gap-5">
                                  {
                                    parent.map((item,i)=>{
                                      return (
                                        <Link href={item.href} key={i}>
                                          <p className="flex align-middle gap-2 text-black text-base font-normal h-14 w-full max-w-[160px] border-b-[0.5px] border-black-100">
                                            <FontAwesomeIcon
                                              className="my-auto"
                                              color="black"
                                              icon={item.icon}
                                            />
                                            <span className="my-auto">{item.label}</span>
                                          </p>
                                        </Link>
                                      )
                                    })
                                  }
                                </div>
                              )
                            })
                          }
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item p-2 mx-5">
                  <Link href="/investment">
                    <a
                      className={`nav-link text-white p-0 text-base ${
                        router.pathname === "/investment"
                          ? "font-bold underline underline-offset-8 text-lg"
                          : null
                      }`}
                    >
                      Investment
                    </a>
                  </Link>
                </li>
                <li className="nav-item p-2 mx-5">
                  <Link href="/about-us">
                    <a
                      className={`nav-link text-white p-0 text-base ${
                        router.pathname === "/about-us"
                          ? "font-bold underline underline-offset-8 text-lg"
                          : null
                      }`}
                    >
                      About Us
                    </a>
                  </Link>
                </li>
                <li className="nav-item p-2 mx-5">
                  <Link href="/contact">
                    <a
                      className={`nav-link text-white p-0 text-base ${
                        router.pathname === "/contact"
                          ? "font-bold underline underline-offset-8 text-lg"
                          : null
                      }`}
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <AuthBtn authenticated={keycloak?.authenticated} setUser={()=>setUser({})}/>
          </div>
        </div>
        {toggle ? (
          <div className="navModal">
            <button onClick={() => setToggle(false)}>
              <FontAwesomeIcon
                className="text-white w-[20px] top-5 right-5 absolute"
                icon={faXmark}
              />
            </button>
            <ul className="navModalMenu">
              <li className="nav-item p-2 mx-5">
                <Link href="/">
                  <a
                    onClick={() => setToggle(false)}
                    className={`nav-link text-white p-0 text-base ${
                      router.pathname === "/"
                        ? "font-bold underline underline-offset-8 text-lg"
                        : null
                    }`}
                  >
                    {t("Home")}
                  </a>
                </Link>
              </li>
              <li
                className="nav-item p-2 mx-5 w-[90%]"
                onClick={() => setShowMobilePages(!showMobilePages)}
              >
                <div className="inline-block text-left w-full">
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full shadow-base bg-transparent text-sm font-medium text-white focus:outline-none"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      {t("Pages")}
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Dropdown for Pages */}
                  {showMobilePages ? (
                    
                    <div
                      className="mt-2 origin-bottom-right w-full rounded-md shadow-lg bg-white ring-1 focus:outline-none"
                      id="menu-dropdown"
                    >
                      <div className="flex flex-col align-middle w-full p-5">
                        <div className="flex flex-col align-middle justify-between">
                          {
                            siteSettings?.headerMenuItems.map((parent,j)=>{
                              return(<div key={j}>
                                {
                                parent.map((item,i)=>{
                                  return (
                                    <Link href={item.href} key={i}>
                                      <p className="flex align-middle gap-2 text-black text-base font-normal h-14 w-full border-b-[0.5px] border-black-100">
                                        <FontAwesomeIcon
                                          className="my-auto"
                                          color="black"
                                          icon={item.icon}
                                        />
                                        <span className="my-auto">{t(item.label)}</span>
                                      </p>
                                    </Link>
                                  )
                                })
                                }  
                              </div>)
                            })
                          }
                          
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </li>
              <li className="nav-item p-2 mx-5">
                <Link href="/investment">
                  <a
                    onClick={() => setToggle(false)}
                    className={`nav-link text-white p-0 text-base ${
                      router.pathname === "/investment"
                        ? "font-bold underline underline-offset-8 text-lg"
                        : null
                    }`}
                  >
                    {t("Investment")}
                  </a>
                </Link>
              </li>
              <li className="nav-item p-2 mx-5">
                <Link href="/about-us">
                  <a
                    onClick={() => setToggle(false)}
                    className={`nav-link text-white p-0 text-base ${
                      router.pathname === "/about-us"
                        ? "font-bold underline underline-offset-8 text-lg"
                        : null
                    }`}
                  >
                    {t("About Us")}
                  </a>
                </Link>
              </li>
              <li className="nav-item p-2 mx-5">
                <Link href="/contact">
                  <a
                    onClick={() => setToggle(false)}
                    className={`nav-link text-white p-0 text-base ${
                      router.pathname === "/contact"
                        ? "font-bold underline underline-offset-8 text-lg"
                        : null
                    }`}
                  >
                    {t("Contact")}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <button className="h-auto mx-auto py-3 px-[25px] font-bold bg-gradient-to-r from-fd-light-blue to-fd-blue rounded-10 text-white text-sm md:text-lg lg:text-[20px]">
                    {t("Login")}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
