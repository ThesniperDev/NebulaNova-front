import gamesApi from "./config";

export const signup = async (signupData) => {
  const response = await gamesApi.post('/user/signup', signupData)
  return response
}

export const login = async (loginData) => {
  const response = await gamesApi.post('/user/login', loginData)
  return response
}