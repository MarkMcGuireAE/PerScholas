import React from 'react'

const Index = ({ logs }) => {
  return (
    <div>Index
        <nav>
        <a href='/logs/new'>Create a New Log</a>
        </nav>
        <h1>Index Page</h1>
        <ul>
            {logs.map((log, index) => (
                <li key={index}>
                    <a href={`/logs/${index}`}>{log.title}</a>
                    <br></br>
                    
                </li>
                

            ))}
        </ul>
       
    </div>
  )
}

export default Index