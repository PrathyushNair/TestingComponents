import React from 'react'

export const Message = ({content,isImportant}) => {
    
  return (
    <div >
        {isImportant ? <b data-testid="bold">{content}</b>:<span data-testid="unbold">{content}</span>}
    </div>
  )
}
