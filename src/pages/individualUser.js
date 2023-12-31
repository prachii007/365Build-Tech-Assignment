import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const IndividualUser = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([])

    let { id } = useParams()
    const navigate = useNavigate()

    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(Response => Response.json())
            .then(userArray => setUsers(userArray))
    }

    const getPosts = () => {
        let ids = (parseInt(id) + 1).toString()
        fetch(`https://jsonplaceholder.typicode.com/users/${ids}/posts`)
            .then(Response => Response.json())
            .then(postsArray => setPosts(postsArray))
    };

    const getComments = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/comments`)
            .then(Response => Response.json())
            .then(commentsArray => setComments(commentsArray))
    }

    const goToSinglePostPage = (index) => {
        navigate(`/individualpost/${id}/${index}`)
    }

    useEffect(() => {
        getUsers();
        getPosts();
        getComments();
    }, [1])


    return (
        <div className='container'>
            <h1 className='mt-3 mb-5'>   {users[id] ? users[id].name : ""}         </h1>
            <div className='d-flex'>
                <div>
                    <h5>posts</h5>
                    <div className='list-group'>
                        {
                            posts.map((item, index) => {
                                return (
                                    <button key={index} className='list-group-item' onClick={goToSinglePostPage.bind(this, index)}>
                                        {item.title}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='ms-2'>
                    <h6>comments</h6>
                    <div className='list-group'>
                        {comments.map((item, index) => {
                            return (
                                <div className='list-group-item' key={index}>{item.body}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualUser;
