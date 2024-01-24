import React from 'react'

const New = () => {
  return (
    <div>
        <h1>New Log</h1>
        <form action='/logs' method='POST'>
            Title:<input type="text" name="title" />
            <br></br>
            Entry:<input type='textarea' name="entry" />
            <br></br>
            Is Ship Broken: <input type='checkbox' name="shipBroken" />
            <br></br>
            <button>Create Log</button>

        </form>
    </div>
  )
}

export default New