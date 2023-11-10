import './App.css';
import { useState } from 'react';
import './Tasks.css';

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const addItem = () =>{
    if(value!==""){
      setList([...list, value])
      setValue("")
    }
  }
  const removeItem= index =>{
    setList(oldList=>{
      return oldList.filter((_, i) => i !== index)
    })
   
  }

//call color as color{}
  return (
    <div className='containerr'>
      <div className="body">
      <h1>ToDo List</h1> 
        <div>
          <input value={value} onChange={(e)=>{setValue(e.target.value)}} class="form-control" placeholder="Enter Task"/>
          <button onClick={addItem} className="btn btn-primary my-3">Add Task</button>
        </div>
     
      <ul class="list-group">
        {list.map((item,index)=>{
          return (<li key={index}>{item} 
          <span onClick={() => removeItem(index)}>X</span></li>);
        })}
      </ul>
    </div>
    </div>
  );//even numbers different from odd numbers, h<over has diverent cover. Use color or picture as background.
}

export default App;
