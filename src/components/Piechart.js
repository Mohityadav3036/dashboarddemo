import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import Spinner from './Spinner'; // Import Spinner component
import './Piechart.css';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function Piechart() {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading

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

    // Prepare data for the pie chart by sector
    const sectors = entries.map(entry => entry.sector);
    const sectorCounts = sectors.reduce((acc, sector) => {
        if (sector) {
            acc[sector] = (acc[sector] || 0) + 1;
        }
        return acc;
    }, {});

    const sectorData = {
        labels: Object.keys(sectorCounts),
        datasets: [
            {
                label: 'Sector Distribution',
                data: Object.values(sectorCounts),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
                    '#D32F2F', '#1976D2', '#388E3C', '#FBC02D', '#E64A19', '#7B1FA2'
                ],
                hoverBackgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
                    '#D32F2F', '#1976D2', '#388E3C', '#FBC02D', '#E64A19', '#7B1FA2'
                ]
            }
        ]
    };

    // Prepare data for the pie chart by topic
    const topics = entries.map(entry => entry.topic);
    const topicCounts = topics.reduce((acc, topic) => {
        if (topic) {
            acc[topic] = (acc[topic] || 0) + 1;
        }
        return acc;
    }, {});

    const topicData = {
        labels: Object.keys(topicCounts),
        datasets: [
            {
                label: 'Topic Distribution',
                data: Object.values(topicCounts),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
                    '#D32F2F', '#1976D2', '#388E3C', '#FBC02D', '#E64A19', '#7B1FA2'
                ],
                hoverBackgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
                    '#D32F2F', '#1976D2', '#388E3C', '#FBC02D', '#E64A19', '#7B1FA2'
                ]
            }
        ]
    };

    return (
        <div className="bg-sky-50 w-[100%] h-[1800px]">
            {loading ? (
                <Spinner /> // Show spinner while loading
            ) : (
                <>
                    <div className="items-center h-[600px] ml-[32%]">
                        <h2 className='ml-[10%] text-5xl font-bold mb-5 text-gray-600'>Sector Distribution</h2>
                        <Pie data={sectorData} />
                    </div>
                    <div className="mt-[200px] items-center h-[800px] ml-[25%]">
                        <h2 className='ml-[18%] text-5xl font-bold mb-5 text-gray-600'>Topic Distribution</h2>
                        <Pie data={topicData} />
                    </div>
                </>
            )}
        </div>
    );
}

export default Piechart;
