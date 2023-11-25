'use client'
import { type FC } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Tabs } from '@mantine/core'

import { fortLogo } from '@public/images/picture'

// type TTab = string | null
const FortniteLayout: FC<{ children: JSX.Element }> = ({ children }) => {
    const tabs = ['shop', 'newcosmetics', 'allcosmetics', 'news', 'searchcosmetics', 'state']
    const pathname = usePathname()
    const router = useRouter()

    return (
        <div className='container p-2 mx-auto h-screen  '>
            <div className='flex justify-center  '>
                <Image src={fortLogo.src} width={200} height={1} alt='' />
            </div>
            <div className='flex justify-start'>
                <Tabs value={pathname.split('/')[1] ? pathname.split('/')[1] : 'shop'}>
                    <Tabs.List>
                        {tabs.map((itemsTab: string, index: number) => (
                            <Tabs.Tab key={index} value={itemsTab} onClick={() => router.push(`${itemsTab}`)}>
                                {itemsTab}
                            </Tabs.Tab>
                        ))}
                    </Tabs.List>
                </Tabs>
            </div>
            <div className='flex items-center justify-center mt-5'>{children}</div>
        </div>
    )
}

export default FortniteLayout
