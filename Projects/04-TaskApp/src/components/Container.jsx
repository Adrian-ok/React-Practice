import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={`flex-row ${className}`}>
        {children}
    </div>
  )
}

export default Container