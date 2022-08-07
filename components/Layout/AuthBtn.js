import React from 'react'
import { useKeycloak } from "@react-keycloak/ssr";
import useTranslation from "next-translate/useTranslation";
import { removeToken } from '../../utils/auth';
import { useRouter } from 'next/router';
export default function AuthBtn({authenticated,setUser}) {
  const router = useRouter()
  const { keycloak } = useKeycloak();
  const { t ,lang} = useTranslation("common");
  
  function loginUser(){
    if (keycloak) {
      if (window.innerWidth > 1023) {
        window.location.href = keycloak.createLoginUrl({
          redirectUri:window.location.origin+'/dashboard/redirect',
          locale:lang?lang:'en'
        });
      }else{
        router.push('/login')
      }
    }
  }
  function logoutUser(){
    if (keycloak) {
        removeToken()
        setUser({})
        window.location.href =keycloak.createLogoutUrl({
          redirectUri:window.location.origin,
        });
      }
  }
  
  return authenticated?(
    <button
      onClick={() => logoutUser()}
      className="navLoginBtn h-auto mx-auto py-1 px-[25px] font-bold bg-gradient-to-r from-fd-light-blue to-fd-blue rounded-10 text-white text-sm md:text-lg lg:text-[18px]"
    >
      {t("Logout")} 
    </button>
    ):(
      <button
        onClick={() => loginUser()}
        className="navLoginBtn h-auto mx-auto py-1 px-[25px] font-bold bg-gradient-to-r from-fd-light-blue to-fd-blue rounded-10 text-white text-sm md:text-lg lg:text-[18px]"
      >
        {t("Login")}
      </button>
  )
}
