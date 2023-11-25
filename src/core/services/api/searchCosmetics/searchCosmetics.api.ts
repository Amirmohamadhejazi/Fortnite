/* eslint-disable @typescript-eslint/no-explicit-any */
import { Http } from '@core/services/interceptor'

const cosmeticsSearchApiFn = async (inputText: any) => {
    try {
        return Http.get(`/cosmetics/br/search/all${inputText && `?name=${inputText}`}`).then((res) => res.data.data)
    } catch (error: any) {
        return error.response?.data
    }
}

export default cosmeticsSearchApiFn
