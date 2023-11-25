/* eslint-disable @typescript-eslint/no-explicit-any */
import type TCriticalAny from '@core/types/critical-any/types'

const calculator = (AllItems: TCriticalAny[]) => {
    const convertedData = AllItems.map((itemsNews: any) => {
        return {
            title: itemsNews.title,
            body: itemsNews.body,
            image: itemsNews.image,
            id: itemsNews.id,
        }
    })
    return { convertedData }
}

export default calculator
