import React from "react";

export function Greet(props){
    return (
        <div>
            <h3>Hello {props.name}!</h3>
            <h4>I am {props.age} years old</h4>
            {props.children}
        </div>
    )

}

// export default Greet