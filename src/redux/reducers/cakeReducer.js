import { BUY_CAKE, REFILL_CAKE } from "../types/cakeTypes";

const initialState = {
    numOfCakes: Number(prompt('Enter the opening stock for cakes',1))
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: 
            let quantity = Number(prompt('Enter number of cakes to purchase',1))
            if((state.numOfCakes-quantity)>-1){
                return {
                    ...state,
                    numOfCakes: state.numOfCakes - quantity
                }
            }
            else{
                alert("We don't have that much stock for now!!!")
            }
            return state

        case REFILL_CAKE:
            let refillQuantity = Number(prompt('Enter the quantity of cake\\s added',0))
            return{
                ...state,
                numOfCakes: state.numOfCakes + refillQuantity
            }
        
        default:
            return state
    }
}

export default cakeReducer