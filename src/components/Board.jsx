import React from 'react'
import { emojis } from '../utils'
import { useState } from 'react'

export const Board = ({emojis, setEmojis, gameState, setGameState}) => {
  const [prev,setPrev]=useState(null)
  console.log(emojis)
  const containerStyle={
    gridTemplateColumns: `repeat(${gameState.size},auto)` //CSS as object
  }

  const showhide=(domObj)=>{
    [domObj.children[0], domObj.children[1]].forEach(element => {
        element.classList.toggle('hidden')
        element.classList.toggle('flex')
    })};

  const handelClick=(event,emojiObj)=> {
    let id = emojiObj.id
    console.log(emojiObj)
    console.log(id, event.target.parentNode)
    const parent= event.target.parentNode
    showhide(event.target.parentNode)
    if (prev){
      console.log('2. kattintás',emojiObj.emoji, prev.children[0].innerHTML)
      if(emojiObj.emoji == prev.children[0].innerHTML){
        setEmojis(emojis.map(obj => obj.id==id ? {...obj,disabled: true} : obj))
        setPrev(null)
      }else{
          setGameState({...gameState, running: true})
      setTimeout(() => {
        setPrev(parent)
        setEmojis(emojis.map(obj => obj.id==id ? {...obj,disabled: true} : obj))
      }, 500);
      }
    }else{
    
    }
  }
  return ( 
    <div className='grid border justify-center gap-1' style={containerStyle}>
      {emojis.map((emojiObj)=>
      <div key={emojiObj.id} id={emojiObj.id} onClick={event=> emojiObj.disabled ? null :  handelClick(event,emojiObj)}>
      <div className={gameState<=4 ? 's4 hidden' : 's8 hidden'}>{emojiObj.emoji}</div>
      <div className={gameState<=4 ? 's4 flex' : 's8 flex'}>?</div>
      </div>
      )}
    </div>
  )
}
