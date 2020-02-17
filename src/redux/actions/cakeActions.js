import { BUY_CAKE, REFILL_CAKE } from "../types/cakeTypes";

export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

export const refillCake = () => {
    return {
        type: REFILL_CAKE
    }
}