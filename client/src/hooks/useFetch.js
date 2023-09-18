import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = ({url}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const rs = await axios.get(url)
                setData(rs.data);
            }catch (err) {
                setError(err);
            }
            setLoading(false);
        }
        fetchData();
    }, [url])

    const refetch = async () => {
        setLoading(true);
        try {
            const rs = await axios.get(url);
            setData(rs.data);
        }catch (err) {
            setError(err);
        }
        setLoading(false);
    }
    return (data, loading, error, refetch);
}


