import {useState, useEffect} from 'react';
import * as api from './api';

export function useBusinessSearch(term, location,products,credit, WIC, WICcash,SFMNP,SNAP,Organic) {
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({term, location,products,credit, WIC,WICcash, SFMNP, SNAP, Organic });

    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/businesses/search', searchParams);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResults(resp.total);
                console.log(rawData);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [businesses, amountResults, searchParams, setSearchParams];
}