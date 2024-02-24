import React from 'react'
import cardBackImg from '/card-back.jpg';
export const BackCard = ({handleClickImg}) => {
  return (
    <>
        <div><img onClick={handleClickImg} src={cardBackImg} /></div>
    </>
  )
}
