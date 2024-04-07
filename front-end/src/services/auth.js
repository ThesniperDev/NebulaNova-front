import { api } from './serviceConfig'

export const login = async ( userLogin) {
    const { data } = await api.post('/login', userLogin)
    return data
}