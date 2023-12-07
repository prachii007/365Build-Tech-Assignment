import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <h1 className='mt-3'>Welcome to Blogs Application</h1>
      <ul>
        <li>
          <Link to='/blogs'>View List of Blogs</Link>
        </li>
        <li>
          <Link to='/users'>View List of Users</Link>
        </li>
      </ul>
      <h2 className='text-black-50'>The Application and Assignment</h2>
      <div className='d-flex'>
        <div className='list-group list-group-flush'>
          <div className='list-group-item active'>
            <h2>These are the list of API's</h2>
          </div>
          <div className="list-group-item list-group-item-success">
            Fetch All Blogs
            <br />
            <em>
              https://jsonplaceholder.typicode.com/posts
            </em>
            <br />
            <p className='my-0 text-black-50'>
              Sample Response
            </p>
            <pre>
              &#x5B;<br />
              &nbsp; &#x7B;<br />
              &nbsp; &nbsp; "userId": 1,<br />
              &nbsp; &nbsp; "id": 1,<br />
              &nbsp; &nbsp; "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",<br />
              &nbsp; &nbsp; "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum"<br />
              &nbsp; &#x7D; <br />
              &#x5D;
            </pre>
            <p className='my-2'>
              The response will be list of blog entries, with title, body, id and the userId (this is the id of user who created this blog)
            </p>
          </div>
          <div className="list-group-item list-group-item-primary">
            Fetch All Users
            <br />
            <em>
              https://jsonplaceholder.typicode.com/users
            </em>
            <br />
            <p className='my-0 text-black-50'>Sample Response</p>
            <pre>
              &#x5B;<br />
              &nbsp; &#x7B;<br />
              &nbsp; &nbsp; "id": 1,<br />
              &nbsp; &nbsp; "name": "Leanne Graham",<br />
              &nbsp; &nbsp; "username": "Bret",<br />
              &nbsp; &nbsp; "email": "Sincere@april.biz",<br />
              &nbsp; &nbsp; "phone": "1-770-736-8031 x56442",<br />
              &nbsp; &nbsp; "website": "hildegard.org"<br />
              &nbsp; &#x7D; <br />
              &#x5D;
            </pre>
            <p className='my-2'>
              the response will be array of users, have id, name, email, phone, website and username
            </p>
          </div>
          <div className="list-group-item">
            Fetch Comments of a Blog , for a given id
            <br />
            <em>
              https://jsonplaceholder.typicode.com/posts/id/comments
            </em>
            <br />
            <p className='my-0 text-black-50'>
              example: To Fetch Comments of Blog with id - 2
            </p>
            <em>https://jsonplaceholder.typicode.com/posts/2/comments</em>
          </div>
          <div className="list-group-item list-group-item-dark">
            Fetch Details of a user, for a given id
            <br />
            <em>
              https://jsonplaceholder.typicode.com/users/id
            </em>
            <br />
            <p className="my-0 text-black-50">example: To Fetch Details of User with id - 3</p>
            <em>https://jsonplaceholder.typicode.com/users/3</em>
          </div>
          <div className="list-group-item list-group-item-light">
            Fetch Comments Made by a user, for a given id
            <br />
            <em>
              https://jsonplaceholder.typicode.com/users/id/comments
            </em>
            <br />
            <p className='my-0 text-black-50'>example: To Fetch Comments by User with id - 4</p>
            <em>
              https://jsonplaceholder.typicode.com/users/4/comments
            </em>
          </div>
          <div className="list-group-item list-group-item-secondary">
            Fetch Blogs Created by a user, for a given id
            <br />
            <em>
              https://jsonplaceholder.typicode.com/users/id/posts
            </em>
            <p className='my-0 text-black-50'>
              example: To Fetch Blogs created by User with id - 5
            </p>
            <em>https://jsonplaceholder.typicode.com/users/5/posts</em>
          </div>
          <div className="list-group-item list-group-item-info">
            <em>Use Network Console to find any more API's that are being used</em>
          </div>
        </div>
        <div className='ms-2'>
          <div className="list-group list-group-flush">
            <div className='list-group-item active'>
              <h2>
                Assignment
              </h2>
            </div>
            <div className='list-group-item'>Go through this application in detail, understand what has been done</div>
            <div className='list-group-item'>try to build, as much of this application as possible</div>
            <div className='list-group-item'>You can try to build same, less or more features</div>
            <div className='list-group-item'>you are free to use any tech/platform/language</div>
            <div className='list-group-item'>You are free to build a) webapp or b) mobile app or c)desktop app</div>
            <div className='list-group-item'>you are build SPA (react, vue etc...) or SSR (spring boot etc)</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
