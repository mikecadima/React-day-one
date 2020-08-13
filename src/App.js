import React from 'react';
import './App.css';
import Message from './Message';
import Message2 from './Message2';
import Button from './Button';
import Clicks from './Clicks';
import Hidden from './Hidden';


class App extends React.Component{

  constructor(props){
    super(props)
      let value = Number(localStorage.getItem('clicks'));
      console.log(value)

      this.state = {
        clickedTimes: value || 0,
        message: 'hey this is nice',
        showMessage: true
      }
    }
addClick(){
  console.log(this.state.clickedTimes);

  this.setState({clickedTimes: this.state.clickedTimes+1},()=>{
    console.log(this.state.clickedTimes);
    localStorage.setItem("clicks",this.state.clickedTimes)
  })
}


 
  render(){ 
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Hello world</h1>
       <Message message={'Michael Cadima'}/>
       {/* <Message2 message2={'this is a second message'}/>

       <Message message={'look again '}/>
       <Message message={'lookey here buddy '}/> */}

       {/* <Button text="Click Here" whenClicked={this.whenClicked.bind(this)}
        clickedTimes = {this.state.clickedTimes}
        /> */}

        {/* <Button text='click me homie' 
        whenClicked={this.whenClicked.bind(this)}
        clickedTimes = {this.state.clickedTimes}  /> */}
      <Clicks />
      <Hidden />
      
      </header>
    </div>
  );
}
}





export default App;
