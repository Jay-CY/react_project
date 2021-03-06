import React, { Component } from 'react'

export default class Counter extends Component {
	componentDidMount() {
		console.log(this.props)
	}

	// 加法
	increment = () => {
		// value获取到的是字符串
		let { value } = this.refs.selectNumber
    this.props.increment(value*1)
	}

	// 减法
	decrement = () => {
		// value获取到的是字符串
		let { value } = this.refs.selectNumber
    this.props.decrement(value*1)
	}

	incrementIfOdd = () => {
		// value获取到的是字符串
		let { value } = this.refs.selectNumber
		let {count} = this.props
		if (count % 2 === 1) {
			this.props.increment(value*1)
		}
	}

	incrementIfAsync = () => {
		// value获取到的是字符串
		let { value } = this.refs.selectNumber
    this.props.incrementAsync(value*1, 1000)
		// setTimeout(() => {
    //   this.props.increment(value*1)
		// }, 1000)
	}

	render() {
		// let { count } = this.state
		// let count = this.props.store.getState()
		return (
			<div>
        <h3>当前计数为{this.props.count},当前store中有{this.props.person.length}个人</h3>
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
