import { type FC } from 'react'

import { FortniteLayout } from '@partials/layouts'

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
    return <FortniteLayout>{children}</FortniteLayout>
}

export default Layout
