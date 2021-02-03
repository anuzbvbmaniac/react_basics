import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        users: [
            { id: 1, name: 'Anuj Pandey' },
            { id: 2, name: 'Batman' },
            { id: 3, name: 'Superman' }
        ],
        active: true,
    }

    toggleActive = () => {
        this.setState({active: !this.state.active})
    }

    render() {
        return (
            // value is something that we are passing through context
            <MyContext.Provider value={{
                users: this.state.users,
                active: this.state.active,
                toggleActive: this.toggleActive
            }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export { MyContext, MyProvider }
