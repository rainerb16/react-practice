import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory'; 

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish => {
        // To update State!
        // 1. Take copy of exisiting State
        const fishes = {...this.state.fishes};
        // 2. Add new State to variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Adding new updated State into State
        this.setState({
            fishes
        });
    };
    render() {
        return (
            <div className= "catch-of-the-day">
                <div className="menu">
                    <Header tagline="FRESH SEAFOOD MARKET" />
                </div>
                <Inventory addFish = {this.addFish} />
                <Order />
            </div>
        );
    }
}

export default App;