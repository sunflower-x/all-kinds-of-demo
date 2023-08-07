import {ADD_ITEM,CHANGE_VALUE} from './constants'


export const add_item=(data)=>{
    return {
        type:ADD_ITEM,
        data,
    }
}

export const change_value=(data)=>{
    return {
        type:CHANGE_VALUE,
        data,
    }
}