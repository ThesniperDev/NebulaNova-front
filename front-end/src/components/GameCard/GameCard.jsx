import './GameCard.css'
import PropTypes from 'prop-types'

const GameCard = ({ game }) => {
  return (
    <div className='cardGame'>
      <div className='cardimg-container' style={{backgroundImage: `url(https:${game.image.replace('t_thumb', 't_cover_big')})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
      </div>
      <p className='game-title'>{game.title}</p>
    </div>
  )
}

GameCard.propTypes = {
  game: PropTypes.object
}

export default GameCard