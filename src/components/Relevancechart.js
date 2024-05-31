import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from './Filters';
import RelevanceBySectorChart from './RelevanceBySectorChart';
import Spinner from './Spinner'; // Import Spinner component
import './Relevance.css';

function Relevancechart() {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading
    const [filters, setFilters] = useState({
        endYear: '',
        topic: '',
        sector: '',
        region: '',
        pest: '',
        source: '',
        swot: '',
        country: '',
        city: ''
    });

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/getdata/get`)
            .then(response => {
                setEntries(response.data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
                setLoading(false); // Set loading to false even if there's an error
            });
    }, []);

    const filteredEntries = entries.filter(entry => {
        return (
            (filters.endYear ? entry.end_year?.includes(filters.endYear) : true) &&
            (filters.topic ? entry.topic?.includes(filters.topic) : true) &&
            (filters.sector ? entry.sector?.includes(filters.sector) : true) &&
            (filters.region ? entry.region?.includes(filters.region) : true) &&
            (filters.pest ? entry.pestle?.includes(filters.pest) : true) &&
            (filters.source ? entry.source?.includes(filters.source) : true) &&
            (filters.swot ? entry.swot?.includes(filters.swot) : true) &&
            (filters.country ? entry.country?.includes(filters.country) : true) &&
            (filters.city ? entry.city?.includes(filters.city) : true)
        );
    }).slice(0, 20); // Limit to top 20 entries

    return (
        <div className='bg-sky-50 h-[900px]'>
            {loading ? (
                <Spinner /> // Show spinner while loading
            ) : (
                <>
                    <Filters filters={filters} setFilters={setFilters} />
                    <div className="w-[70%] h-[300px] ml-[15%]">
                        <RelevanceBySectorChart data={filteredEntries} />
                    </div>
                </>
            )}
        </div>
    );
}

export default Relevancechart;
