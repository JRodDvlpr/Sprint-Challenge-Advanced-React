import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import axios from 'axios';
import PlayerCards from './components/PlayerCards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        this.setState({ players: res.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
       <div>
        <NavBar />
       </div>
       <div data-testid="player-list">
         {this.state.players.map(data =>(
           <PlayerCards id={data.id} key={data.id} country={data.country} searches={data.searches} name={data.name} />
         ))}
       </div>
      </div>
    );
  }
}


export default App;
