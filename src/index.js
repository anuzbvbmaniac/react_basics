import React, {useRef} from 'react';
import ReactDOM from 'react-dom';

import './styles/style.css';


const App = () => {

    const textInput = useRef();

    const triggerHandler = () => {
        console.log(textInput.current.value);
    }

    return (
        <>
            <h1>Contact Form</h1>
            <InputComponent ref={textInput}/>
            <button onClick={triggerHandler}>
                Trigger
            </button>
        </>
    )
}

// Another Component ... Use React.forwardRef to pass references onto another component.
const InputComponent = React.forwardRef((props, ref) => {
    return (
        <input type="text" ref={ref}/>
    );
});

// Class Based Component
// class App extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.textInput = React.createRef();
//     }
//
//     triggerHandler = () => {
//         console.log(this.textInput.current.value);
//     }
//
//     render() {
//         return (
//             <>
//                 <h1>Contact Form</h1>
//                 <input type="text" ref={this.textInput}/>
//                 <button onClick={this.triggerHandler}>
//                     Trigger
//                 </button>
//             </>
//         );
//     }
// }

ReactDOM.render(<App/>, document.getElementById('root'));
