'use client';
import { TableHeader, TableColumn, TableBody, TableRow, TableCell, Table, Card } from '@nextui-org/react';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { IoCalendarNumberSharp } from 'react-icons/io5';
import { IoMdPerson } from 'react-icons/io';
import { FaKey } from 'react-icons/fa';
import React from 'react';
import { FaRegAddressCard } from 'react-icons/fa6';

const licenses = [
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'John Doe',
        date: '2024-05-01',
        expiration: '2025-05-01',
    },
    {
        key: 'DXZOC1-U6TIP2-PU7C8C-L81102',
        buyer: 'Jane Smith',
        date: '2024-05-03',
        expiration: '2025-05-03',
    },
];

const Licenses = () => {
    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <Card className="shadow-md rounded-lg">
                    <div className="flex items-center gap-2 px-6 py-4">
                        <FaRegAddressCard className="text-2xl" />
                        <h4 className="text-xl font-bold">Licenses</h4>
                    </div>
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
                            {licenses.map((license, index) => (
                                <TableRow key={index}>
                                    <TableCell>{license.buyer}</TableCell>
                                    <TableCell>{license.date}</TableCell>
                                    <TableCell>{license.key}</TableCell>
                                    <TableCell>{license.expiration}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </div>
    );
};

export default Licenses;
