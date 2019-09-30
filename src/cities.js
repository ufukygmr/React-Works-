import React from 'react';

import MainStore from './store';

import axios from 'axios';

import './App.css';

class Cities extends React.Component{
    constructor(props){
        super(props)
        this.state  = {
            cities: []
        }
    }   

    componentWillMount() {
        this.getCities()
    }

    getCities = () => {
        axios.get("http://138.201.16.232/properties/cities/")
        .then(res => {
            console.log(res)
            this.setState({cities: res.data})
        })
    }



    render(){
        const  arr = () => {
            let output = this.state.cities.map(item => {
                return((
                <div key = {item.id}>
                    <li>
                        {item.name} has {item.property_count} Properties
                    </li>
                </div>))
            })
            return output
        }
        return(

            <div>
                {arr()}
            </div>
        )
    }
}

export default Cities;
