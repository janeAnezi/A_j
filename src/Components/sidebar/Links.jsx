import React from 'react'

export default function Links() {

  let itemsLink = [
    "HomePage",
    "Services",
    "Portfolio",
    "Contact",
  ]

  return (
    <div className='links'>
      {itemsLink.map((item)=> (
        <a href={`#${item}`} key={item}>{item}</a>
      ))}  
    </div>
  )
}
