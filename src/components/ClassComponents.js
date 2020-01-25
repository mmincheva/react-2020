import React from 'react';


class ClassComponentExample extends React.Component {

    constructor(props) {
        super(props);

        // Дефиниция за local state (локално състояние)
        this.state= {
            title: "Hello",
            name: "Milena"
        }
    }

    buttonOnClick = event => {
        this.setState({
            title: "Set new Title!",
            name: "Mincheva"


        })
         console.log('Clicked!');
    }

    render() { 
      return  <div>
          <h1>{this.state.title}</h1>
          <h3>{this.state.name}</h3>
          <h4>{this.props.subtitle}</h4>
          <p>{this.props.description}</p>
          <button onClick={this.buttonOnClick} type="button" className="btn btn-primary">Click me !</button>
        </div>
      
    }
  }

  export default ClassComponentExample;