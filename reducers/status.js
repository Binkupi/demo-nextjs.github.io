


var initialState=true;
const status=(state=initialState,action)=>{
    switch(action.type){
        case "TOGGLE_STATUS":
            return action.status;
        default:
            return state;
    }
}

export default status;