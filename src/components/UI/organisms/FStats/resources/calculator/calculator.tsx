/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaGamepad } from 'react-icons/fa6'
import { MdOutlineTouchApp, MdPersonalVideo } from 'react-icons/md'

import type TCriticalAny from '@core/types/critical-any/types'
const iconHandler = (key: string) => {
    switch (key) {
        case 'all':
            return null
        case 'keyboardMouse':
            return <MdPersonalVideo className='text-2xl' />
        case 'gamepad':
            return <FaGamepad className='text-2xl' />
        case 'touch':
            return <MdOutlineTouchApp className='text-2xl' />
    }
}

const calculator = (AllItems: TCriticalAny[]) => {
    const convertDataState = Object.keys(AllItems)
        .map((key: any) => {
            return {
                name: key,
                icon: iconHandler(key),
                typeGames: AllItems[key],
            }
        })
        .map((platform) => ({
            name: platform.name,
            icon: platform.icon,
            data: Object.keys(platform.typeGames || {}).map((gameType, index) => ({
                id: index,
                name: gameType,
                data: platform.typeGames ? platform.typeGames[gameType] : null,
            })),
        }))

    return { convertDataState }
}

export default calculator
