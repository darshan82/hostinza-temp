import React, { useEffect, useState } from 'react';
import SideBarLink from './SideBarLink';
import {useRouter} from 'next/router'

export default function SideBar(){
 
  const [changelink,setchangelink] = useState(false);

  useEffect(() => {
    if(window !== undefined){
    const resize = () => {
      
        if(window.innerWidth < 640){
          setchangelink(true);
        }else{
          setchangelink(false);
        }
      }

      window.addEventListener('resize', resize);

     return () => {
        window.removeEventListener('resize', resize);
      }
    }
  },[])

  console.log(changelink,'changelink');

  const route = useRouter()

    return(
        <div className={`sm:w-[180px] w-[260px] py-2 self-start xs:w-full ${route.pathname !== "/account" && 'xs:hidden'} `}>
           <ul className=''>
            <SideBarLink path={changelink ? '/account/general' : '/account'} active={route.pathname === '/account'} text="General"/>
            <SideBarLink path={'/account/login-connections'} active={route.pathname === '/account/login-connections'} text="Login Connections"/>
            <SideBarLink path={'/account/billing'} active={route.pathname === '/account/billing'} text="Billing"/>
            <SideBarLink path={'/account/invoices'} active={route.pathname === '/account/invoices'} text="Invoices"/>
           </ul>
        </div>
    )
}