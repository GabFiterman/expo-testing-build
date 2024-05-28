import { useState } from 'react';
import '@/App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='webpageView'>
            <h1>Testing Webpage</h1>
            <h2>Build 2</h2>
            <div className="rowContainer">
                <button onClick={() => setCount((count) => count - 1)}>
                    -
                </button>
                <h3>count is {count}</h3> 
                <button onClick={() => setCount((count) => count + 1)}>
                    +
                </button>
            </div>
        </div>
    );
}

export default App;
