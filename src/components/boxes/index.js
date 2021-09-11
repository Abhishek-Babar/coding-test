import React, { Component } from "react";
import "./style.css"
class Boxes extends Component {
    constructor(props){
        super(props);
        this.state = {
           count: 0,
           boxInfo: []
        }
    }
     boxCheck = (e) => {
            const box = e.currentTarget;
            box.style.backgroundColor = "red";
            if(this.state.count < 2) {
            this.setState({count: this.state.count += 1, boxInfo: [...this.state.boxInfo , box.id]})
            } else {
                const boxes = this.state.boxInfo;
                const firstBox = document.getElementById(boxes[0]);
                firstBox.style.backgroundColor = "blue";
                boxes.shift();
                boxes.push(box.id)
                this.setState({count: 2, boxInfo: [...boxes]})
            }
    }
    render(){
    return(
        <div className="box-wrap">
            <div id="1" onClick={this.boxCheck} className="box"></div>
            <div id="2" onClick={this.boxCheck} className="box"></div>
            <div id="3" onClick={this.boxCheck} className="box"></div>
            <div id="4" onClick={this.boxCheck} className="box"></div>
            <div id="5" onClick={this.boxCheck} className="box"></div>
            <div id="6" onClick={this.boxCheck} className="box"></div>
            <div id="7" onClick={this.boxCheck} className="box"></div>
            <div id="8" onClick={this.boxCheck} className="box"></div>
            <div id="9" onClick={this.boxCheck} className="box"></div>
            <div id="10" onClick={this.boxCheck} className="box"></div>
            <div id="11" onClick={this.boxCheck} className="box"></div>
            <div id="12" onClick={this.boxCheck} className="box"></div>
            <div id="13" onClick={this.boxCheck} className="box"></div>
            <div id="14" onClick={this.boxCheck} className="box"></div>
            <div id="15" onClick={this.boxCheck} className="box"></div>
            <div id="16" onClick={this.boxCheck} className="box"></div>
        </div>
    )
    }
}

export default Boxes;