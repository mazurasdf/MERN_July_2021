import React, {Component} from "react";
var randomColor = require('randomcolor'); 

class Pixel extends Component{
    constructor(props){
        super(props);
        this.state = {
            fillColor: "white",
            filled: false
        }
    }

    render(){
        const onClickHandler = () => {            
            this.setState({
                fillColor: randomColor(),
                filled: !this.state.filled
            })
        }

        const style={
            backgroundColor: this.state.filled ? this.state.fillColor : "whitesmoke"
        }

        return(
            <div onClick={onClickHandler} style={style} className="pixel"></div>
        )
    }
}

export default Pixel;