import React, {Component} from 'react';
import UserItem from "./useritems";
import { MyContext } from "../context";

class User extends Component {

    /**
     * Using Context on Class based component.
     * static : which loads before everything
     * contextType is reserved keyword and MUST be used to access context.
     * We can use ONLY ONE contextType in a class based component. i.e. only one Context in a class based component.
     * @type {React.Context<unknown> | {_currentValue: *, Consumer: null, _calculateChangedBits: null, $$typeof: symbol, _threadCount: number, _currentValue2: *, Provider: null}}
     */
    // static contextType = MyContext;

    /**
     * We can use Consumer to use multiple Context on Class Based Component.
     * @returns {JSX.Element}
     */

    render() {

        // console.log(this.context);

        return (
            <>
                <MyContext.Consumer>
                    {
                        context => {
                            console.log(context);
                        }
                    }
                </MyContext.Consumer>
                <UserItem />
            </>
        );
    }

}

// const User = () => {
//     return (
//         <UserItem />
//     )
// }

export default User;
