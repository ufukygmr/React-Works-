import React from 'react';

import MainStore from './store';

import {observer} from 'mobx-react'
import './App.css';

class List extends React.Component{
    constructor(props){
            super(props)
        this.state  = {
            currentTask : null
        }
    }

    updateTask = (data) => {
        this.setState({currentTask: data})
    }

    handleTask = () => {
        let id1 = MainStore.lastestTaskId
        let task = {
            task: this.state.currentTask,
            id: id1 + 1
        }
        MainStore.tasks = [
            task,
            ...MainStore.tasks
        ]

        MainStore.lastestTaskId = id1 + 1

        console.log(MainStore.tasks)
    }


    render(){
        return(
            <div>
                <p>Send Nudes</p>
                <textarea onChange = {(event) =>  this.updateTask(event.target.value)} />    
                <button type = "submit" onClick = {this.handleTask}>Send My Nude </button> 
            </div>
            
        )
    }
}

export default List;
