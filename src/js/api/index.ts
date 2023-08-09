import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.1.13:80',
})

// api.catch(error => console.error('Deu erro no axios'))

export default api