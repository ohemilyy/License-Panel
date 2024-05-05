'use client'
import React, { useState } from 'react';
import { Card } from '@nextui-org/react';
import { FaBoxOpen, FaUser, FaHashtag, FaTag, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

const licenses = [
    {
        name: "Product UwU",
        owner: "Alice",
        resourceId: "1234",
        version: "v1.0.0",
    },
    {
        name: "Product OwO",
        owner: "Your MOM",
        resourceId: "5678",
        version: "v2.0.0",
    },
	{
        name: "Product OwO",
        owner: "Your MOM",
        resourceId: "5678",
        version: "v2.0.0",
    },
	{
        name: "Product OwO",
        owner: "Your MOM",
        resourceId: "5678",
        version: "v2.0.0",
    },
	{
        name: "Product OwO",
        owner: "Your MOM",
        resourceId: "5678",
        version: "v2.0.0",
    },
	{
        name: "Product OwO",
        owner: "Your MOM",
        resourceId: "5678",
        version: "v2.0.0",
    },
	{
        name: "Product OwO",
        owner: "Your MOM",
        resourceId: "5678",
        version: "v2.0.0",
    },
	
	{
        name: "Product OwO",
        owner: "Your MOM",
        resourceId: "5678",
        version: "v2.0.0",
    },
	{
        name: "Product OwO",
        owner: "Your MOM",
        resourceId: "5678",
        version: "v2.0.0",
    },
	{
        name: "Product OwO",
        owner: "Your MOM",
        resourceId: "5678",
        version: "v2.0.0",
    },
	{
        name: "Product OwO",
        owner: "Your MOM",
        resourceId: "5678",
        version: "v2.0.0",
    },
	{
        name: "Product OwO",
        owner: "Your MOM",
        resourceId: "5678",
        version: "v2.0.0",
    },
	{
        name: "Product OwO",
        owner: "Your MOM",
        resourceId: "5678",
        version: "v2.0.0",
    },
	{
        name: "Product OwO",
        owner: "Your MOM",
        resourceId: "5678",
        version: "v2.0.0",
    },
	
];

const pageSize = 8; // Number of items per page

const ProductsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the start and end indices of the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Get the current page data
    const currentLicensesData = licenses.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(licenses.length / pageSize);

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
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Products</h1>
                <div className="flex items-center space-x-2">
                    <FaBoxOpen size={24} />
                    <span className="text-lg">Total Results: {licenses.length}</span>
                </div>
            </div>
            
            {/* Animation wrapper for the licenses data */}
            <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentLicensesData.map((license, index) => (
                        <Card key={index} className="p-4">
                            <div className="flex items-center mb-2">
                                <FaBoxOpen className="mr-2" />
                                <h2 className="text-lg font-bold">{license.name}</h2>
                            </div>
                            <div className="flex items-center mb-2">
                                <FaUser className="mr-2 text-gray-600" />
                                <p className="text-gray-600">Owner: {license.owner}</p>
                            </div>
                            <div className="flex items-center mb-2">
                                <FaHashtag className="mr-2 text-gray-600" />
                                <p className="text-gray-600">Resource ID: {license.resourceId}</p>
                            </div>
                            <div className="flex items-center mb-2">
                                <FaTag className="mr-2 text-gray-600" />
                                <p className="text-gray-600">Version: {license.version}</p>
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

export default ProductsPage;
