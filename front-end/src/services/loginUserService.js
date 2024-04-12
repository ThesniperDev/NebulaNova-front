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

export const getAllLists = async () => {
  const { data } = await gamesApi.get('/list/', {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
  return data
}

export const createList = async (listdata) => {
  const { data } = await gamesApi.post('/list/', listdata, {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
  return data
}

export const addGameToList = async ({listId, listgamedata}) => {
  const { data } = await gamesApi.post(`/gamelist/${listId}`, listgamedata, {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
  return data
}

export const getAllGamesList = async (listId) => {
  const { data } = await gamesApi.get(`/gamelist/${listId}`, {
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

export const createReview = async ( review, rating, userId, gameId) => {
  const { data } = await gamesApi.post(`/usereview/${gameId}`,{
    description: review,
    range: rating,
    userId: userId,
    gameId: gameId
  },{
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
  return data
}

export const deleteGameCollection = async (gameId) => {
  const { data } = await gamesApi.delete(`/gamecollection/${gameId}`, {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
  return data
}

export const deleteList = async (listId) => {
  const { data } = await gamesApi.delete(`/list/${listId}`, {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
  return data
}