

import { Suspense } from 'react'
import type { ComponentType } from 'react'
import './App.css'
// import Batter from './baters'
import Users from './Users'
// import Cart from './cart'
// import Counter from './counter'

const UserList = Users as unknown as ComponentType<{ userDataPromise: Promise<unknown> }>


const userDataPromise =async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json()
  return data
}

function App() {


  // const handleClick = () => {
  //   alert('click me3')
  // }

  // const handleAddToCart = (id) => {
  //   alert('buying item' + id)
  // }

  return (
    <>
   
    <Suspense fallback ={<div>Loading...</div>}>
    <UserList userDataPromise={userDataPromise()} />

    </Suspense>




    {/* <Cart ></Cart> */}

    {/* <Counter></Counter> */}
    {/* <Batter></Batter> */}




    {/* <button onClick="handleClick()">Click Me </button> */}


    {/* <button onClick={handleClick}>Click Me Too </button>

    <button onClick={handleClick}>click me3</button>


    <button onClick={() => alert('click me4')}>click me4</button>


    <button onClick={() => handleAddToCart(1)}>Buy this</button> */}

     </>
  )
}

export default App
