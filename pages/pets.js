import Image from 'next/image'
import React from 'react'
import img from '../public/1.avif'

const pets = () => {
  return (
    <div>

      <Image src={img} placeholder='blur' blurDataURL='' alt='pet' width='280' height='420' />

      {['2', '3', '4', '5'].map(path => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt='pet' width='280' height='420' />
          </div>
        )
      })}
    </div>
  )
}

export default pets