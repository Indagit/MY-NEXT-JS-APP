import React from 'react'

function page() {
  return (
    <>
    <div>
      <h1>This is the About Page</h1>
    </div>
    <form name="contact" netlify>
      <input type="text" style={{color : 'green'}}></input>
      <button type="submit">Send</button>
    </form>
    </>
  )
}

export default page
