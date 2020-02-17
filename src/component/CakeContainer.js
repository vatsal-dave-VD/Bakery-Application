import React from 'react'
import { connect } from 'react-redux'
import { buyCake, refillCake } from '../redux'

function CakeContainer(props) {
    if(props.numOfCakes>0){
        return (
            <div>
                <h2>Number of Cake - {props.numOfCakes}</h2>
                <button onClick={props.buyCake}>Buy Cake</button>&emsp;
                <button onClick={props.refillCake}>Add Stock for Cake</button>
            </div>
        )
    }
    else{
        return (
            <div>
                <h2>Number of Cake - Out Of stock!!!</h2>
                <button onClick={props.refillCake}>Add Stock for Cake</button>
            </div>
        )        
    }
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        refillCake: () => dispatch(refillCake())
    }
}

export default connect(
        mapStateToProps, 
        mapDispatchToProps
    )(CakeContainer)