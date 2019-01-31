import types from './types';

export function getList(){
    return{
        type: types.GET_LIST,
    } 
}

export function addItem(item){
    return{
        type: types.ADD_ITEM,
        payload: item
    } 
}

export function deleteItem(i){
    return{
        type: types.DELETE_ITEM,
        payload: i
    } 
}