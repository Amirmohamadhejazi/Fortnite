import type TCriticalAny from '@core/types/critical-any/types'
import { bgChecker } from '@core/utils/common'

const calculator = (shopData: TCriticalAny[]) => {
    const convertData = shopData.map((itemsData: TCriticalAny, index: number) => {
        return {
            bundle: itemsData.bundle,
            regularPrice: itemsData.regularPrice,
            finalPrice: itemsData.finalPrice,
            items: itemsData.items.map((itemsData: TCriticalAny) => {
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
            }),
            id: index,
        }
    })
    return { convertData }
}

export default calculator
