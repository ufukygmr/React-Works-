import React from 'react';
import {observer} from 'mobx-react'

import MainStore from './store';


import './App.css';

class AddTask extends React.Component{
    constructor(props){
        super(props)
        this.state  = {

        }
    }
    render(){
        const arr = MainStore.tasks.map(item => {
            let output = null 
            output = ((
                <li key = {item.id}>{item.task}</li>
            ))
            return output
        })
        return(
        <div>
            <ul>
                {arr}
            </ul>
        </div>
        )
    }
}

export default AddTask;
