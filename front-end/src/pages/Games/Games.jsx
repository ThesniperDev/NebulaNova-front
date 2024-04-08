import { useState, useEffect } from 'react'
import './Games.css'
import { getAllGames } from '../../services/userServices'

const Games = () => {
  const [games, setGames] = useState([])

  const handleGames = async () => {
    const res = await getAllGames()
    setGames(res)
  }

  useEffect(() => {
    handleGames()
  },[])

  return (
    <div className='cardGame-container'>
      {
        games && games.map((game, idx) => {
          return (
          <div key={idx} className='cardGame'>
            <div className='cardimg-container' style={{backgroundImage: `url(https:${game.image.replace('t_thumb', 't_cover_big')})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
            </div>
            <p>{game.title}</p>
          </div>
          )
        })
      }
    </div>
  )
}

export default Games