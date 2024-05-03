"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Pie, Line } from "react-chartjs-2";
import { GrLicense } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";
import { ImConnection } from "react-icons/im";
import { MdBlock } from "react-icons/md";
import { TiBusinessCard } from "react-icons/ti";
import { MdDashboard } from "react-icons/md";
import 'chart.js/auto';
				



export default function App() {
    const pieData1 = {
        labels: ["Valid", "Invalid"],
        datasets: [{
            data: [70, 30],
            backgroundColor: ["#4CAF50", "#F44336"],
        }],
    };

    const pieData2 = {
        labels: ["Valid", "Invalid"],
        datasets: [{
            data: [80, 20],
            backgroundColor: ["#4CAF50", "#F44336"],
        }],
    };

    const lineData = {
        labels: ["05/03/2015", "05/07/2015", "05/01/2016", "05/02/2015", "03/02/2017", "03/26/2018", "08/21/2019"],
        datasets: [
            {
                label: "Valid Requests",
                data: [50, 60, 75, 80, 45, 90, 70],
                borderColor: "#4CAF50",
                borderWidth: 3,
                pointBackgroundColor: "#4CAF50",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#4CAF50",
                pointHoverBorderColor: "#4CAF50",
                fill: false,
            },
            {
                label: "Invalid Requests",
                data: [30, 20, 35, 25, 40, 30, 35],
                borderColor: "#F44336",
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <>
        
            <div className="w-full " style={{ transform: 'scale(0.9)', marginTop: '-100px' }}> 
                {/* Top row of cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
                    {/* Each card */}
                    <Card>
                        <CardBody>
                            <div className="flex items-center gap-2">
                                <GrLicense className="text-xl size-8" />
                                <div>
                                    <h1 className="font-bold">Total Licenses:</h1>
                                    <p>45</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    {/* Add other cards similarly */}
                    <Card>
                        <CardBody>
                            <div className="flex items-center gap-2">
                                <LuShoppingCart className="text-xl size-8"/>
                                <div>
                                    <h1 className="font-bold">Total Products:</h1>
                                    <p>5123</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    
                    {/* Add other cards similarly */}
                    <Card>
                        <CardBody>
                            <div className="flex items-center gap-2">
                                <ImConnection className="text-xl size-8" />
                                <div>
                                    <h1 className="font-bold">Total Connections:</h1>
                                    <p>52</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    
                    {/* Add other cards similarly */}
                    <Card>
                        <CardBody>
                            <div className="flex items-center gap-2">
                                <MdBlock className="text-xl size-8" />
                                <div>
                                    <h1 className="font-bold">Total Blocklists:</h1>
                                    <p>12</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    {/* Add other cards similarly */}
                    <Card>
                        <CardBody>
                            <div className="flex items-center gap-2">
                                <TiBusinessCard className="text-xl size-8" />
                                <div>
                                    <h1 className="font-bold">Total Requests:</h1>
                                    <p>5123</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                {/* Dashboard card */}
                <Card className="mt-4 max-h-min">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <MdDashboard className="text-2xl" />
                            <h4 className="text-xl font-bold">Dashboard</h4>
                        </div>
                    </CardHeader>
                    
                    
                    <CardBody>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                        <Card className="col-span-1">
    <CardBody className="flex flex-col justify-start">
      <p className="font-bold text-lg pb-5">Players</p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center" >
      <p >MEOW MEOW MEOW MOEW</p>
      <p>MEOW MEOW MEOW MOEW</p>
      <p>MEOW MEOW MEOW MOEW</p>
      <p>MEOW MEOW MEOW MOEW</p>
      <p>MEOW MEOW MEOW MOEW</p>
      <p>MEOW MEOW MEOW MOEW</p>
    </div>

    </CardBody>
</Card>
<Card className="col-span-1">
    <CardBody className="flex flex-col justify-start">
      <p className="font-bold text-lg pb-5">Networks</p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center" >
      <p >MEOW MEOW MEOW MOEW</p>
      <p>MEOW MEOW MEOW MOEW</p>
      <p>MEOW MEOW MEOW MOEW</p>
      <p>MEOW MEOW MEOW MOEW</p>
      <p>MEOW MEOW MEOW MOEW</p>
      <p>MEOW MEOW MEOW MOEW</p>
    </div>

    </CardBody>
    </Card>
                            {/* Left-side charts */}
                            <Card className="col-span-1">
    <CardBody className="flex flex-col justify-center">
        <p className="text-lg font-bold">Requests</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div style={{ width:'100%', height: '100%' }}>
                <Pie data={pieData1} options={{ maintainAspectRatio: false, responsive: true }} />
            </div>
        </div>
        <div className="mt-2 flex justify-center gap-6">
            <span>Valid: 70%</span>
            <span>Invalid: 30%</span>
        </div>
    </CardBody>
</Card>
                            
                            {/* Right-side charts */}
                            <Card className="col-span-1">
    <CardBody className="flex flex-col justify-center">
        <p className="text-lg font-bold">Requests (5m)</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div style={{ width:'100%', height: '100%' }}>
                <Pie data={pieData2} options={{ maintainAspectRatio: false, responsive: true }} />
            </div>
        </div>
        <div className="mt-2 flex justify-center gap-6">
            <span>Valid: 80%</span>
            <span>Invalid: 20%</span>
        </div>
    </CardBody>
</Card>

                            {/* Full-width line graph */}
                            <div className="col-span-2">
                                <Card className="h-96">
                                    <CardBody>
                                        <p className="text-lg font-bold mb-4">Graph</p>
                                        <div style={{ width:'100%', height: '100%' }}>
                                            <Line data={lineData} options={lineOptions} />
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}
