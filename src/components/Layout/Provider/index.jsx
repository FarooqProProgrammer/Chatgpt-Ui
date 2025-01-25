"use client"

import '@fontsource/poppins';
import AppSidebar from '@/components/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

const Provider = ({ children }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full scrollbar-0'>
             
                {children}
            </main>
        </SidebarProvider>
    )
}

export default Provider
