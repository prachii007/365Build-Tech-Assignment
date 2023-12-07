import React from 'react'
import { useState, useEffect } from 'react';
import BlogCard from './components/blogCard';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);
  const combinedEntries = [];
  const navigate = useNavigate()

  const getBlogs = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(blogArray => {
        setBlogs(blogArray);
      })
  }

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(userArray => {
        setUsers(userArray);
      })
  }

  for (let i = 0; i < blogs.length; i++) {
    const index = Math.floor(i / 10);
    if (users[index]) {
      combinedEntries.push({ ...blogs[i], ...users[index] });
    } else {
      combinedEntries.push(blogs[i]);
    }
  }

  const goToSinglePostPage = (entry, index) => {
    navigate(`/individualpost/${parseInt(entry.userId) - 1}/${index % 10}`)
  }

  const goToSingleUserPage = (entry) => {
    navigate(`/individualuser/${parseInt(entry.userId) - 1}`)
  }

  useEffect(() => {
    getBlogs();
    getUsers();
  }, [1]);

  return (
    <div className='container'>
      <div className='my-3 d-flex justify-content-between'>
        <h2 className=''>List of Blogs</h2>
        <button className='btn btn-primary'>
          <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" role="img" focusable="false">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
            <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"></path>
          </svg>
        </button>
      </div>
      <div className='list-group'>
        {combinedEntries.map((entry, index) => {
          return (
            <BlogCard entry={entry} index={index} goToSinglePostPage={goToSinglePostPage} goToSingleUserPage={goToSingleUserPage} />
          )
        })}
      </div>
    </div>
  )
}
export default Blogs;
