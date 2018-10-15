import React, {Component} from 'react'
import {Button} from 'reactstrap'

class App extends Component {
    render(){
        return (
            <div className="App">
                <Button outline color="primary" onClick={() => this.props.history.push('/login')}>Sign in</Button>
            </div>
        );
    }
}

export default App ;