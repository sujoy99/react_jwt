import React, {useState, useEffect} from 'react'

const ItemSingle = ({singleItem, deleteItem, a}) => {
    const token = JSON.parse(localStorage.getItem("user"))
    const [toDoItem, setToDoItem] = useState(singleItem)
    const [isModified, setIsModified] = useState(false)

    useEffect(() => {
        
        if(isModified){

            console.log(toDoItem);

            fetch(`http://192.168.0.4:24/api/v1/toDoItem/${toDoItem.id}`,{
                method : 'PUT',
                headers : {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${token['token']}`
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
            
            <button style={{cursor : 'pointer'}, { visibility : a === 'admin' ? 'visible' : 'hidden'}} onClick={() => {deleteItem(toDoItem.id)} }>🚮</button>

            </div>
        </>
    )
}

export default ItemSingle
