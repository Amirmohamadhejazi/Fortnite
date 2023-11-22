/* eslint-disable @typescript-eslint/no-explicit-any */
import { Http } from '@core/services/interceptor'

const stateFn = async (inputText: string) => {
    try {
        return Http.get(`/stats/br/v2?name=${inputText}`).then((res) => res.data.data)
    } catch (error: any) {
        return error.response?.data
    }
}

export default stateFn
