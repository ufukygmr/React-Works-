import React from 'react';

import MainStore from './store';
import List from './list'; 
import AddTask from './addtask';
import Cities from './cities';

import {observer} from 'mobx-react'
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state  = {

    }
  }
  render(){
    return(
      <div>
        <List />
        <AddTask />
        <Cities/>
      </div>

    )
  }
}

export default App;
