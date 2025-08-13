const TodoNew = (props) => {
    console.log(">>> check props new add: ", props)
    const { addNewTodo } = props
    // addNewTodo('Thai')

    const handleClick = () => {
        alert('click me')
    }

    // const handleOnChange = (event) => {
    //     console.log(">>> handleOnChange", event.target.value)
    // }

    const handleOnChange = (name) => {
        console.log(">>> handleOnChange", name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                // onChange={handleOnChange}
                onChange={(event) => { handleOnChange(event.target.value) }}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            > Add</button >
        </div >
    )
}

export { TodoNew }