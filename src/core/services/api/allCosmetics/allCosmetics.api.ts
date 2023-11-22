/* eslint-disable @typescript-eslint/no-explicit-any */
import { Http } from '@core/services/interceptor'

const allCosmeticsFn = async () => {
    try {
        return Http.get(`/cosmetics/br`).then((res) => res.data.data)
    } catch (error: any) {
        return error.response?.data
    }
}

export default allCosmeticsFn
