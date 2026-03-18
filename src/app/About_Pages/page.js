import React from 'react'

function page() {
  return (
    <>
    <div>
      <h1>This is the About Page</h1>
    </div>
    <Link href="/Home_Page"> 
    <button style={{ color: 'purple'}}> Go to Home Page </button>
    </Link>
    <form>
      <input type="text" style={{color : 'green'}}></input>
    </form>
    </>
  )
}

export default page
