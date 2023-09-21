import {useEffect, useState} from "react";
import ApiClient from "../services/ApiClient";
import {AxiosRequestConfig, CanceledError} from "axios";

interface FetchResponse<T> {
    count: number
    next: string
    previous: string
    results: T[]
}
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[] ) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true)
        ApiClient.get<FetchResponse<T>>(endpoint, {
            signal: controller.signal, ...requestConfig
        })
            .then(res => {
                setData(res.data.results)
                setIsLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) {
                    return;
                }
                setError(err.message)
                setIsLoading(false)
            })

        return () => controller.abort();
    }, dependencies ? [...dependencies] : []);

    return {data, error, isLoading};
}

export default useData;