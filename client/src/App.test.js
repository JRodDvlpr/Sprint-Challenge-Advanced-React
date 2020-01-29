import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import NavBar from './components/NavBar';
import * as Jest from '@testing-library/jest-dom/extend-expect';
import PlayerCards from './components/PlayerCards';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders app without crashing', () => {
  rtl.render(<App />);
});

test('player list', ()=>{
  const {getByTestId} = rtl.render (<NavBar />);
  expect(getByTestId("dark-mode")).toHaveClass("dark-mode__toggle")
});

test('reflects World Cup', () =>{
  const {getAllByText} = rtl.render (<NavBar />);
  getAllByText(/World/i);
  getAllByText(/Cup/i);
});

it('renders Player Card', () => {
  const tree = renderer.create(<PlayerCards />).toJSON();
  expect(tree).toMatchSnapshot();
});