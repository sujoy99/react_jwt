import React, {useState, useEffect} from 'react'
import ItemSingle from "./ItemSingle";

const ToDoItem = () => {

    const [toDoItems, setToDoItems] = useState(null)
    const [item, setItem] = useState(null)

    useEffect(() => {
        
        fetch("http://localhost:9999/api/v1/toDoItem")
            .then( (response)=>response.json() )
            .then((data)=>{
                console.log("ok", data)
                setToDoItems( data)
            })



    },[])


    const addItem = () => {

        const newItem = {id : null, task : item, isDone: false}


        fetch(`http://localhost:9999/api/v1/toDoItem`,{
            method : 'POST',
            headers : {
                "content-type": "application/json"
            },
            body : JSON.stringify(newItem)
        })
        .then( (response)=>response.json() )
        .then((data)=>{
            setToDoItems(data)
            setItem("")
        })
    }


    const deleteItem = (id) => {

        fetch(`http://localhost:9999/api/v1/toDoItem/${id}`,{
            method : 'DELETE',
            headers : {
                "content-type": "application/json"
            },
            body : JSON.stringify(id)
            
        })
        .then( (response)=>response.json() )
        .then((data)=>{
            setToDoItems(data)
          
        })
        

    }

    return (
        <>

            <div>

            <input type="text" value={item} onChange={(e)=>{ setItem(e.target.value) }}/>
                <button onClick={ () => { addItem() }  }>Add</button>
            </div>


            <div>

            
                {

                    


                    toDoItems ? (

                    toDoItems.map( (curElem) => {
                        return (
                            <>
                                <ItemSingle singleItem={curElem} key={curElem.id} deleteItem={deleteItem}/>
                                
                            
                            </>
                        )
                    })

                    ) :
                    (
                        <span>Loading Data</span>
                    )
                }
            </div>
        </>
    )
}

export default ToDoItem
