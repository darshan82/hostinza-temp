import React from 'react';
import toast,{Toaster} from 'react-hot-toast';

export default function toasti(text) {
   return(
    toast.success(`${text} Has been Updated Successfully`, {
        position: 'bottom-right',
        style: {
          border: '1px solid #fff',
          padding: '18px',
          color: '#fff',
          background: '#0d2352',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#0d2352',
        },
      })
   )
}
