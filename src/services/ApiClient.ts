import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number
    next: string
    previous: string
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '537441848d5842389451457dcd4ac81c'
    }
})

class ApiClient<T> {

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config:  AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }

    get = (id: string | number) => {
        return axiosInstance
          .get<T>(this.endpoint + '/' + id)
          .then(res => res.data)
    }
}

export default ApiClient;