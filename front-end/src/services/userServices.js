import gamesApi from "./config"

export const getAllGames = async () => {
  const { data } = await gamesApi.get('/game/')
  return data
}

export const getAllReview = async () => {
  const  { data } = await gamesApi.get ('/review/game')
  console.log(data)
  return data
}