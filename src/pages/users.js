import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(userArray => setUsers(userArray))
  }

  const goToSingleUserPage = (index) => {
    navigate(`/individualuser/${index}`)
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
            <button className='list-group-item text-start' key={index} onClick={goToSingleUserPage.bind(this, index)}>
              {item.name}
            </button>
          )
        })
        }
      </div>
    </div>
  )
}
export default Users;
