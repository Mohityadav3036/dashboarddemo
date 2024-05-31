
// // src/App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from './components/Card.js';

// function App() {
//     const [entries, setEntries] = useState([]);

//     useEffect(() => {
//         // Fetch data from the API
//         axios.get('http://localhost:5000/getdata/get')
//             .then(response => {  
//                 setEntries(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the data!', error);
//             });
//     }, []);

//     return (
//         <div className="App">
//             <h1>Entries</h1>
//             <div className="card-container">
//                 {entries.map((entry, index) => (
//                     <Card key={index} entry={entry} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default App;


// src/App.js
import React from 'react';
import Dashboard from './components/Dashboard';
import Piechart from './components/Piechart';

import Relevancechart from './components/Relevancechart';
import Doughnut from './components/Doughnut';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
    return (
        <div className="App">
        <Navbar/>
           <Relevancechart/>
           <Doughnut/>
            <Dashboard />
            <Piechart/>
            <Footer/>
         
        </div>
    );
}

export default App;
