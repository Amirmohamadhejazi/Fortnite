/* eslint-disable @typescript-eslint/no-explicit-any */
import type TCriticalAny from '@core/types/critical-any/types'
import { bgChecker } from '@core/utils/common'

const calculator = (AllItems: TCriticalAny[]) => {
    const convertedData = AllItems.map((itemsSearch: any) => {
        return {
            name: itemsSearch.name,
            description: itemsSearch.description,
            type: itemsSearch.type.value,
            rarity: {
                name: itemsSearch.rarity.value,
                bg: bgChecker(itemsSearch.rarity.value),
            },
            shopHistory: itemsSearch.shopHistory || null,
            images: itemsSearch.images.icon,
            added: itemsSearch.added,
            id: itemsSearch.id,
        }
    })
    return { convertedData }
}

export default calculator
