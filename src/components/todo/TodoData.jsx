
const TodoData = (props) => {
    //props là 1 object
    console.log(">>> check props: ", props)

    //Destructuring
    const { name, age, data } = props;
    return (
        <div className='todo-data'>
            <div>Learning Math</div>
            <div>Watching TT</div>
            <div>My name is {name}</div>
            <div>My age is {age}</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export { TodoData }