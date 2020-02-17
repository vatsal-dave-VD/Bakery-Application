import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake, refillCake } from '../redux'


function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    
    if(numOfCakes>0){
        return (
            <div>
                <h2>Number of cakes - {numOfCakes}</h2>
                <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>&emsp;
                <button onClick={() => dispatch(refillCake())}>Add Stock for Cake</button>
            </div>
        )
    }
    else{
        return (
            <div>
                <h2>Number of Cake - Out Of stock!!!</h2>
                <button onClick={() => dispatch(refillCake())}>Refill Cake</button>
            </div>
        )        
    }
}

export default HooksCakeContainer
