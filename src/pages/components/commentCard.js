import React from 'react'

const CommentCard = ({ item, index }) => {
  return (
    <div className='list-group-item'>
      <p>{item.body}</p>
      <div className='d-flex justify-content-end'>
        <small>
          <em>by {item.email}</em>
        </small>
      </div>
    </div>
  )
}
export default CommentCard;
