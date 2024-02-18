import { FETCH_POST,CREATE_POST,DELETE_POST } from "../Action/types";

const initialState={
    posts:[]
}

export default function postReducer(state=initialState,action) {
    switch (action.type) {
        case FETCH_POST:  
            return{
                ...state,
                posts: action.payload
            } ;  //es6 syntax to copy the array instead of just assigning it  
        case CREATE_POST:
            return{
                ...state,
                posts: [...state.posts,action.payload]
            };
        
        case DELETE_POST:
             return{
                    ...state,
                    posts: state.posts.filter(post=> post.id !==action.payload)
                };
        default:
            return state;
    }
};


