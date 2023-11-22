import { type FC } from 'react'
import { type Metadata } from 'next'

import { Providers } from '@partials/providers'

export const metadata: Metadata = {
    title: 'Fortnite',
}

const RootLayout: FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <html>
            <body dir='ltr'>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

export default RootLayout
