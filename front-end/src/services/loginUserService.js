import gamesApi from "./config"

export const getAllGamesCollection = async () => {
  const { data } = await gamesApi.get('/gamecollection/', {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
  return data
}

export const getOneGameInfo = async (gameid) =>  {
  const { data } = await gamesApi.get(`/gamecollection/${gameid}`, {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
  return data
}


