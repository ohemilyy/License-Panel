'use client';

import React, { useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Card } from '@nextui-org/react';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { IoCalendarNumberSharp } from 'react-icons/io5';
import { IoMdPerson } from 'react-icons/io';
import { FaKey, FaRegAddressCard } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const licenses = [
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'John Doe',
        date: '2024-05-01',
        expiration: '2025-05-01',
        status: 'active',
        product: 'Product A',
        discord: 'johndoe#1234',
        ips: ['192.168.1.1', '192.168.1.2'],
        ipLimit: 5,
        created: '2024-04-01',
        flags: ['flag1', 'flag2'],
        transactionId: 'TX123456789',
        warningSeverity: 'low',
    },
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'Jane Smith',
        date: '2024-05-03',
        expiration: '2025-05-03',
        status: 'inactive',
        product: 'Product B',
        discord: 'janesmith#5678',
        ips: ['10.0.0.1'],
        ipLimit: 3,
        created: '2024-04-03',
        flags: ['flag3'],
        transactionId: 'TX987654321',
        warningSeverity: 'medium',
    },
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'Jane Smith',
        date: '2024-05-03',
        expiration: '2025-05-03',
        status: 'inactive',
        product: 'Product B',
        discord: 'janesmith#5678',
        ips: ['10.0.0.1'],
        ipLimit: 3,
        created: '2024-04-03',
        flags: ['flag3'],
        transactionId: 'TX987654321',
        warningSeverity: 'medium',
    },
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'Jane Smith',
        date: '2024-05-03',
        expiration: '2025-05-03',
        status: 'inactive',
        product: 'Product B',
        discord: 'janesmith#5678',
        ips: ['10.0.0.1'],
        ipLimit: 3,
        created: '2024-04-03',
        flags: ['flag3'],
        transactionId: 'TX987654321',
        warningSeverity: 'medium',
    },
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'Jane Smith',
        date: '2024-05-03',
        expiration: '2025-05-03',
        status: 'inactive',
        product: 'Product B',
        discord: 'janesmith#5678',
        ips: ['10.0.0.1'],
        ipLimit: 3,
        created: '2024-04-03',
        flags: ['flag3'],
        transactionId: 'TX987654321',
        warningSeverity: 'medium',
    },
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'Jane Smith',
        date: '2024-05-03',
        expiration: '2025-05-03',
        status: 'inactive',
        product: 'Product B',
        discord: 'janesmith#5678',
        ips: ['10.0.0.1'],
        ipLimit: 3,
        created: '2024-04-03',
        flags: ['flag3'],
        transactionId: 'TX987654321',
        warningSeverity: 'medium',
    },
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'Jane Smith',
        date: '2024-05-03',
        expiration: '2025-05-03',
        status: 'inactive',
        product: 'Product B',
        discord: 'janesmith#5678',
        ips: ['10.0.0.1'],
        ipLimit: 3,
        created: '2024-04-03',
        flags: ['flag3'],
        transactionId: 'TX987654321',
        warningSeverity: 'medium',
    },
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'Jane Smith',
        date: '2024-05-03',
        expiration: '2025-05-03',
        status: 'inactive',
        product: 'Product B',
        discord: 'janesmith#5678',
        ips: ['10.0.0.1'],
        ipLimit: 3,
        created: '2024-04-03',
        flags: ['flag3'],
        transactionId: 'TX987654321',
        warningSeverity: 'medium',
    },
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'Jane Smith',
        date: '2024-05-03',
        expiration: '2025-05-03',
        status: 'inactive',
        product: 'Product B',
        discord: 'janesmith#5678',
        ips: ['10.0.0.1'],
        ipLimit: 3,
        created: '2024-04-03',
        flags: ['flag3'],
        transactionId: 'TX987654321',
        warningSeverity: 'medium',
    },
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'Jane Smith',
        date: '2024-05-03',
        expiration: '2025-05-03',
        status: 'inactive',
        product: 'Product B',
        discord: 'janesmith#5678',
        ips: ['10.0.0.1'],
        ipLimit: 3,
        created: '2024-04-03',
        flags: ['flag3'],
        transactionId: 'TX987654321',
        warningSeverity: 'medium',
    },
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'Jane Smith',
        date: '2024-05-03',
        expiration: '2025-05-03',
        status: 'inactive',
        product: 'Product B',
        discord: 'janesmith#5678',
        ips: ['10.0.0.1'],
        ipLimit: 3,
        created: '2024-04-03',
        flags: ['flag3'],
        transactionId: 'TX987654321',
        warningSeverity: 'medium',
    },
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'Jane Smith',
        date: '2024-05-03',
        expiration: '2025-05-03',
        status: 'inactive',
        product: 'Product B',
        discord: 'janesmith#5678',
        ips: ['10.0.0.1'],
        ipLimit: 3,
        created: '2024-04-03',
        flags: ['flag3'],
        transactionId: 'TX987654321',
        warningSeverity: 'medium',
    },
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'Jane Smith',
        date: '2024-05-03',
        expiration: '2025-05-03',
        status: 'inactive',
        product: 'Product B',
        discord: 'janesmith#5678',
        ips: ['10.0.0.1'],
        ipLimit: 3,
        created: '2024-04-03',
        flags: ['flag3'],
        transactionId: 'TX987654321',
        warningSeverity: 'medium',
    },
    
];

const pageSize = 5; // Number of items per page

const Licenses = () => {
    // State for the current page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the start and end indices of the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Get the current page data
    const currentLicenses = licenses.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(licenses.length / pageSize);

    // Handle previous page
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Handle next page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <Card className="shadow-md rounded-lg">
                    <div className="flex items-center gap-2 px-6 py-4">
                        <FaRegAddressCard className="text-2xl text-primary" />
                        <h4 className="text-xl font-bold">Licenses</h4>
                    </div>
                    {/* Wrap the entire table in a motion.div */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Table aria-label="License Table" isStriped>
                            <TableHeader>
                                <TableColumn>
                                    <span className="flex items-center">
                                        <IoMdPerson className="mr-1" />
                                        Buyer
                                    </span>
                                </TableColumn>
                                <TableColumn>
                                    <span className="flex items-center">
                                        <IoCalendarNumberSharp className="mr-1" />
                                        Date
                                    </span>
                                </TableColumn>
                                <TableColumn>
                                    <span className="flex items-center">
                                        <FaKey className="mr-1" />
                                        Key
                                    </span>
                                </TableColumn>
                                <TableColumn>
                                    <span className="flex items-center">
                                        <MdOutlineAccessTimeFilled className="mr-1" />
                                        Expiry
                                    </span>
                                </TableColumn>
                            </TableHeader>
                            <TableBody>
                                {currentLicenses.map((license, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{license.buyer}</TableCell>
                                        <TableCell>{license.date}</TableCell>
                                        <TableCell>
                                            <Link href={`/licenses/${license.key}`} className="text-primary hover:underline">
                                                {license.key}
                                            </Link>
                                        </TableCell>
                                        <TableCell>{license.expiration}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </motion.div>
                    {/* Pagination controls */}
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className={`mx-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            Previous
                        </button>
                        <span className="text-lg mx-2">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className={`mx-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            Next
                        </button>
                    </div>
                    {/* Display total results */}
                    <div className="text-center mt-4">
                        <span className="text-lg">
                            Total Results: {licenses.length}
                        </span>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Licenses;
