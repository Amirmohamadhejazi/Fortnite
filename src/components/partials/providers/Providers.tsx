'use client'

import { type FC } from 'react'
import NextAdapterApp from 'next-query-params/app'
import { ToastContainer } from 'react-toastify'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { QueryParamProvider } from 'use-query-params'
import '@mantine/core/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// import { DToastContainer } from '@partials/containers/DToastContainer'
import { type ILayoutProps } from '@core/types'

import '@styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

// Create a new query client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 0,
        },
    },
})

const Providers: FC<ILayoutProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <QueryParamProvider adapter={NextAdapterApp}>
                <ColorSchemeScript defaultColorScheme='light' />
                <MantineProvider>
                    {children}
                    <ToastContainer />
                </MantineProvider>
            </QueryParamProvider>
        </QueryClientProvider>
    )
}

export default Providers
