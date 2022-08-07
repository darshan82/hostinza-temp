import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../../utils/auth';
import Spinner from '../../components/Common/Preloader';
const Temp = () => {
    const router= useRouter()
    useEffect(()=>{
        setTimeout(() => {
            if(isAuthenticated){
                router.push('/dashboard')
            }else{
                router.push('/')
            }
        }, 2000);
    },[])
    return (
        <><Spinner loading={true}/></>
    );
}

export default Temp;
