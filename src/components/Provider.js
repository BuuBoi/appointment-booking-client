import React from 'react'
import { Toaster } from 'react-hot-toast';

export default function Provider({children}) {
  return (
        <div>
            <Toaster position='top-right' reverseOrder={false}>
            {children}
        </Toaster>
        </div>
  )
}
