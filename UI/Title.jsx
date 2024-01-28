import React from 'react'

export default function Title({titleEx, titleMain}) {
  return (
    <div className='titleUI'>
        <h4>{titleEx}</h4>
        <h2>{titleMain}</h2>
    </div>
  )
}
