import React, {useState, useEffect} from 'react';

export default function Hooks() {
    const [count, setCount] = useState(0);

    return (
        <React.Fragment>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </React.Fragment>
    )
    
}
