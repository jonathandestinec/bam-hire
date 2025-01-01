"use client"

import { useState } from 'react'
import { Search, MapPin, Briefcase } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function JobSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')

  const categories = [
    "All Categories",
    "HR",
    "Healthcare",
    "Technology & IT",
    "Management",
    "Finance",
    "Law"
  ]

  return (
    <div className="w-full bg-gradient-to-r from-[#00223a] to-[#001829] py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Search for Your Next Job
        </h1>
        
        <div className="grid gap-4 md:grid-cols-[1fr,1fr,auto] bg-white p-4 rounded-lg shadow-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Job title or keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Button className="w-full md:w-auto bg-[#00223a] hover:bg-[#003152] text-white">
            Search Jobs
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`p-4 rounded-lg text-center transition-all duration-200 ${
                category === cat
                  ? 'bg-white text-[#00223a] shadow-lg'
                  : 'bg-[#001829]/50 text-white hover:bg-[#001829]/70'
              }`}
            >
              <Briefcase className="h-6 w-6 mx-auto mb-2" />
              <span className="text-sm font-medium">{cat}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
