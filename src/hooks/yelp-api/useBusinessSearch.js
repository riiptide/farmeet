import {useState, useEffect} from 'react';
import * as api from './api';

export function useBusinessSearch(term, location,products,Credit, WIC, WICcash,SFMNP,SNAP,Organic,x,y) {
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({term, location,products,Credit, WIC,WICcash, SFMNP, SNAP, Organic,x,y });

    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
            try {
                // const rawData = await api.get('/businesses/search', searchParams);
                const rawData = await api.get('/results', searchParams);
                const resp = await rawData.json();
                console.log(JSON.stringify(resp));
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