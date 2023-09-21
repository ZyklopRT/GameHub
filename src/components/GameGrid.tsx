import ApiClient from "../services/ApiClient";
import {useEffect, useState} from "react";
import { Text } from '@chakra-ui/react'

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
export const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController();
        ApiClient.get('/games')
            .then(res => setGames(res.data.results))
            .catch(error => setError(error.message))

        return () => controller.abort()
    }, []);


    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        {game.name}
                    </li>
                )) }
            </ul>
        </>
    );
};