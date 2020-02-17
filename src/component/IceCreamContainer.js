import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream, refillIceCream } from '../redux'


function IceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    
    if(numOfIceCreams>0){
        return (
            <div>
                <h2>Number of Ice Cream - {numOfIceCreams}</h2>
                <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>&emsp;
                <button onClick={() => dispatch(refillIceCream())}>Add Stock for Ice Cream</button>
            </div>
        )
    }
    else{
        return (
            <div>
                <h2>Number of Ice Cream - Out Of stock!!!</h2>
                <button onClick={() => dispatch(refillIceCream())}>Add Stock for Ice Cream</button>
            </div>
        )        
    }
}

export default IceCreamContainer
