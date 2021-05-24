import Counter from '../components/counter'
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction,
} from '../redux/actions/counter_action'
import { connect } from 'react-redux'

// 简写方式
// 这里的state是store所管理的那个最大的对象，里面包含着所有的状态
export default connect(state => ({ count: state.count, person: state.person }), {
	increment: createIncrementAction,
	decrement: createDecrementAction,
	incrementAsync: createIncrementAsyncAction,
})(Counter)
