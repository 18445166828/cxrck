import React, {Component,Fragment,createContext} from 'react';
import {render} from "react-dom";

console.log(createContext());

const {
    Provider,
    Consumer:consumerCounter
} = createContext()

class CounterBtn extends Component{
    render(){
        return(
            <button>{this.props.children}</button>
        )
    }
}

class Counter extends Component{
    render(){
        return(
            <span>{10}</span>
        )
    }
}

class Appp extends Component{
    render(){
        return(
            <Fragment>
                <CounterBtn>-</CounterBtn>
                <Counter />
                <CounterBtn>+</CounterBtn>
            </Fragment>
        ) 
    }
}

render(
    <Provider>
        <Appp />
    </Provider>, 
    document.getElementById('root')
)

export default Appp;