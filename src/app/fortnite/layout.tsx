import { type FC } from 'react'

import { type ILayoutProps } from '@core/types'

// import { DAuthLayout } from '@partials/layouts/DAuthLayout'

const Layout: FC<ILayoutProps> = ({ children }) => {
    return <div>{children}</div>
}

export default Layout
