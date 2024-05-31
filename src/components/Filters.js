// src/components/Filters.js
import React from 'react';

const Filters = ({ filters, setFilters }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    return (
        <div>
            <h2 className=' text-6xl ml-[10%] pt-4 font-bold' >Filters</h2>
            
            <div className=' mt-10 ml-[10%]'>
                <label >
                    Topic:
                    <input type="text" class="  mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="topic" value={filters.topic} onChange={handleInputChange} />
                </label>
            </div>
            <div className=' mt-4 ml-[10%]'>
                <label>
                    Sector:
                    <input type="text" class=" mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="sector" value={filters.sector} onChange={handleInputChange} />
                </label>
            </div>
         
         
        </div>
    );
};

export default Filters;
