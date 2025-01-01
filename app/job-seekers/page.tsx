import { JobSearch } from "@/components/job-seekers/job-search"
import { JobListings } from "@/components/job-seekers/job-listing"

export default function JobSeekersPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="py-8 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-4xl font-bold">All Jobs</h1>
                </div>
            </div>
            <JobSearch />
            <JobListings />
        </main>
    )
}

