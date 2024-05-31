import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoughnutChart from './DoughnutChart';
import Spinner from './Spinner'; // Import Spinner component
// import './Doughtnut.css'; // Import CSS for styling

function Doughnut() {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading

    useEffect(() => {
        // Fetch data from the API
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
    
    const topEntries = [...entries]
        // .sort((a, b) => b.intensity - a.intensity)
        .slice(0, 20);

    return (
        <div className='bg-sky-50 mt-[-20px]'>
            <div className="w-[70%] h-[700px] ml-[25%]">
                {loading ? (
                    <Spinner /> // Show spinner while loading
                ) : (
                    <DoughnutChart data={topEntries} />
                )}
            </div>
        </div>
    );
}

export default Doughnut;
