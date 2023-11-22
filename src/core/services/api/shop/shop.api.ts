/* eslint-disable @typescript-eslint/no-explicit-any */
import { Http } from '@core/services/interceptor'

const currentShopFn = async () => {
    try {
        return Http.get(`/shop/br`).then((res) => res.data.data)
    } catch (error: any) {
        return error.response?.data
    }
}

export default currentShopFn
