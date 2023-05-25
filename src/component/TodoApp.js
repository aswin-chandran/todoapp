import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
  state = {
    input: "",
    itmes:[]
  };
  onHandleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems=event=>{
    event.preventDefault();
    const { input } = this.state; 
    
    this.setState({
      itmes:[...this.state.itmes,input],
      input:""
    })
  };

  deletItem= key =>{
    const allItems=this.state.itmes
    allItems.splice(key,1);
    
    this.setState({
      itmes:allItems
    })

  }
 
  render() {
    const { input,itmes } = this.state;
    console.log(itmes);
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>TodoApp</h1>

          <input
            type="text"
            value={input}
            onChange={this.onHandleChange}
            placeholder="Enter Text.."
          />
        </form>

        <ul>
        
            {itmes.map((data,index)=>(
              <li key={index}>{data}<i onClick={()=>this.deletItem(index)} className="fa-solid fa-trash"></i></li>
            ))}
       
        </ul>
      </div>
    );
  }
}
export default TodoApp;
