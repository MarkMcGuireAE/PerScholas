import React from 'react'

const Show = ( { log, index }) => {
  return (
    <div>
            <h1>Show Page</h1>
           <h2>{log.title}</h2>
           <br></br>
           <h3>{log.entry}</h3>
           <br></br>
           <h3>{log.shipIsBroken ? "The ship is broken" : "The ship is intact" } </h3>
           <br></br>
           <br></br>
           <a href={`/logs/${index}/edit`}>Edit Log</a>
           <br></br>
         <form action={`/logs/${index}?_method=DELETE`} method='POST'>
          <button>Delete</button>
         </form>
           <br></br>
           <br></br>

        <a href="/logs">Go Back to Index Page</a>




            
            <br /><br />
            
        </div>
  )
}

export default Show