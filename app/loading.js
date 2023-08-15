import React from 'react'
import Nav from './components/UX/Nav/Nav'

function Loading() {
  return (
    <div>
      <Nav colured={true} />
      <p style={{ fontSize: "2rem", textAlign: "center", fontFamily: "Exo", fontWeight: 900, color: "#ff6f00" }} >
        Loading...
        </p>
    </div>
  )
}

export default Loading