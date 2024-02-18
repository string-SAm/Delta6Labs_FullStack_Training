import axios from "axios";
import { CREATE_POST, FETCH_POST, DELETE_POST } from "./types";

const API_URL = "http://localhost:5001/posts"

export const fetchPost =()=> async (dispatch) => {
    const response = await axios.get(API_URL)
    dispatch({ type: FETCH_POST, payload: response.data })
}

export const createPost =(postData)=> async (dispatch) => {
    const response = await axios.post(API_URL,postData)
    dispatch({ type: CREATE_POST, payload: response.data })
}

export const deletePost =(postId)=> async (dispatch) => {
    await axios.delete(`${API_URL}/${postId}`)
    dispatch({ type: DELETE_POST, payload: postId })
}