import React from 'react';

class PureComponent extends React.PureComponent {

    state = {
        name: 'Anuj'
    }

    /**
     * With Component everytime the state change
     * even if the value is same
     * it re renders
     */
    // shouldComponentUpdate(nextProps, nextState) {
    //     return (nextState.name === this.state.name)
    //         ? false
    //         : true;
    // }

    // Use PureComponent to reduce the above code.

    render() {

        console.log('Rendered');

        return (
            <>
                <h3>{this.state.name}</h3>
                <hr/>
                <button onClick={() => this.setState({ name: 'Anuj' })}>Change</button>
            </>
        )
    }

}

export default PureComponent;
