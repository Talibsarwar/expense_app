const TransactionReducer = ((state, action)=>{
    switch(action.type){
        case "ADD TRANSACTION":
              return[action.payload , ...state]
        
        case "DELETE_TRANSACTION":
            state = state.filter((_object, index) => index !== action.payload)
            return [...state]

        default:
            return state;
    }
})

export default TransactionReducer;