"use client"

import { useState } from 'react'
import { MapPin, Building2, Clock, DollarSign, ChevronRight } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from 'framer-motion'
interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    posted: string;
    description: string;
    category: string;
}

interface ApplicationData {
    firstName: string;
    lastName: string;
    email: string;
    resume: File | null;
    coverLetter: string;
}

const jobs: Job[] = [
    {
        id: 1,
        title: "Senior Software Engineer",
        company: "Tech Solutions Inc",
        location: "New York, NY",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        posted: "2 days ago",
        description: `We are seeking a Senior Software Engineer to join our growing team...

Requirements:
• 5+ years of experience in software development
• Strong proficiency in React, Node.js, and TypeScript
• Experience with cloud platforms (AWS/Azure/GCP)
• Excellent problem-solving and communication skills

Benefits:
• Competitive salary and equity
• Health, dental, and vision insurance
• 401(k) matching
• Flexible PTO
• Remote work options`,
        category: "Technology & IT"
    },
    {
        id: 2,
        title: "HR Manager",
        company: "Global Industries",
        location: "Chicago, IL",
        type: "Full-time",
        salary: "$90,000 - $110,000",
        posted: "1 day ago",
        description: `We're looking for an experienced HR Manager to lead our HR initiatives...

Requirements:
• 7+ years of HR experience
• Strong knowledge of employment laws and regulations
• Experience with HRIS systems
• Excellence in employee relations

Benefits:
• Comprehensive benefits package
• Professional development
• Hybrid work model
• Annual bonuses`,
        category: "HR"
    },
    {
        id: 3,
        title: "Financial Analyst",
        company: "Investment Corp",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$85,000 - $105,000",
        posted: "3 days ago",
        description: `Seeking a detail-oriented Financial Analyst to join our team...

Requirements:
• Bachelor's degree in Finance or related field
• 3+ years of financial analysis experience
• Advanced Excel skills
• Strong analytical mindset

Benefits:
• Performance bonuses
• Health and wellness benefits
• 401(k) with matching
• Training and certification support`,
        category: "Finance"
    },
    {
        id: 4,
        title: "Marketing Manager",
        company: "Digital Agency",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$80,000 - $110,000",
        posted: "5 days ago",
        description: `Join our team as a Marketing Manager and help drive our growth...

Requirements:
• 5+ years of marketing experience
• Strong understanding of digital marketing
• Experience with Google Analytics
• Excellent communication skills

Benefits:
• Competitive salary and bonus
• Health and wellness benefits
• 401(k) with matching
• Flexible work schedule`,
        category: "Marketing"
    },
    {
        id: 5,
        title: "Data Scientist",
        company: "AI Startup",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$110,000 - $140,000",
        posted: "7 days ago",
        description: `We are seeking a Data Scientist to join our growing team...

Requirements:
• Master's degree in Computer Science or related field
• 3+ years of experience in data science
• Strong programming skills in Python
• Experience with machine learning frameworks

Benefits:
• Competitive salary and equity
• Health, dental, and vision insurance
• 401(k) matching
• Flexible PTO
• Opportunity to work with cutting-edge AI technology`,
        category: "Technology & IT"
    },
    {
        id: 6,
        title: "Graphic Designer",
        company: "Design Studio",
        location: "Los Angeles, CA",
        type: "Full-time",
        salary: "$60,000 - $80,000",
        posted: "10 days ago",
        description: `Seeking a talented Graphic Designer to join our team...

Requirements:
• 3+ years of experience in graphic design
• Strong skills in Adobe Creative Suite
• Portfolio showcasing exceptional design skills
• Excellent communication skills

Benefits:
• Competitive salary and bonus
• Health and wellness benefits
• 401(k) with matching
• Flexible work schedule`,
        category: "Creative & Design"
    }
]

export function JobListings() {

    const { toast } = useToast()

    const [selectedJob, setSelectedJob] = useState<Job | null>(null)

    const [applicationData, setApplicationData] = useState<ApplicationData>({
        firstName: '',
        lastName: '',
        email: '',
        resume: null,
        coverLetter: ''
    })
    const [showPreview, setShowPreview] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setApplicationData(prev => ({ ...prev, [name]: value }))
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            setApplicationData(prev => ({ ...prev, resume: file }))
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!applicationData.firstName || !applicationData.lastName) {
            toast({
                title: "Error",
                description: "First name and last name are required.",
                variant: "destructive",
            })
            return
        }
        setShowPreview(true)
    }

    return (
        <div className="container mx-auto max-w-6xl py-12 px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-[#00223a]">Latest Job Openings</h2>
                <div className="text-sm text-gray-600">
                    Showing {jobs.length} jobs
                </div>
            </div>

            <div className="grid gap-6">
                {jobs.map((job, index) => (
                    <motion.div
                        initial={{
                            x: 100,
                            opacity: 0
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: 0.7,
                            ease: "backInOut",
                            delay: 0.05 * index
                        }}
                        key={job.id}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-[#00223a]">{job.title}</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <Building2 className="h-4 w-4" />
                                        {job.company}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {job.posted}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <DollarSign className="h-4 w-4" />
                                        {job.salary}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Badge variant="secondary" className="bg-[#00223a]/10 text-[#00223a] hover:bg-[#00223a]/20">
                                        {job.type}
                                    </Badge>
                                    <Badge variant="outline" className="border-[#00223a]/20 text-[#00223a]">
                                        {job.category}
                                    </Badge>
                                </div>
                            </div>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        className="w-full md:w-auto bg-[#00223a] hover:bg-[#003152] text-white"
                                        onClick={() => setSelectedJob(job)}
                                    >
                                        View Details
                                        <ChevronRight className="h-4 w-4 ml-2" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                    <DialogHeader>
                                        <DialogTitle className="text-[#00223a]">{selectedJob?.title}</DialogTitle>
                                    </DialogHeader>
                                    <div className="mt-4 space-y-4">
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Building2 className="h-4 w-4" />
                                                {selectedJob?.company}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="h-4 w-4" />
                                                {selectedJob?.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <DollarSign className="h-4 w-4" />
                                                {selectedJob?.salary}
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Badge variant="secondary" className="bg-[#00223a]/10 text-[#00223a] hover:bg-[#00223a]/20">
                                                {selectedJob?.type}
                                            </Badge>
                                            <Badge variant="outline" className="border-[#00223a]/20 text-[#00223a]">
                                                {selectedJob?.category}
                                            </Badge>
                                        </div>
                                        <div className="prose prose-sm max-w-none">
                                            <pre className="whitespace-pre-wrap font-sans">{selectedJob?.description}</pre>
                                        </div>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName">First Name *</Label>
                                                    <Input
                                                        id="firstName"
                                                        name="firstName"
                                                        required
                                                        value={applicationData.firstName}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName">Last Name *</Label>
                                                    <Input
                                                        id="lastName"
                                                        name="lastName"
                                                        required
                                                        value={applicationData.lastName}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={applicationData.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="resume">Resume</Label>
                                                <Input
                                                    id="resume"
                                                    name="resume"
                                                    type="file"
                                                    onChange={handleFileChange}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="coverLetter">Cover Letter</Label>
                                                <Textarea
                                                    id="coverLetter"
                                                    name="coverLetter"
                                                    value={applicationData.coverLetter}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <Button type="submit" className="w-full bg-[#00223a] hover:bg-[#003152] text-white">
                                                Submit Application
                                            </Button>
                                        </form>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </motion.div>
                ))}
            </div>

            {showPreview && (
                <Dialog open={showPreview} onOpenChange={setShowPreview}>
                    <DialogContent className=" h-screen max-w-2xl overflow-y-scroll z-50">
                        <DialogHeader>
                            <DialogTitle>Application Preview</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div>
                                <strong>Job:</strong> {selectedJob?.title} (ID: {selectedJob?.id})
                            </div>
                            <div>
                                <strong>First Name:</strong> {applicationData.firstName}
                            </div>
                            <div>
                                <strong>Last Name:</strong> {applicationData.lastName}
                            </div>
                            <div>
                                <strong>Email:</strong> {applicationData.email}
                            </div>
                            <div>
                                <strong>Resume:</strong> {applicationData.resume ? applicationData.resume.name : 'Not provided'}
                            </div>
                            <div>
                                <strong>Cover Letter:</strong>
                                <p className="mt-2 whitespace-pre-wrap">{applicationData.coverLetter || 'Not provided'}</p>
                            </div>
                            <Button
                                onClick={() => {
                                    setShowPreview(false)
                                    toast({
                                        title: "Application Submitted",
                                        description: "Your application has been successfully submitted.",
                                    })
                                }}
                                className="w-full bg-[#00223a] hover:bg-[#003152] text-white"
                            >
                                Confirm and Submit
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    )
}

