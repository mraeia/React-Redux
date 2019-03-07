const addToList = (element) => {
    return {
        type: "ADD_TO_LIST",
        payload: element
    }
}

export default addToList;