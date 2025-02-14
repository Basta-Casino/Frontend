import { useParams } from 'react-router-dom'

const GamePlay = () => {
    const params = useParams()
    const { game} = params;
  return (
    <div>GamePlay: {game} </div>
  )
}

export default GamePlay