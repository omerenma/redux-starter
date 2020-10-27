import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import './App.css';
import Count from './components/getData'
import Table from './components/Table'
import PersonList from './components/PersonList'
import MUITABLE from './components/MUITables/MuiTables'
import Register from './components/ui/Register'
import YesOrNo from './components/ui/YesOrNo'
import PaginationUI from './components/ui/PaginationUI'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Redux Work</h1> 
      {/* <Count /> */}
      {/* <Register /> */}
      {/* <Table /> */}
      {/* <PersonList /> */}
      {/* <YesOrNo /> */}
      {/* <MUITABLE /> */}
      <PaginationUI />
      
    </div>
    </Provider>
  );
}

export default App;
