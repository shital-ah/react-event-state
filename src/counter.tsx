 
 import { useState } from "react"
 
 export default
    function Counter() {


        const [count, setCount] = useState(0)

        const handleIncrement = () => {
            setCount(count + 1);
        }





        return (
            <div>
                <h2>Counter</h2>
                <p>Current value is: {count}</p>
                <button onClick={handleIncrement}>Increment</button>
            </div>
        )
    }