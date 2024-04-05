import gamesApi from "./config";

export const signup = async (signupData) => {
  const response = await gamesApi.post('/user/signup', signupData)
  return response
}