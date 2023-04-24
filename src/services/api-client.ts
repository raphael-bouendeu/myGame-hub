import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'db147668f3e942979b6cd82e5035d82a'
    }
})