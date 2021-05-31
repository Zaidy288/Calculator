import React, { Component } from 'react';
import './App.css';
import Result from './Components/Result';
import KeyPad from "./Components/KeyPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculator</h1>
                    <Result result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
