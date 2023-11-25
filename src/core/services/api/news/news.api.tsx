/* eslint-disable @typescript-eslint/no-explicit-any */
import { Http } from '@core/services/interceptor'

const newsApiFn = async () => {
    try {
        return Http.get(`/news`).then((res) => res.data.data)
    } catch (error: any) {
        return error.response?.data
    }
}

export default newsApiFn
