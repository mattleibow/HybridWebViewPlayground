import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterStorage from './counters/CounterStorage'

function App() {
    const counterStorage = CounterStorage.getInstance();
    const [count, setCount] = useState(-1);

    // if this is the first render, then load the
    // count from the storage
    if (count === -1) {
        counterStorage
            .getCount()
            .then(loaded => setCount(loaded))
            .catch(err => console.error(`There was an error loading the count: ${err}`));
    }

    // when the count changes, update the storage
    useEffect(() => {
        if (count === -1)
            return;
        counterStorage.setCount(count);
    }, [count]);

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                {(count === -1) ? (
                    <p>Loading...</p>
                ) : (
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                )}
                
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
