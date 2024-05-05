
// DOES NOT WORK 


import { Card } from '@nextui-org/react';
import { notFound } from 'next/navigation';

interface License {
    buyer: string;
    status: string;
    product: string;
    discord: string;
    ips: string[];
    ipLimit: number;
    created: string;
    flags: string[];
    transactionId: string;
    warningSeverity: string;
}

interface Licenses {
    [key: string]: License;
}

const licenses: Licenses = {
    'DXZOC1-U6TIP2-PU7C8C-L81102': {
        buyer: 'John Doe',
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
    'DXZOC1-U6TIP2-PU7C8C-PU7C8C': {
        buyer: 'Jane Smith',
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
};

export const getStaticPaths = async () => {
    const paths = Object.keys(licenses).map((key) => ({
        params: { key },
    }));

    return {
        paths,
        fallback: false, // Change this to 'blocking' or 'true' based on your use case
    };
};

export const getStaticProps = async ({ params }: { params: { key: string } }) => {
    const { key } = params;
    const license = licenses[key];

    if (!license) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            license,
            licenseKey: key,
        },
    };
};

const LicenseDetails: React.FC<{ license: License; licenseKey: string }> = ({ license, licenseKey }) => {
    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <Card className="shadow-md rounded-lg p-4">
                    <h2 className="text-2xl font-bold mb-4">License Details for Key: {licenseKey}</h2>
                    <div>
                        <p><strong>Buyer:</strong> {license.buyer}</p>
                        <p><strong>Status:</strong> {license.status}</p>
                        <p><strong>Product:</strong> {license.product}</p>
                        <p><strong>Discord:</strong> {license.discord}</p>
                        <p><strong>IP Limit:</strong> {license.ipLimit}</p>
                        <p><strong>Created:</strong> {license.created}</p>
                        <p><strong>Flags:</strong> {license.flags.join(', ')}</p>
                        <p><strong>Transaction ID:</strong> {license.transactionId}</p>
                        <p><strong>Warning Severity:</strong> {license.warningSeverity}</p>
                    </div>
                    <div className="mt-4">
                        {/* Add your buttons and actions here */}
                        <button className="bg-blue-500 text-white rounded px-4 py-2 mr-2">Inactive</button>
                        <button className="bg-green-500 text-white rounded px-4 py-2 mr-2">Enable Beta</button>
                        <button className="bg-purple-500 text-white rounded px-4 py-2 mr-2">Custom Version</button>
                        <button className="bg-gray-500 text-white rounded px-4 py-2 mr-2">Clear IPs</button>
                        <button className="bg-yellow-500 text-white rounded px-4 py-2 mr-2">Set IP Limit</button>
                        <button className="bg-red-600 text-white rounded px-4 py-2">Delete License</button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default LicenseDetails;
