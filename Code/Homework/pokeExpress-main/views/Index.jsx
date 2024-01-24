import React from 'react'

const myStyle= {
    color: "#ffffff",
    backgroundColor: "#000000"
};

const Index = ({pokemon}) => {
    // console.log(pokemon, "hello")
  return (
    <div style={myStyle}>
        <h1>See all the Pokemon!!</h1>
        <ul>
          {pokemon.map((pokemon, i) => {
            // console.log(pokemon.name[0].toUpperCase()+ pokemon.name.substring(1))
            let upCaseName = pokemon.name[0].toUpperCase()+ pokemon.name.substring(1);
            return (
              <li key={i}><a href={`/pokemon/${i}`}>{upCaseName}</a></li>
            )
            
          })}
        </ul>
        
    </div>
  )
}

export default Index