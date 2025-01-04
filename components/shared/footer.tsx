"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={200}
                height={200}
                className="filter invert"
              />
            </Link>
            <p className="text-sm">
              Connecting exceptional talent with innovative companies since 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://il.linkedin.com/company/wix-com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <i className="fi fi-brands-linkedin text-xl flex items-center justify-center w-max h-max"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/wix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <i className="fi fi-brands-facebook text-xl flex items-center justify-center w-max h-max"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.twitter.com/wix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <i className="fi fi-brands-twitter text-xl flex items-center justify-center w-max h-max"></i>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {['Consulting', 'Direct Placement', 'Staff Augmentation', 'Contract to Hire'].map((service) => (
                <li key={service}>
                  <Link href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
             
                <li className='flex flex-col gap-4' >
                  <Link href='/whoweare' className="text-gray-400 hover:text-white transition-colors duration-200">About Us</Link>
                  <Link href='/contact' className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</Link>
                  <Link href='/whoweare' className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
                  {/* <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {item}
                  </Link> */}
                </li>
             
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-sm mb-4 text-gray-400">Subscribe to our newsletter for the latest industry insights and job opportunities.</p>
            <form onSubmit={(e) => {
              e.preventDefault()
            }} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">&copy; 2024 BAM Hire. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}