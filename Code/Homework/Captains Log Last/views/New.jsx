import React from 'react'

const New = () => {
  return (
    <div>
    <h1>New Log page</h1>
    {/* NOTE: action will be the route, method will be the HTTP verb */}
    <form action="/logs" method="POST">
      Title: <input type="text" name="title" /><br/>
      Entry: <input type="textarea" name="entry" /><br/>
      Is The Ship Broken: <input type="checkbox" name="shipIsBroken" /><br/>
      <input type="submit" name="" value="Create Log"/>
    </form>
</div>);
  
}

export default New