import { useState } from 'react';
import axios from 'axios';

const ApiTest = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const apiURL = `https://rickandmortyapi.com/api/character/`;

    const getRandomNumber = () => {
        const min = 1;
        const max = 826;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await axios.get(apiURL+getRandomNumber());
            console.log(response.data);
            setData(response.data); // Pega o primeiro resultado
        } catch (err) {
            setError('Erro ao buscar dados');
        } finally {
            setLoading(false);
        }
    };

    const clearData = () => {
        setData(null);
        setError(null);
    }

    return (
        <div>
            <button onClick={fetchData}>Nova requisição</button>
            <button onClick={clearData}>Limpar</button>
            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}
            {data && (
                <>
                    <div>
                        <p>
                            <strong>Nome:</strong> {data.name}
                        </p>
                        <p>
                            <strong>Espécie:</strong> {data.species}
                        </p>
                        <p>
                            <strong>Status:</strong> {data.status}
                        </p>
                    </div>
                    <div>
                        <img src={data.image} alt={data.name} />
                    </div>
                </>
            )}
        </div>
    );
};

export default ApiTest;
