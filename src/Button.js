import React from 'react';

//functinal component
const Button = ({text,whenClicked}) =>{
    let clickedTmes = 0;

    const whenButtonClicked = () => {
        clickedTmes += 1;
        console.log(clickedTmes)
        
    }
    // const whenButtonClicked = ()=>{
    //     console.log("you did click me")
    // }
return(<button onClick={whenClicked}>{text} : {clickedTmes}</button>)
}

// class Button extends React.Component {
//     render(){
//     return (
//         <div>
//             <button>Button</button>
//         </div>
//         )
//     }
// }

export default Button;