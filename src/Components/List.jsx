import React from 'react'

export const List = () => {
    let [listData,setListData]=React.useState([])
    let [newListData,setNewListData]=React.useState("")
    let handleChange=(e)=>{
      
        setNewListData(e.target.value)
    }
    let handleAdd=(e)=>{
     e.preventDefault()
        console.log(listData)
        setListData([...listData,newListData])
        setNewListData("")
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
