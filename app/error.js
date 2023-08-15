"use client"

import React from 'react'
import Nav from './components/UX/Nav/Nav'

function Error() {
  return (
    <div>
      <Nav colured={true} />
      <p style={{ fontSize: "2rem", textAlign: "center", fontFamily: "Exo", fontWeight: 900, color: "#ff6f00" }} >
        Something Went Wrong. Plz Try Again Later.
        </p>
    </div>
  )
}

export default Error