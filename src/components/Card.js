// src/components/Card.js
import React from 'react';
import './Card.css'; // Optional: if you want to add some styling

function Card({ entry }) {
    return (
        <div className="card">
            <h2>{entry.title}</h2>
            <p><strong>Intensity:</strong> {entry.intensity}</p>
            <p><strong>Likelihood:</strong> {entry.likelihood}</p>
            <p><strong>Relevance:</strong> {entry.relevance}</p>
            <p><strong>Country:</strong> {entry.country}</p>
            <p><strong>Topic:</strong> {entry.topic}</p>
            <p><strong>Region:</strong> {entry.region}</p>
            <p><strong>Sector:</strong> {entry.sector}</p>
          
            <a href={entry.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    );
}

export default Card;
