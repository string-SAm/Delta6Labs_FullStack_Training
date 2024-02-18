import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from './Redux/Action/postAction'


export const PostList = ({ fetchPost, deletePost,posts }) => {

    useEffect(() => {
        fetchPost()
    }, [fetchPost])

    return (
        <div>
            <h2>
                POSTS
            </h2>
            <ul>{posts.map(post => (
                <li key={post.id}>
                    {post.title} {' '}
                    <button onClick={() => { deletePost(post.id) }}>Delete</button>
                </li>
            ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    posts:state.posts.posts
})

export default connect(mapStateToProps, {fetchPost,deletePost})(PostList)