import React from 'react';

const BlogCard = ({ entry, index, goToSinglePostPage, goToSingleUserPage }) => {
  return (
    <div className='list-group-item list-group-item-action'>
      <div className='d-flex justify-content-between'>
        <h5 className='mb-1'>{entry.title}</h5>
        <button onClick={goToSinglePostPage.bind(this, entry, index)}  className='btn text-decoration-underline link-underline-primary text-primary'><small>View</small></button>
      </div>
      <p className='mb-1'>{entry.body}</p>
      <div className='d-flex justify-content-end'>
        <button onClick={goToSingleUserPage.bind(this, entry)} className='btn'  ><a className='text-body-secondary'>By: {entry.name}</a></button>
      </div>
    </div>
  )
}
export default BlogCard;