// rcc快捷键
import React, { Component } from 'react'

export default class Test1 extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Test1{this.props.match.params.id}</h1>
            </div>
        )
    }
}
