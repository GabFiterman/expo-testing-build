import { useState } from 'react';
import '@/App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='webpageView'>
            <h1>Testing Webpage</h1>
            <h2>Build 3</h2>
            <p>Neste teste, já espero ser um dos últimos.</p>
            <p>Esta mesma build deve ser hospedada em diferentes lugares, e o app deve ser buildado apontando para a mesma.</p>
            <p>Então adicionar um pouco da complexidade do app, como as tecnologias, e o principal: Testar os CORS, fazer requisição desta webpage pra API alertario. se precisar, teste fazer o servidor proxy.</p>
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
