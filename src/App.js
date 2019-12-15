import React from 'react';

import { CardList } from './components/CardList/CardList.jsx'
import { SearchBox } from './components/SearchBox/SearchBox'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: ''
    }
  };

  onSearchChange = (e) => {
  this.setState({searchField: e.target.value})
}

componentDidMount() {
  fetch('http://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => this.setState({monsters: users}))
}

  render() {
    //destructuring
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )  
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
      <SearchBox 
        placeholder='search monsters'
        onSearchChange={this.onSearchChange}
      />
      <CardList monsters={filteredMonsters}/>

      </div>
    );
  }
}

export default App;
