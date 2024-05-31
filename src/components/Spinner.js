// src/components/Spinner.js
import React from 'react';
import './Spinner.css'; // Import CSS for spinner styling

function Spinner() {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
            <div>Please Wait Data is Fetch From MONGODB</div>
        </div>
    );
}

export default Spinner;
