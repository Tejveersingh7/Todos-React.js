import React, { useState } from "react";
import './App.css'
import ListItems from "./ListItems";
import Swal from 'sweetalert2'


const App = () => {
  const date = new Date();



  const [currentItem, setCurrentItem] = useState();
  const [allItems, setAllItems] = useState([]);



  const Change = (events) => {
      setCurrentItem(events.target.value)
      console.log(events.target.value)
  }

  const Add = () => {
    if(currentItem===undefined || currentItem===""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter some value'
      })
    }else{
      setAllItems((preVal)=>{
        return [...preVal, currentItem]
        
      })
      setCurrentItem("")
      console.log(currentItem)
    }
     
    
    
  }

  const deleteClick =(id) => {
    setAllItems(()=>{
      return allItems.filter((element, index)=>{
         return index !== id
      })
    })

  }
      return(
        <>
          <div className="box"> 
          <h1>To Do Tasks - {date.toLocaleDateString()}</h1>
            <input type = "text" placeholder="Enter the item" value={currentItem} onChange={Change} />
            <button onClick={Add}> ADD</button>
            <div>
              <ol>
                {allItems.map((val, index) => {
                  return(
                    <>
                    <div>
                    <ListItems text={val} key={index} id={index} deleted={deleteClick}/>
                    </div>
                    </>
                  )
                })}
              </ol>
            </div>
          </div>


        </>
      )
}


export default App;
