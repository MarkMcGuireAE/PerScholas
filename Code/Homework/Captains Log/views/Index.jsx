import React from 'react'



const Index = ({logs}) => {
  return (
    <div>
       
        <ul>
            {logs.map((log, index) => (
                
                
                    <div>
                    <li key={index}>{log.title}</li>
                    <a href="/logs/new">Create Log</a>
                    </div>
                    
                )
            )}
        </ul>

    </div>
  )
}

export default Index