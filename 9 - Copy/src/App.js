import React, { Component } from 'react';
import './App.css';
import Menu from './Component/Menu';
import List from './Component/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusForm: true
    }
  }
  showForm = () => {
    if (this.state.statusForm) {
      return <List />
    }
  }
  changeStatusForm = (event) => {
    event.preventDefault();
    this.setState({
      statusForm: !this.state.statusForm
    })
  }

  render() {
    return (
      <div className=" container section">
        <Menu formToggle={(e) => this.changeStatusForm(e)} />
        {this.showForm()}
      </div>
    );
  }
}
export default App;
