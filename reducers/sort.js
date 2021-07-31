


var initialState=1;
const sort=(state=initialState,action)=>{
    switch(action.type){
        case "SORT":
            return action.sort;
        default:
            return state;
    }
}

export default sort;