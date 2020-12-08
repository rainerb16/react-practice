import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory'; 
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

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
    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        });
    };

    addToOrder = (key) => {
        // To add to order
        // 1. Take copy of State
        const order = {...this.state.order}
        // 2. Either add to the order or update the number in order
        order[key] = order[key] + 1 || 1;
        //  3. Call setState to update State Object
        this.setState({ order })
    }

    render() {
        return (
            <div className= "catch-of-the-day">
                <div className="menu">
                    <Header tagline="FRESH SEAFOOD MARKET" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                        <Fish 
                        key={key} 
                        index={key}
                        details= {this.state.fishes[key]} 
                        addToOrder= {this.addToOrder} 
                        />))}
                    </ul>
                </div>
                <Inventory addFish = {this.addFish} loadSampleFishes={this.loadSampleFishes} />
                <Order fishes={this.state.fishes} order={this.state.order} />
            </div>
        );
    }
}

export default App;