import React from 'react'

const Edit = ({ log, index }) => {
  return (
    
        <div>
        <h1>Edit Log page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action={`/logs/${index}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={log.title} /><br/>
          Entry: <input type="textarea" name="entry" defaultValue={log.entry} /><br/>
          Is The Ship Broken: <input type="checkbox" name="shipIsBroken" defaultChecked={log.shipIsBroken} /><br/>
          <button>Update Log</button>
        </form>
        </div>
  )
}

export default Edit