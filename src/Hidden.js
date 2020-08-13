import React from 'react'

class Hidden extends React.Component {
    state = {
      person: {
        name: 'Mike',
        age: 21,
      },
      showPerson: false
    }
  
    togglePersonHandler = () => {
    const isVisible = this.state.showPerson;
    this.setState({
      showPerson: !isVisible
      });
    }
    
    render() {
      let person = null;
      if (this.state.showPerson) {
        person = (
        <div className="personCard">
          <p>Name: {this.state.person.name}</p>
          <p>Age: {this.state.person.age}</p>
        </div>
        );
      }
      return (
        <div className="container">
          <button 
            className="btn"
            onClick={this.togglePersonHandler}>
              Toggle
          </button>
          <div>{person}</div>
        </div>
      );
    }
  }
  export default Hidden;