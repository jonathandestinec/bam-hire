"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const services = [
    {
        icon: "fi-rr-house-chimney",
        title: "Consulting"
    },
    {
        icon: "fi-rr-growth-chart-invest",
        title: "Direct Placement",
    },
    {
        title: "Staff Augmentation",
        icon: "fi-rr-user-headset"
    },
    {
        title: "Contract to Hire",
        icon: "fi-rr-briefcase"
    }
]

const ServicesCard = () => {
    return (
        <motion.div
        id="services"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full mt-8 lg:mt-16 lg:absolute lg:bottom-0 lg:left-0 lg:z-40 lg:transform lg:translate-y-1/2"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once:true
                            }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <Card className="group hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-sm border-none">
                                <CardContent className="p-4 sm:p-6">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="mb-4 p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                                            <i className={`fi ${service.icon} text-2xl sm:text-3xl text-[#00223a] group-hover:text-[#00223a] transition-colors duration-300 w-max h-max flex items-center justify-center`}>
                                            </i>
                                        </div>
                                        <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">{service.title}</h3>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default ServicesCard

