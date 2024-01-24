import React from 'react'


const Show = ({pokemon}) => {
  return (
    <div style={myStyle}>
        <h1 style={{color: "white"}}>Gotta Catch "Em All"</h1>
        <h2>{ pokemon.name[0].toUpperCase()+ pokemon.name.substring(1)}</h2>
        <img src={pokemon.img + ".png"} />
        <br></br>
        <a href='/pokemon'>Go Back</a>
    </div>
  )
}

export default Show