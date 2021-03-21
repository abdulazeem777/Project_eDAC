import React, { Component } from 'react';
import Poc1serv from '../services/Poc1serv';

class Poc1 extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            userobj : []
        }
    }

    componentDidMount(){
        Poc1serv.getusername().then((resp) => {
        this.setState({ userobj : resp.data});
        });
    }
    render() {
        return (
            <div>
                {this.state.userobj.map()}
            </div>
        );
    }
}

export default Poc1;