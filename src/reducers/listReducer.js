import types from '../actions/types';

let listArray = []

const DEFAULT_STATE = {
    list: listArray,
}

export default (state=DEFAULT_STATE,action)=>{
    switch(action.type){
        case types.GET_LIST:
            return {...state};
        case types.ADD_ITEM:
            listArray.push(action.payload.name);
            return {...state, list: listArray};
        case types.EDIT_ITEM:
            listArray.push(action.payload.name);
            return {...state, list: listArray};
        case types.DELETE_ITEM:
            let index = action.payload;
            listArray.splice(index,1);
            return {...state};
        default:
            return state;
    }
};