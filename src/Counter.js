import React from "react";

import "./Counter.css";
 
class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            counter:0,

        };
        
    }
    reset(){
        this.setState(() =>{
            return{
                counter:0,
            }
        })
    }
    increment(){
        // this.state.counter++;
        this.setState((prevState) =>{
            return{
                counter : prevState.counter+1,
            }
        })
    }

    decrement(){
        this.setState((prevState) =>{
            if(prevState.counter>0)return{
                counter : prevState.counter -1,
            }
        })
    }

    render(){
        return(
            <div className="counter-container">
                <h2 className="counter-value">{this.state.counter}</h2>
                <button className="increment" onClick={() => {
                    console.log("Button clicked1");
                    this.increment();
            }}>Increment</button>
                <button className="decrement" onClick={() => {
                    console.log("Button clicked2");
                    this.decrement();
            }}>Decrement</button>
            <button className="reset" onClick={() => {
                    console.log("Button clicked3");
                    this.reset();
            }}>Reset</button>
                
            </div>
        );
    }
}
export default Counter;