import './components/todo/todo.css'
import './components/todo/TodoNew'
import { TodoNew } from './components/todo/TodoNew'
import { TodoData } from './components/todo/TodoData'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([

    { id: 1, name: 'Learning English' },
    { id: 2, name: 'Watching YT' },
  ])

  const val = 'Thai'
  const val1 = 26
  const data = {
    address: "Ha Noi",
    country: "Viet Nam"
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000),
      name: name
    }

    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // addNewTodo()
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={val}
        age={val1}
        data={data}
        todoList={todoList}

      />
      <div className='todo-image'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
