import React from 'react';

const BlogCard = ({ entry, index }) => {
  return (
    <div key={index} className='list-group-item list-group-item-action'>
      <div className='d-flex justify-content-between'>
        <h5 className='mb-1'>{entry.title}</h5>
        <small>
          <a href='d'>View</a>
        </small>
      </div>
      <p className='mb-1'>{entry.body}</p>
      <div className='d-flex justify-content-end'>
        <a className='text-body-secondary'>By: {entry.name}</a>
      </div>
    </div>
  )
}
export default BlogCard;