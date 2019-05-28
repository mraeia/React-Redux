import { combineReducers } from 'redux';
import { reducer as formRdeucer } from 'redux-form';


var initialList = [
        {name: "Moustafa", age: '23'},
        {name: "Aly", age: '25'},
        {name: "Mo", age: '23'}
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

const selectElementReducer = (element = null,action) => {
    if (action.type === 'ELEMENT_SELECTED'){
        return action.payload
    }

    return element;
}

const authChangeReducer = (Auth = null,action) =>{
    if (action.type === 'AUTH_CHANGED'){
        return action.payload
    }

    return Auth;
}

export default combineReducers({
    list: listReducer,
    selectedElement: selectElementReducer,
    signInState: authChangeReducer,
    form: formRdeucer
});