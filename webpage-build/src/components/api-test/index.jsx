import { useContext, useState } from 'react';
import axios from 'axios';

import { GlobalContext } from '@/contexts/globalContext';

const ApiTest = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const { globalContext } = useContext(GlobalContext);

    const apiUser = import.meta.env.VITE_API_USERNAME;
    const apiPass = import.meta.env.VITE_API_PASSWORD;

    const getHomeData = async (latitude, longitude) => {
        const endpoint = '/api/home';
        const credentials = btoa(`${apiUser}:${apiPass}`);

        const response = await axios.get(
            endpoint + `?latitude=${latitude}&longitude=${longitude}`,
            {
                headers: {
                    Authorization: `Basic ${credentials}`,
                },
            }
        );
        return response.data;
    };

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await getHomeData(
                globalContext.coordinates.latitude,
                globalContext.coordinates.longitude
            );
            setData(response);
        } catch (err) {
            setError(`Erro ao buscar dados \n ${err}`);
        } finally {
            setLoading(false);
        }
    };

    const clearData = () => {
        setData(null);
        setError(null);
    };

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
                            <strong>Nome:</strong> {data.estacao.nome}
                        </p>
                        <p>
                            <strong>Temperatura:</strong> {parseFloat(data.estacao.temperatura).toFixed(2)} °C
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default ApiTest;
