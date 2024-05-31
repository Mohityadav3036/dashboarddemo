// src/components/RelevanceBySectorChart.js
// src/components/RelevanceBySectorChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, layouts } from 'chart.js';
import { text } from 'd3';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RelevanceBySectorChart = ({ data }) => {
    const sectors = data.map(entry => entry.sector || 'Unknown');
    const relevanceValues = data.map(entry => entry.relevance);

    const chartData = {
        labels: sectors,
        datasets: [
            {
                label: 'Relevance by Sector',
                data: relevanceValues,
                backgroundColor: 'rgba(17, 116, 131, 0.79)',
                borderColor: 'rgba(24, 20, 20, 0.73)',
                borderWidth: 3,
            }
        ]
    };

    const options = {
        responsive: true,
        layout:{
            padding:{
                bottom:5,
                top:30
            }
        },
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Relevance by Sector',
                font:{
                    size:50
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 10, // Adjust the size as needed
                        family: 'Arial' // Change to desired font family
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 20, // Adjust the size as needed
                        family: 'Arial' // Change to desired font family
                    }
                }
            }
        }
    };

    return (
        <div style={{ width: 'full', height: '1000px' }}> {/* Adjust width and height as needed */}
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default RelevanceBySectorChart;
