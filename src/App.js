import React, {Component} from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            displayBio: false,
        }
    }

    toggleDisplayBio = () => {
        this.setState((prevState) => {
           return {displayBio: !prevState.displayBio}; 
        }); 
    };

    showof = ()=>{
        
        let list = [];
        for(let i =0; i<3; i++){
            list.push(
                     <div>
                         <p>hey {i}</p>
                         <p>Michael is the best {i}</p>
                      </div>
                     );            
        }
        return list;    
    }

    render(){
        // let showa = this.showof();
        
        
        return(
            <div>
                <h1>Hello You</h1> 
                <h3>Michael Fridman</h3>
                {this.showof()}
                {
                    this.state.displayBio ? (
                    <div>
                        <p>My favorite language is javascript</p>
                        <p>Beside code I love to travel across the world</p>
                        <p>World is changing </p>
                        <p>i'm happy to be programer </p>
                        <button onClick={this.toggleDisplayBio}>Show Less</button>
                    </div>
                    ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div>
                    )
                }
            </div>
        )
    };
}
export default App;