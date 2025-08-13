
const TodoData = (props) => {
    //props là 1 object
    const { todoList } = props
    console.log(">>> check props: ", todoList)

    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log(">>> check:", item, "--- ", index);

                return (
                    <div className={`todo-item`} key={item.index}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export { TodoData }