import React from 'react'

function CollectionCard({ children, bg = 'bg-white' }) {
  return (
    <div className={`${bg} rounded-xl shadow-lg w-72 shrink-0`}>
        {children}
    </div>
  )
}

export default CollectionCard