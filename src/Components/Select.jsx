import React from 'react'

export const Select = () => {
    let prodList=[{prodCat:"mobile",id:"1"},{prodCat:"laptop",id:"2"},{prodCat:"refrigerator",id:"3"},{prodCat:"TV",id:"4"}]
  return (
    <div>
        <select data-testid="selectTag">
            <option value={"default"} key={"0"}>{"Select Product Category"}</option>
            {
                prodList.map((el)=>(
                    <option value={el.prodCat} key={el.id}>{el.prodCat}</option>
                ))
            }
        </select>
    </div>
  )
}
