
const TodoData = (props) => {
    //props là 1 object
    console.log(">>> check props: ", props)

    //Destructuring
    const { name, age, data } = props;
    return (
        <div className='todo-data'>
            <div>My name is {props.name}</div>
            <div>My age is {props.age}</div>
            <div>My data address is {props.data.address}</div>
            <div>My data country is {props.data.country}</div>
            <div>Learning React</div>
            <div>Watching yt</div>

            <div>C2 My name is {name}</div>
            <div>C2 My age is {age}</div>
            <div>C2 My data address is {data.address}</div>
        </div>
    )
}

export { TodoData }