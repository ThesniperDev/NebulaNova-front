import { useState, useEffect } from 'react'
import './Collection.css'
import { getAllGamesCollection } from '../../services/loginUserService'
import GameBox from '../../components/GameBox/GameBox'

const Collection = () => {
  const [games, setGames] = useState([])
  const [searchText, setSearchText] = useState('')

  const handleGames = async () => {
    const res = await getAllGamesCollection()
    setGames(res)
  }

  useEffect(() => {
    handleGames()
  },[])
  return (
    <section className='collection-container'> 
      <div className='searcher-container'>
        <div className='genreFilter-container'>
          <div className='titleFilter'>
            <h2>GENRE</h2>
          </div>
        </div>
        <div className='platformFilter-container'>
          <div className='titleFilter'>
            <h2>PLATFORM</h2>
          </div>
        </div>
      </div>
      <div className='boxGame-container'>
        <div>
          <input 
            type="text"
            className='input-collection'
            placeholder='Search for a game'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className='boxGames-container'>
          {
            games && games
                    .filter((game) =>
                      game.title.toLowerCase().includes(searchText.toLowerCase())
                    )
                    .map((game, idx) => <GameBox key={idx} game={game} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Collection