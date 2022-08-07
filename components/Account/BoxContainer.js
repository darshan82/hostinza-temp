import React, { useState } from 'react';
import { DeleteAccountModel } from './billing/Model';
import Box from './Box';
import toast from '../Toast';
import {Toaster} from 'react-hot-toast'

export default function BoxContainer({displayonsmall}) {

    const [open,setopen] = useState(false)

    return(
        <div className={`md:w-[75%] lg:w-[75%] xl:[75%] w-[75%] sm:w-[90%] ${displayonsmall ? 'xs:w-[95%] xs:mx-auto' : 'xs:hidden'}  `}>
            <Toaster />
            <DeleteAccountModel state={open} setstate={setopen}/>
            <Box onClick={() => toast('Your Username')} heading={'Your Username'} para={'This is your URL namespace within Vercel.'} secondtext={'Please use 48 characters at maximum.'} btntext={'Save'}/>
            <Box onClick={() => toast('Your Name')} heading={'Your Name'} para={'Please enter your full name, or a display name you are comfortable with.'} secondtext={'Please use 32 characters at maximum.'} btntext={'Save'}/>
            <Box onClick={() => toast('Your Email')} heading={'Your Email'} para={'Please enter the email address you want to use to log in with Vercel.'} secondtext={'We will email you to verify the change.'} btntext={'Save'}/>
            <Box heading={'Your Avatar'} para={'Click on the avatar to upload a custom one from your files.'} secondpara={'This is your avatar.'} secondtext={'An avatar is optional but strongly recommended.'} avatar={true}/>
            <Box heading={"Your ID"} para={'This is your user ID within Vercel.'} secondtext={'Used when interacting with the Vercel API.'}/>
            <Box onClick={() => setopen(true)} deletebox={true} hideinput={true} heading={"Delete Personal Account"} btntext={'Delete account'} para={'Permanently remove your Personal Account and all of its contents from the Vercel platform. This action is not reversible, so please continue with caution.'} />
        </div>
    )
}