import { useState } from "react";

function Button() {
    const [count, setCount] = useState(0);
    
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>Decremento</button>
            <button onClick={() => setCount(count + 1)}>Incremento</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export { Button };