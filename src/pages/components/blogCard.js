import React from 'react';

const BlogCard = ({entry, index}) => {
  return (
    <div>
      <div key={index} className='border-bottom mt-1 p-2'>
        <div className='d-flex justify-content-between'>
          <h5 className='mb-1'>{entry.title}</h5>
          <small>
            <a href='d'>View</a>
          </small>
        </div>
        <p>{entry.body}</p>
        <div className='text-end'>
          <a className='text-body-secondary'>By: {entry.name}</a>
        </div>
      </div>
    </div>
  )
}
export default BlogCard;