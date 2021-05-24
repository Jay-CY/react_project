import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import App from './App'

ReactDOM.render(<App store={store} />, document.getElementById('root'))

store.subscribe(() => {
	// subscribe订阅了store内部状态的修改，只要一修改就调用subscribe这个函数
	// 调用该函数时执行render
	ReactDOM.render(<App store={store} />, document.getElementById('root'))
})
