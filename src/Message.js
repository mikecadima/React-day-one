import React from 'react'

class Message extends React.Component {
    
    constructor(props){
        console.log(props)
        super(props)
        // this.message = 'something good'
        console.log(props.message)
    }
    render(){
        console.log(this);
        let value = 'Something'

        return( 
        <div>
            <div>{this.props.message}</div>
           {/* <p>{value}</p> 
           <p>This is fine</p> */}
            </div>
        )
    }
}

export default Message;