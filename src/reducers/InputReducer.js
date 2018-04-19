export const InputReducer = (state = '', action) => {
    switch(action.type){
        case 'ADD_CONTENT':
            return  state = action.text;
        default: 
            return state;
    }
}