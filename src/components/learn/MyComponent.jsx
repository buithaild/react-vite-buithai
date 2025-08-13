//JSX: dich code html + js
// fragment

import './style.css'
const MyComponent = () => {
    return (
        <>
            <div>Heyyyy</div>
            <div className='child'
                style={{ borderRadius: "10px" }}
            >Child</div>
        </>

    )
}

export default MyComponent
