//JSX: dich code html + js
// fragment

import './style.css'
const MyComponent = () => {
    // const val = "Heyyy" // string
    // const val = 23 // number
    // const val = true // boolean
    // const val = undefined
    // const val = null
    // const val = [1, 2, 3]
    const val = {
        name: "Thai",
        age: 26
    }
    return (
        <>
            {/* <div>{val.name} & You</div> */}
            <div>{JSON.stringify(val)} & You</div>
            <div>{console.log("Hello")}</div>
            <div className='child'
                style={{ borderRadius: "10px" }}
            >Child</div>
        </>

    )
}

export default MyComponent
