import React from 'react'

const New = () => {
  return (
    <div>
      <h1>New Post</h1>
      <form action="/logs" method="POST">
        Title: <input type="text" name="title" />
        <br /><br />
        Entry: <input type="textarea" name="entry" />
        <br /><br />
        Is Ship Broken: <input type="checkbox" name="shipIsBroken" />
        <br /><br />
        <button>Create Post</button>
      </form>
    </div>
  )
}

export default New