import gamesApi from "./config"

export const getAllGamesCollection = async () => {
  const { data } = await gamesApi.get('/gamecollection/', {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
  return data
}

export const addUserGame = async (gamedata) => {
  const { data } = await gamesApi.post('/gamecollection/', gamedata, {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
  return data
}

export const updateUserGame = async ({gameId, gamedata}) => {
  const { data } = await gamesApi.put(`/gamecollection/${gameId}`, gamedata, {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
  return data
}