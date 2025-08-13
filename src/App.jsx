import './components/todo/todo.css'
import './components/todo/TodoNew'
import { TodoNew } from './components/todo/TodoNew'
import { TodoData } from './components/todo/TodoData'
import reactLogo from './assets/react.svg'

const App = () => {

  const val = 'Thai'
  const val1 = 26
  const data = {
    address: "Ha Noi",
    country: "Viet Nam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData
        name={val}
        age={val1}
        data={data}
      />
      <div className='todo-image'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
