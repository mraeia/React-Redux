export const addToList = (element) => {
    return {
        type: "ADD_TO_LIST",
        payload: element
    }
}

export const elementClick = (element) => {
    return {
        type: "ELEMENT_SELECTED",
        payload: element
    }
}