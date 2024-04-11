import { useState, useEffect } from 'react'
import './Games.css'
import { getAllGames } from '../../services/userServices'
import GameCard from '../../components/GameCard/GameCard'

const Games = () => {
  const [games, setGames] = useState([])
  const [searchText, setSearchText] = useState('')

  const handleGames = async () => {
    const res = await getAllGames()
    setGames(res)
  }

  useEffect(() => {
    handleGames()
  },[])

  return (
    <section className='gamesPage-container'> 
      <div className='filter-container'>
        <input 
          type='text'
          className='input-game'
          placeholder='Search for a game'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className='cardGame-container'>
        {
          games && games
                  .filter((game) =>
                    game.title.toLowerCase().includes(searchText.toLowerCase())
                  )
                  .map((game, idx) => <GameCard key={idx} game={game} />)
        }
      </div>
    </section>
  )
}

export default Games