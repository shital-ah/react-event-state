import { use } from 'react'

function Users({ userDataPromise }: { userDataPromise: Promise<unknown> }) {

        const users = use(userDataPromise);

        console.log(users);

    return(
        <div>
            <h2>Users: {users.length}</h2>
            {/* <p>List of users</p> */}
        </div>
    )
}

export default Users;

// suspense lagbe
// create a promise function to data
// sent the promise to the component to data

















/**
 * 1.data source || JSON
 * JSON.stringify() => convert to string
 * JSON.parse() => convert to object
 *
 * .JSON()
*/




// // call back function
//  fetch('https://jsonplaceholder.typicode.com/users')
//  .then(response => response.json())
//  .then(data => {
//     console.log(data)
//  })



// //  asyncawait
// async function loadData(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     return data;
// }

// const  loadData2 = async () => {

//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     return data;
// }