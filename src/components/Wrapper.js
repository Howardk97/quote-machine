import React from 'react'

export default function ({children, color}) {
  return (
    <div className={`quote-box-container d-flex justify-content-center align-items-center bg-${color}`}>
        <div id="quote-box" className="bg-light p-5 rounded-2">{children}</div>
    </div>
  )
}
