import {useEffect, useState} from "react";
import ApiClient from "../services/ApiClient";
import {CanceledError} from "axios";

export interface Platform {
    id: number;
    slug: string;
    name: string
}
export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform}[]
    metacritic: string
}

interface GamesResponse {
    count: number
    next: string
    previous: string
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true)
        ApiClient.get<GamesResponse>('/games', {
            signal: controller.signal
        })
            .then(res => {
                setGames(res.data.results)
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

    return {games, error, isLoading};
}

export default useGames;