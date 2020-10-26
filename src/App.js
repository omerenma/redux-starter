import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import './App.css';
import Count from './components/getData'
import Table from './components/Table'
import PersonList from './components/PersonList'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Redux Work</h1>
      <Count />
      {/* <Table /> */}
      <PersonList />
    </div>
    </Provider>
  );
}

export default App;
