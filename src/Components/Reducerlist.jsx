import React from 'react'

export const initialState={redItem:"",redlistItems:[]}
export const reducer=(state=initialState,action)=>{
    switch(action.type)
    { case ("newentry"):
        {
            return{...state,redItem:action.data}
        }
        case("add"):
        {
            return{...state,redListItems:[...redListItems, redItem]}
        }
    }
}
export const Reducerlist = () => {
    let [redData,dispatch]=React.useReducer(reducer,initialState)
    let handleChange=(e)=>{
      
       dispatch({type:"newentry",data:e.target.value})
    }
    let handleAdd=()=>{
        dispatch({type:"add",data:e.target.value})
    }
  return (
    
    <form>
        <input onChange={handleChange} value={newListData} placeholder="add list item"></input>
       
        {
            listData.map((el)=>(
                <ul>{el}</ul>
            ))
        }
         <button data-testid="submitButton" onClick={handleAdd} onKeyDown={handleAdd}>Add</button>
    </form>
  )
}
