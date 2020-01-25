import React from 'react';
import QuantityInput from '../components/QuantityInput';
import ClassComponentExample from '../components/ClassComponents';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counts: [1, 2, 3, 4, 5]            
        }
    }



    getQuantityInputs = () => {
        const counts = this.state.counts;

        const inputs = counts.map(element => {
            return <QuantityInput key={element} count={element} />
        })
        return inputs;
    }
    changeCounts = () => {
        this.setState({
            counts: [7, 2]
        })
    }

    listGroup = () => {
        const name = this.state.title;

        this.setState({
            title: "Milena"
        })
    }
    render() {
        return <div className="col=md=3">
            <button onClick={this.changeCounts}
                type="button"
                className="btn btn-primary">Change Counts</button> 
                <button onClick={this.listGroup}
                type="button"
                className="btn btn-primary">Name list</button>  
            <QuantityInput count={5} />
            {this.getQuantityInputs()}
        </div>

    }
}

export default Home;