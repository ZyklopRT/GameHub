import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8c53b212488c470d921260bc8cd8f985'
    }
})