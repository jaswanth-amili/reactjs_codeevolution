import React from "react";

const Hello = () => {
    // return (
    //     <div className="dummyClass">
    //         <h2>JSX here</h2>
    //     </div>
    // )
    return (
        React.createElement(
            'div',
            {className:'dummyClass'},
            React.createElement('h2',null,"JS Here")
        )
    )
}

export default Hello