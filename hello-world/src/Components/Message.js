import React, {Component} from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {message:"Welcome Jack"}
    }

    change = () => {
        return(
            this.setState({
                message : "You are subscribed!"
            })
        )
    }

    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick = {() => this.change()}>Subscribe</button>
            </div>
        )
    }
}

export default Message