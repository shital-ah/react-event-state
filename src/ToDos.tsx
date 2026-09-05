import { useEffect, useState } from "react";

export default function ToDos(){

    const[todos, setTodos] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then(data =>{
                console.log(data);
                setTodos(data)

            })
    }, [])


    return(
        <div>
            <h2>ToDos: {todos.length}</h2>
            <p>List of ToDos</p>
        </div>
    )
}