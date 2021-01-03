import React, { useState } from 'react'

const Count = ({ initialCount }) => {

    // State
    const [state, setState] = useState({
        count: initialCount,
        user: "Anuz Pandey",
    });

    const [posts, setPosts] = useState([
        {
            id: '1',
            name: 'This is first post.',
            body: 'This is first post body.'
        },
        {
            id: '2',
            name: 'This is second post.',
            body: 'This is second post body.'
        },
    ]);

    const subtractOne = () => {
        setState({
            ...state,
            count: state.count - 1
        });
    }

    const addOnePost = () => {
        let newPost = {
            id: 3,
            name: 'This is new post.',
            body: 'This is new post body.'
        }

        setPosts([
            ...posts,
            newPost,
        ]);
    }

    return (
        <>
            <h1>{state.user}</h1>
            <h3>Count: {state.count}</h3>
            <button onClick={() => {
                setState({
                    ...state, // Duplicate old states/data
                    count: state.count + 1 // replace old states/data with new state/data.
                });
            }}>
                Add One More (+)
            </button>

            <button onClick={subtractOne}>
                Subtract One More (-)
            </button>

            <hr/>

            <h2>Posts</h2>
            {
                posts.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>Name : {item.name}</h3>
                            <p>{item.body}</p>
                            <hr/>
                        </div>
                    );
                })
            }

            <button onClick={addOnePost}>
                Add One More Post (+)
            </button>


        </>
    );


}

export default Count;
