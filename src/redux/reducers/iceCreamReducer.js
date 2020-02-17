import { BUY_ICECREAM, REFILL_ICECREAM } from "../types/iceCreamTypes";

const initialState = {
    numOfIceCreams: Number(prompt('Enter the opening stock for ice-cream',1))
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: 
            let quantity = Number(prompt('Enter number of ice-creams to purchase',1))
            if((state.numOfIceCreams-quantity)>-1){
                return {
                    ...state,
                    numOfIceCreams: state.numOfIceCreams - quantity
                }
            }
            else{
                alert("We don't have that much stock for now!!!")
            }
            return state

        case REFILL_ICECREAM:
            let refillQuantity = Number(prompt('Enter the quantity of ice cream\\s added',0))
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams + refillQuantity
            }
        
        default:
            return state
    }
}

export default iceCreamReducer