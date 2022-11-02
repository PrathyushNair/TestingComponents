import React from 'react'

export const Form = () => {
    let[formdata,setFormdata]=React.useState({name:"",surname:""})
    let handleChange=(e)=>{
        e.preventDefault()
        setFormdata({...formdata,[e.target.name]:e.target.value})
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formdata)
    }
  return (
    
    <form>
        <div>
        <input onChange={handleChange} name="name" value={formdata.name} aria-label="name" placeholder="enter name"></input>
        <input onChange={handleChange} name="surname" value={formdata.surname} aria-label="surname" placeholder="enter surname"></input>
        </div>
        <div >
            <input id="field1" type="checkbox" value="married" ></input>
            <label for="field1">Married</label>
            <input id="field2" label="unmarried" type="checkbox"></input>
            <label for="field2">UnMarried</label>
        </div>
        <div>
            <select aria-label='selectGender'>
                <option>{"select gender"}</option>
                <option value="male">{"male"}</option>
                <option value="female">{"female"}</option>
            </select>
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}
