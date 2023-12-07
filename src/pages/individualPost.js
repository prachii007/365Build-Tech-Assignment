import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommentCard from './components/commentCard';

const IndividualPost = () => {
    const [post, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    const { user, posts } = useParams()
    let users = (parseInt(user) + 1).toString();
    let ids = ((parseInt(posts) + 1) + (10 * parseInt(user))).toString();

    const getPosts = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${users}/posts`)
            .then(Response => Response.json())
            .then(postArray => setPosts(postArray))
    }
    const getComments = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${ids}/comments`)
            .then(Response => Response.json())
            .then(commentsArray => setComments(commentsArray))
    }

    useEffect(() => {
        getPosts();
        getComments();
    }, [1])

    console.log("each post page", comments)
    return (
        <div className='container'>
            <h1 className='mt-3 mb-5'>{post[posts]?.title}</h1>
            <div className='d-flex'>
                <div>{post[posts]?.body}</div>
                <div className='ms-2'>
                    <h6>comments</h6>
                    <div className='list-group'>
                        {
                            comments.map((item, index) => {
                                return (
                                    <CommentCard key={index} item={item} index={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IndividualPost;