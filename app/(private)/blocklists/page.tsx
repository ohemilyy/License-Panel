'use client';

import React, { useState } from 'react';
import { Card } from '@nextui-org/react';
import { FaArrowLeft, FaArrowRight, FaExclamationCircle, FaClock, FaNetworkWired } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion

const Blacklists = [
    {
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
	{
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
	{
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
	{
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
	{
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
	{
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
	{
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
	{
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
	{
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
	{
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
	{
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
	{
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
	{
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
	{
        ip: '192.168.0.1',
        error: 'Error',
        dateTime: '2024-05-05 09:30:00',
    },
    {
        ip: '10.0.0.1',
        error: 'Error',
        dateTime: '2024-05-05 10:15:00',
    },
];

const pageSize = 10; // Number of items per page

const BlocklistPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the start and end indices of the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Get the current page data
    const currentBlocklistData = Blacklists.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(Blacklists.length / pageSize);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div className="py-6">
            <h1 className="text-2xl font-bold mb-4">Blocklist</h1>

            {/* Animation wrapper for the blocklist data */}
            <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentBlocklistData.map((block, index) => (
                        <Card key={index} className="p-4">
                            <div className="flex items-center mb-2">
                                <FaNetworkWired className="mr-2 text-blue-600" />
                                <h2 className="text-lg font-bold">IP: {block.ip}</h2>
                            </div>
                            <div className="flex items-center mb-2">
                                <FaExclamationCircle className="mr-2 text-red-600" />
                                <p className="text-gray-600">Error: {block.error}</p>
                            </div>
                            <div className="flex items-center">
                                <FaClock className="mr-2 text-gray-600" />
                                <p className="text-gray-600">Blocked Date/Time: {block.dateTime}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </motion.div>

            {/* Pagination controls */}
            <div className="flex justify-center items-center mt-4">
                <button
                    className={`mx-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <FaArrowLeft size={24} />
                </button>
                <span className="text-lg mx-2">Page {currentPage} of {totalPages}</span>
                <button
                    className={`mx-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    <FaArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default BlocklistPage;
