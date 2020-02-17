import { BUY_ICECREAM, REFILL_ICECREAM } from "../types/iceCreamTypes";

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}

export const refillIceCream = () => {
    return {
        type: REFILL_ICECREAM
    }
}