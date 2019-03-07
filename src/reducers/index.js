import { combineReducers } from 'redux';


var initialList = [
        {name: "Moustafa", age: 23},
        {name: "Aly", age: 25},
        {name: "Mo", age: 23}
];

const listReducer = (list = initialList,action) => {
    if (action.type === 'ADD_TO_LIST') {
        return [
            ...list,
            action.payload
        ]
    }
    return list;
}

export default combineReducers({
    list: listReducer,
});