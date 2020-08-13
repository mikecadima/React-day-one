import React from 'react'

class Message2 extends React.Component {
    constructor(props){
        // console.log(props)
        super(props)
        // this.message = 'something good'
    }
    render(){
        console.log(this);
        let value = 'Second Message'

        return( 
        <div>
            <div>{this.props.message2}</div>
           {/* <p>{value}</p> 
           <p>This is fine</p> */}
            </div>
        )
    }
}

export default Message2;