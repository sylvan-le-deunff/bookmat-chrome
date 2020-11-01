import axios from 'axios'

export const bookmatApi = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})

export default bookmatApi;
