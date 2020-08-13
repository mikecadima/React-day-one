import React from 'react'
class Clicks extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
      this.addClicked = this.addClicked.bind(this);
      this.subClicked = this.subClicked.bind(this);
      this.clearClick = this.clearClick.bind(this);
    }
    addClicked(event) {
      this.setState({value: this.state.value+1});
    }
    subClicked(event) {
        this.setState({value: this.state.value-1});
      }

    clearClick(even) {
    this.setState({value: this.clearClick.value=0})
    }
    render() {
      return (
          <div>
          <div>{this.state.value}</div>
          <button onClick={this.addClicked}>Add</button>
          <button onClick={this.subClicked}>Subtract</button>
          <button onClick={this.clearClick}>Clear</button>
        </div>
      );
    }
  }
  export default Clicks;