import gamesApi from "./config"

export const getAllGames = async () => {
  const { data } = await gamesApi.get('/game/')
  return data
}