import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPost } from './Redux/Action/postAction'

const PostForm=({createPost})=>{
    const [title,setTitle]=useState('')

    const onSubmit=(e)=>{
        e.preventDefault()
        createPost({title})
        setTitle('')
    }

    return(
        <div>
            <h2>ADD POST</h2>
            <form onSubmit={onSubmit}>
                <label>Title</label>
                <br/>
                <input type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default connect(null, {createPost})(PostForm)