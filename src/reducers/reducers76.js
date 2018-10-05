import {
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT,
    RECEIVE_POSTS,
    REQUEST_POSTS
} from '../actions/actions';

export const selectedSubreddit =  (state = 'reactjs', action) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state;
    }
} 
