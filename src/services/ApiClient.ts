import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '537441848d5842389451457dcd4ac81c'
    }
})