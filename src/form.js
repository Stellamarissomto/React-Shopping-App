import React, { Component } from 'react'

class Form extends Component {
  state = {
   value: '' 
  }
  
   handleChange = event => {
    this.setState({ value: event.target.value });
  };

 
 addItem = event => {
    event.preventDefault();
    this.props.onAdd(this.state.value);
  };

 inputIsEmpty = () => {
    return this.state.value === '';
  };

 
  render () {
    const { value } = this.state
  return (
    <div>
    <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>

    </div>
  
  )
  }
}

export default Form;
