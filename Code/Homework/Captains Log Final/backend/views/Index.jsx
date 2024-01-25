import React from 'react'

const Index = ({ Log }) => {
  return (
    <div>
        <h1>Index Page</h1>
      <ul>
        {Log.map((log, i) => (
          <li key={i}>
           <h2>{Log.title}</h2>
            <br></br>
            <br />
          </li>
        ))}
      </ul>
      <a href={/logs/new}>Create New Log</a>
    </div>
  )
}

export default Index