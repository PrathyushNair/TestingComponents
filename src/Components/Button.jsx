import React from 'react'

export const Button = ({label,innerText}) => {
  return (
    <button aria-label={label} data-testid="custom-element">{innerText}</button>
  )
}
