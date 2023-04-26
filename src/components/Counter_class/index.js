import React, { Component } from 'react'

export default class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.add = this.add.bind(this)
    }

    add() {
        this.setState({count: this.state.count + 1})
    }

    componentDidMount() {
        console.log("componentDidMount life cycle")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate life cycle")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log({
            nextProps,
            nextState
        })
        return true;
    }

  render() {
    console.log("render life cycle")
    return (
      <div>
        <h3>Class Component</h3>
        <p>{this.state.count}</p>
        <button onClick={this.add}>Add 1</button>
    </div>
    )
  }
}
