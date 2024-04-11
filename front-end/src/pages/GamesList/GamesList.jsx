import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import './GamesList.css'
import { getAllGamesList } from '../../services/loginUserService'
import GameCard from '../../components/GameCard/GameCard'

const GamesList = () => {
  const [gamesList, setGamesList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [isList, setIsList] = useState(true)
  const { listId } = useParams()
  
  const handleGamesList = async () => {
    const res = await getAllGamesList(listId)
    setGamesList(res)
  }

  useEffect(() => {
    handleGamesList()
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
          gamesList && gamesList
                  .filter((gameList) =>
                    gameList.title.toLowerCase().includes(searchText.toLowerCase())
                  )
                  .map((gameList, idx) => <GameCard key={idx} game={gameList} isList={isList} setIsList={setIsList}/>)
        }
      </div>
    </section>
  )
}

export default GamesList