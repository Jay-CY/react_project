import React, { Component } from 'react'
import { createIncrementAction, createDecrementAction } from './redux/action_creator'

export default class App extends Component {
	componentDidMount() {
		console.log(this.props.store)
	}

	// 加法
	increment = () => {
		// value获取到的是字符串
		let { value } = this.refs.selectNumber
		this.props.store.dispatch(createIncrementAction(value * 1))
		// this.setState({ count: count + value * 1 })
	}

	// 减法
	decrement = () => {
		// value获取到的是字符串
		let { value } = this.refs.selectNumber
		this.props.store.dispatch(createDecrementAction(value * 1))
		// let { count } = this.state
		// this.setState({ count: count - value * 1 })
	}

	incrementIfOdd = () => {
		// value获取到的是字符串
		let { value } = this.refs.selectNumber
		// let { count } = this.state
		let count = this.props.store.getState()
		if (count % 2 === 1) {
			this.props.store.dispatch(createIncrementAction(value * 1))
		}
	}

	incrementIfAsync = () => {
		// value获取到的是字符串
		let { value } = this.refs.selectNumber
		// let { count } = this.state
		setTimeout(() => {
			// this.setState({ count: count + value * 1 })
			this.props.store.dispatch(createIncrementAction(value * 1))
		}, 1000)
	}

	render() {
		// let { count } = this.state
		let count = this.props.store.getState()
		return (
			<div>
				<h3>当前计数为{count}</h3>
				<select ref="selectNumber">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
				<button onClick={this.incrementIfAsync}>increment async</button>&nbsp;
			</div>
		)
	}
}
