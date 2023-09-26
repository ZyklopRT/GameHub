import axios from "axios";

export interface FetchResponse<T> {
    count: number
    next: string
    previous: string
    results: T[]
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '537441848d5842389451457dcd4ac81c'
    }
})