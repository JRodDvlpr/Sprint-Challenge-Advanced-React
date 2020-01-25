import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, waitForElement } from '@testing'
import Navbar from './components/NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders app without crashing', () => {
  render(<App />);
});

test('player list', ()=>{
  const container = render (<NavBar />);
  container.getTestId("player-list");
});

test('reflects World Cup', () =>{
  const container = render (<Navbar />);
  container.getAllByText(/World/i);
  container.getAllByText(/Cup/i);
});