const TodoNew = (props) => {
    console.log(">>> check props new add: ", props)
    const { addNewTodo } = props
    // addNewTodo('Thai')
    return (
        <div className='todo-new'>
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export { TodoNew }