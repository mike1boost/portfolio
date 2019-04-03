import React, {Component} from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            dispalyBio: false,
        }
    }
    render(){
        return(
            <div>
                <h1>Hello You</h1> 
                <h3>Michael Fridman</h3>
                {
                    this.state.dispalyBio ? (
                    <div>
                        <p>My favorite language is javascript</p>
                        <p>Beside code I love to travel across the world</p>
                        <p>World is changing </p>
                        <p>i'm happy to be programer </p>
                    </div>
                    ) : null
                }
            </div>
        )
    };
}
export default App;