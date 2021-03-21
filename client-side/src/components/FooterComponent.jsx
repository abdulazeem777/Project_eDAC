import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">eDAC BATCH-SEP, 2020 (200950181105 , 200950181001 , 200950181053 , 200950181033)</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
