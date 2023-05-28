import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
  state = {
    input: "",
    items:[]
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
      items:[...this.state.items,input],
      input:""
    })
  };

  deletItem= key =>{
    
    
    this.setState({
      items:this.state.items.filter((data,index)=> index!==key)
    });

  }
 
  render() {
    const { input,items } = this.state;
    console.log(items);
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
        
            {items.map((data,index)=>(
              <li key={index}>{data}<i onClick={()=>this.deletItem(index)} className="fa-solid fa-trash"></i></li>
            ))}
       
        </ul>
      </div>
    );
  }
}
export default TodoApp;
