import React, { Component } from 'react';

class Lifecycle extends Component {

    constructor(props) {
        super(props);

        this.state = {name: 'Anuz'}
        console.log('1-Constructor');
    }

    static getDerivedStateFromProps() {
        console.log('2-getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('4-componentDidMount');
    }

    componentWillUnmount() {
        console.log('5-componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('x-shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('x-componentDidUpdate');
    }


    render() {
        console.log('3-render');
        return (
            <div>

            </div>
        );
    }
}

Lifecycle.propTypes = {};

export default Lifecycle;
