import axios from 'axios'

const gamesApi = axios.create({
  baseURL: 'https://nebulanova.onrender.com/api'
})

export default gamesApi