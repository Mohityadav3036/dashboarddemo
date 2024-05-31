// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import 'chartjs-plugin-zoom';
import './Dashboard.css'; // Import CSS for styling
import Spinner from './Spinner'; // Import Spinner component

// Register necessary Chart.js components and plugins
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
);

function Dashboard() {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

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

    // Sort by intensity and take the top 20 entries (optional)
    const topEntries = [...entries]
        // .sort((a, b) => b.intensity - a.intensity)
        .slice(0, 20);

    // Prepare data for the chart
    const chartData = {
        labels: topEntries.map(entry => entry.country || 'Unknown'),
        datasets: [
            {
                type: 'line',
                label: 'Intensity',
                data: topEntries.map(entry => entry.intensity),
                fill: true,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                lineTension: 0.4,
                pointBackgroundColor: "white",
                pointRadius: 2.5,
                yAxisID: 'y-axis-intensity',
            },
            {
                type: 'bar',
                label: 'Likelihood',
                data: topEntries.map(entry => entry.likelihood),
                backgroundColor: "rgba(46, 113, 160,0.8)",
                borderColor: "rgba(24, 20, 20, 0.73)",
                yAxisID: 'y-axis-likelihood',
                borderWidth: 3,
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true,
                type: 'category', // Ensure x-axis is of type 'category'
            },
            'y-axis-intensity': {
                type: 'linear',
                position: 'left',
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Intensity'
                },
                grid: {
                    display: true,
                },
                ticks: {
                    display: true,
                },
            },
            'y-axis-likelihood': {
                type: 'linear',
                position: 'right',
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Likelihood'
                },
                grid: {
                    display: false,
                },
                ticks: {
                    display: true,
                },
            },
        },
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Intensity and Likelihood by Country',
                font:{
                    size:50
                }
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'xy'
                },
                zoom: {
                    enabled: true,
                    mode: 'xy'
                }
            }
        }
    };

    return (
        <div  className='bg-sky-50 mt-[-20px] pt-[80px] w-full h-[750px]'>
            {loading ? (
                <Spinner /> // Show spinner while loading
            ) : (
                <div className="w-[80%] h-[500px] ml-[15%]">
                    <Line data={chartData} options={chartOptions} />
                </div>
            )}
        </div>
    );
}

export default Dashboard;
