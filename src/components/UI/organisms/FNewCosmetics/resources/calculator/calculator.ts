/* eslint-disable @typescript-eslint/no-explicit-any */
import type TCriticalAny from '@core/types/critical-any/types'
import { bgChecker } from '@core/utils/common'

const calculator = (AllItems: TCriticalAny[]) => {
    const convertedData = AllItems.map((itemsData: any) => {
        return {
            name: itemsData.name,
            description: itemsData.description,
            type: itemsData.type.value,
            rarity: {
                name: itemsData.rarity.value,
                bg: bgChecker(itemsData.rarity.value),
                // color: colorChecker(itemsData.rarity.value)
            },
            shopHistory: itemsData.shopHistory || null,

            images: itemsData.images.icon,
            added: itemsData.added,
            id: itemsData.id,
        }
    })
    return { convertedData }
}

export default calculator
