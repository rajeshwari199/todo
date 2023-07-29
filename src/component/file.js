import { Component, useState } from "react";
import { useState } from "react";

class Counter extends Component {
    const Counter = () => {
        const [set,setValue] = useState(0)
    render() {
        
        return(
            <div className="container">
                <h1 class="head">Counter</h1>
                <p className="para">0</p>
                <dv>
                    <button className="btn" onClick={this.onclick}>on increment</button>
                    <button className="btn" onClick={this.}>on Decrement</button>
                </dv>
            </div>
        )
    
        }
    }
}
export default Counter