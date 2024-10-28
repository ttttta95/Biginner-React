import { useState, useEffect } from "react";

const CounterEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Counter: ${counter}`;
    }, [count]);
    
    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default CounterEffect;