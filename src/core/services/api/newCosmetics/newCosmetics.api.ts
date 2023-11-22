/* eslint-disable @typescript-eslint/no-explicit-any */
import { Http } from '@core/services/interceptor'

const newCosmeticsFn = async () => {
    try {
        return Http.get(`/cosmetics/br/new`).then((res) => res.data.data)
    } catch (error: any) {
        return error.response?.data
    }
}

export default newCosmeticsFn
