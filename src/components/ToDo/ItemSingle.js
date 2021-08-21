import React, {useState, useEffect} from 'react'

const ItemSingle = ({singleItem, deleteItem}) => {
    const [toDoItem, setToDoItem] = useState(singleItem)
    const [isModified, setIsModified] = useState(false)

    useEffect(() => {
        
        if(isModified){

            console.log(toDoItem);

            fetch(`http://192.168.0.4:999/api/v1/toDoItem/${toDoItem.id}`,{
                method : 'PUT',
                headers : {
                    "content-type": "application/json",
                    "Authorization": "Bearer "+ JSON.parse(localStorage.getItem("jwtToken"))
                },
                body : JSON.stringify(toDoItem)
            })
            .then( (response)=>response.json() )
            .then((data)=>{
                setIsModified(false)
                setToDoItem(data)
            })
        }


    }, [isModified, toDoItem])

 


    return (
        <>
            <div>
            <input type="checkbox" checked={ toDoItem.isDone === '1'} onChange={()=>{
                        setIsModified(true)
                        setToDoItem({...toDoItem, isDone: toDoItem.isDone === '1' ? false : true})
                    }} 
            />
            {
                toDoItem.isDone === '1' ? (<span style={{textDecoration:'line-through'}}>{toDoItem.task}</span>) 
                                : ( <span>{toDoItem.task}</span> )
            }
            
            <button style={{cursor : 'pointer'}} onClick={() => {deleteItem(toDoItem.id)} }>🚮</button>

            </div>
        </>
    )
}

export default ItemSingle
