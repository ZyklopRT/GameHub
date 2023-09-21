import {useEffect, useState} from "react";
import ApiClient from "../services/ApiClient";
import {CanceledError} from "axios";
interface Game {
    id: number
    name: string
    image: string
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

    useEffect(() => {
        const controller = new AbortController();

        ApiClient.get<GamesResponse>('/games', {
            signal: controller.signal
        })
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) {
                    return;
                }
                setError(err.message)
            })

        return () => controller.abort();
    }, []);

    return {games, error};
}

export default useGames;