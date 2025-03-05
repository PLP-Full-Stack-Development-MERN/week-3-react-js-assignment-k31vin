import React, { useState } from 'react';

const Counter = () => {
const [count, setCount] = useState(0);

const increment = () => {
setCount(count + 1);
};

return (
<div className="p-4 border rounded shadow">
    <h2 className="text-xl">Counter</h2>
    <p>Count: {count}</p>
    <button onClick={increment} className="bg-blue-500 text-white p-2 rounded">
    Increment
    </button>
</div>
);
};

export default Counter;