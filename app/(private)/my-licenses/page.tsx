'use client';

import React, { useState } from 'react';
import { Card, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Modal } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaDiscord, FaUndoAlt, FaEye } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { GrLicense } from 'react-icons/gr';

interface License {
    product: string;
    status: boolean;
    discordLinked: boolean;
    expiration: string;
    subCustomers: number;
    subCustomerLimit: number;
    ips: string[];
    ipResetAvailable: boolean;
    ipLimit: number;
}

const licenses: License[] = [
    {
        product: 'Product A',
        status: true,
        discordLinked: true,
        expiration: '2025-05-01',
        subCustomers: 2,
        subCustomerLimit: 2,
        ips: ['192.168.1.1', '192.168.1.2'],
        ipResetAvailable: true,
        ipLimit: 2,
    },
    {
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
	{
        product: 'Product B',
        status: false,
        discordLinked: false,
        expiration: '2025-05-03',
        subCustomers: 1,
        subCustomerLimit: 1,
        ips: ['10.0.0.1'],
        ipResetAvailable: false,
        ipLimit: 1,
    },
	
];

const LicensesPage = () => {
    const [isIPModalOpen, setIPModalOpen] = useState(false);
    const [selectedLicense, setSelectedLicense] = useState<License | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const licensesPerPage = 10; // Set the number of licenses to display per page

    const handleIPModalOpen = (license: License) => {
        setSelectedLicense(license);
        setIPModalOpen(true);
    };

    const handleIPModalClose = () => {
        setIPModalOpen(false);
        setSelectedLicense(null);
    };

    // Calculate the index range for the current page
    const indexOfLastLicense = currentPage * licensesPerPage;
    const indexOfFirstLicense = indexOfLastLicense - licensesPerPage;
    const currentLicenses = licenses.slice(indexOfFirstLicense, indexOfLastLicense);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(licenses.length / licensesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <Card className="shadow-md rounded-lg">
                    <div className="flex items-center gap-2 px-6 py-4">
                        <GrLicense className="size-6" />
                        <span className="flex items-center text-xl font-bold">
                            <h4>My Licenses</h4>
                        </span>
                    </div>
                    {/* Wrap the entire table in a motion.div */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Table aria-label="Licenses Table" isStriped>
                            <TableHeader>
                                <TableColumn>Product</TableColumn>
                                <TableColumn>Discord Status</TableColumn>
                                <TableColumn>Expiration</TableColumn>
                                <TableColumn>Sub-customers</TableColumn>
                                <TableColumn>IPs</TableColumn>
                                <TableColumn>Actions</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {currentLicenses.map((license, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <span className="flex items-center">
                                                {/* Tick or X icon based on status */}
                                                {license.status ? (
                                                    <FaCheckCircle className="text-green-500 mr-2" />
                                                ) : (
                                                    <FaTimesCircle className="text-red-500 mr-2" />
                                                )}
                                                {license.product}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="flex items-center">
                                                {/* Discord icon with linked status */}
                                                {license.discordLinked ? (
                                                    <FaDiscord className="text-blue-500 mr-2" />
                                                ) : (
                                                    <FaDiscord className="text-gray-500 mr-2" />
                                                )}
                                                {license.discordLinked ? 'Linked' : 'Not Linked'}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="flex items-center">
                                                <AiOutlineCalendar className="mr-2" />
                                                {license.expiration}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            {/* Display sub-customers in the format "current/total" */}
                                            {license.subCustomers}/{license.subCustomerLimit}
                                        </TableCell>
                                        <TableCell>
                                            {/* Display the IPs in the format "current/total" and a button to view IPs */}
                                            <div className="flex items-center gap-2">
                                                {license.ips.length}/{license.ipLimit}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {/* Actions based on IP reset availability */}
                                            {license.ipResetAvailable ? (
                                                <Button size="sm" color="primary">
                                                    <span className="flex items-center">
                                                        <span>Request IP Reset</span>
                                                        <FaUndoAlt className="ml-2" />
                                                    </span>
                                                </Button>
                                            ) : (
                                                <Button
                                                    size="sm"
                                                    color="primary"
                                                    onClick={() => handleIPModalOpen(license)}
                                                >
                                                    <span className="flex items-center ">
                                                        <span>View IPs</span>
                                                        <FaEye className="ml-3 size-4" />
                                                    </span>
                                                </Button>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </motion.div>
                    {/* Pagination buttons */}
                    <div className="flex justify-center gap-4 mt-4">
                        <Button
                            size="sm"
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        <Button
                            size="sm"
                            onClick={handleNextPage}
                            disabled={currentPage >= Math.ceil(licenses.length / licensesPerPage)}
                        >
                            Next
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default LicensesPage;
