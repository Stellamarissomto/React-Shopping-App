import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form';
import DeleteList from './DeleteList';
import Items from './Items';

class App extends React.Component {
  state = {
    items: [],
  };

 handleAddItem = item => {
    this.setState(prevState => ({ items: [...prevState.items, item] }));
  };  

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Maris - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <Form onAdd = {this.handleAddItem } />
        <DeleteList 
         onDelete = {this.deleteLastItem}
         noItem = {this.noItemsFound()}
         />

        <Items myItem = {this.state.items} />
    </div>
    );
  }
}

export default App;
