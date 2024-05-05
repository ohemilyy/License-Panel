'use client';

import React, { useState } from 'react';
import { Card, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Input } from '@nextui-org/react';
import { FaUserPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { GrUser } from 'react-icons/gr';
import { AiOutlineDiscord } from "react-icons/ai";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react';

interface SubCustomer {
    product: string;
    username: string;
    discord: string;
}

const subCustomers: SubCustomer[] = [
    {
        product: 'Product A',
        username: 'N/A',
        discord: 'N/A',
    },
    {
        product: 'Product B',
        username: 'N/A',
        discord: 'N/A',
    },
    // Add more sub-customers as needed
];

const SubCustomersPage = () => {
    const [currentSubCustomer, setCurrentSubCustomer] = useState<SubCustomer | null>(null);
    const [discordId, setDiscordId] = useState('');
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleAddButtonClick = (subCustomer: SubCustomer) => {
        setCurrentSubCustomer(subCustomer);
        setDiscordId(subCustomer.discord); // Load existing discord ID if it exists
        onOpen();
    };

    const handleSaveDiscordId = () => {
        if (currentSubCustomer) {
            currentSubCustomer.discord = discordId;
        }
        onOpenChange(false);
        setCurrentSubCustomer(null);
        setDiscordId('');
    };

    const tableVariants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    };

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <Card className="shadow-md rounded-lg">
                    <div className="flex items-center gap-2 px-6 py-4">
                        <FaUserPlus className="size-6" />
                        <span className="flex items-center text-xl font-bold">
                            <h4>My SubCustomers</h4>
                        </span>
                    </div>

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={subCustomers.length}
                            variants={tableVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <Table aria-label="SubCustomers Table" isStriped>
                                <TableHeader>
                                    <TableColumn>Product</TableColumn>
                                    <TableColumn>Username</TableColumn>
                                    <TableColumn>Discord</TableColumn>
                                    <TableColumn>Actions</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    {subCustomers.map((subCustomer, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{subCustomer.product}</TableCell>
                                            <TableCell>
                                                <span className="flex items-center">
                                                    <GrUser className="mr-2 size-4" />
                                                    {subCustomer.username}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="flex items-center">
                                                    <AiOutlineDiscord className="mr-2 size-5" />
                                                    {subCustomer.discord}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    size="sm"
                                                    color="primary"
                                                    onPress={() => handleAddButtonClick(subCustomer)}
                                                >
                                                    <span className="flex items-center">
                                                        <span>Add Discord</span>
                                                    </span>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </motion.div>
                    </AnimatePresence>
                </Card>

                {/* Modal for adding Discord ID */}
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                    <ModalContent>
                        {onClose => (
                            <>
                                <ModalHeader>Add Discord ID</ModalHeader>
                                <ModalBody>
                                    <Input
                                        label="Discord ID"
                                        placeholder="Enter Discord ID"
                                        value={discordId}
                                        onChange={e => setDiscordId(e.target.value)}
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Cancel
                                    </Button>
                                    <Button color="primary" onPress={handleSaveDiscordId}>
                                        Save
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </div>
    );
};

export default SubCustomersPage;
