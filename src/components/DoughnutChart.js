// src/components/DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ data }) {
    // Prepare data for the chart
    const pestleCounts = data.reduce((acc, entry) => {
        const pestle = entry.pestle || "Unknown";
        acc[pestle] = (acc[pestle] || 0) + 1;
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(pestleCounts),
        datasets: [
            {
                label: 'PESTLE Distribution',
                data: Object.values(pestleCounts),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#B4A2FF'
                ],
                hoverBackgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#B4A2FF'
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'PESTLE Distribution',
                font:{
                    size:50
                }
            },
        },
    };

    return <Doughnut data={chartData} options={options} />;
}

export default DoughnutChart;
