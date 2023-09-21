import {useEffect, useState} from "react";
import ApiClient from "../services/ApiClient";
import {CanceledError} from "axios";

export interface Genre {
    id: number
    name: string
}

interface GenreResponse {
    count: number
    next: string
    previous: string
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true)
        ApiClient.get<GenreResponse>('/genres', {
            signal: controller.signal
        })
            .then(res => {
                setGenres(res.data.results)
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
    }, []);

    return {genres, error, isLoading};
}

export default useGenres;