import React, { useEffect, useState } from 'react'

const Users = () => {

  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(userArray => setUsers(userArray))
  }

  useEffect(() => {
    getUsers()
  }, [1])

  return (
    <div className='container'>
      <h1 className='my-3'>Users</h1>
      <div className='list-group'>
        {users.map((item, index) => {
          return (
            <a className='list-group-item' key={index} href="hh">
              {item.name}
            </a>
          )
        })
        }
      </div>

    </div>
  )
}
export default Users;
