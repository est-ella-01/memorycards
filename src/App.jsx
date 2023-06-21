import { useState } from 'react'
import { categories } from './utils'
import { selectedEmojis } from './utils'
import { MyForm } from './components/MyForm'
import { Board } from './components/Board'

const initialState={
  size: 0,
  category: '',
  remaining: null,
  score: 0,
  won: false,
  running: false,
}

function App() {
const [gameState, setGameState]=useState(initialState)
const [emojis,setEmojis]=useState([])

  //console.log(gameState,emojis)

  return (
    <div className='mycontainer'>
      <div className='flex-col items-center max-w-[1200px] mx-auto'>
      <h1 className='h1'>Memory cards</h1>
      <MyForm setGameState={setGameState} setEmojis={setEmojis} />
      {emojis.length>0 && <Board emojis={emojis} setEmojis={setEmojis} gameState={gameState} setGameState={setGameState}/>}
      </div>
    </div>
  )
}

export default App
