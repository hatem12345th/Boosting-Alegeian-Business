'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const navItems = [
  { label: 'Profile', href: '#profile', active: true },
  { label: 'Account & Security', href: '#security' },
  { label: 'Notifications', href: '#notifications' },
  { label: 'Language & Region', href: '#language' },
  { label: 'Help & Support', href: '#support' },
  { label: 'Legal', href: '#legal' },
]

export default function SettingsLayout() {
  const [profilePicture, setProfilePicture] = useState(null)
  const [businessName, setBusinessName] = useState('Problem Posters')
  const [description, setDescription] = useState('Innovative Tech Solutions for Modern Businesses.')
  const [industry, setIndustry] = useState('IT & Technology')
  const [portfolioLinks, setPortfolioLinks] = useState(['https://shadcn.com', 'http://twitter.com/shadcn'])

  const addPortfolioLink = () => {
    setPortfolioLinks([...portfolioLinks, ''])
  }

  const updatePortfolioLink = (index, value) => {
    const newLinks = [...portfolioLinks]
    newLinks[index] = value
    setPortfolioLinks(newLinks)
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Settings</h1>
        <div className="grid grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-2 rounded-md text-sm",
                  item.active ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#logout"
              className="block px-4 py-2 rounded-md text-sm text-red-600 hover:bg-red-50"
            >
              Logout
            </a>
          </nav>

          {/* Main Content */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
              <h2 className="text-xl font-semibold">Profile</h2>

              {/* Profile Picture */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Profile Picture</h3>
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-gray-100 text-gray-900 text-xl">
                      P
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm">
                      Change Picture
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600">
                      Delete Picture
                    </Button>
                  </div>
                </div>
              </div>

              {/* Business Name */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Business/Start up name</h3>
                  <Input
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Description</h3>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground">
                    You can @mention other users and organizations to link to them.
                  </p>
                </div>
              </div>

              {/* Industry */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Industry</h3>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="IT & Technology">IT & Technology</SelectItem>
                      <SelectItem value="Finance">Finance</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Portfolio Links */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Portfolio Links</h3>
                  <p className="text-xs text-muted-foreground">
                    Add links to your website, blog, or external portfolio.
                  </p>
                  <div className="space-y-2">
                    {portfolioLinks.map((link, index) => (
                      <Input
                        key={index}
                        value={link}
                        onChange={(e) => updatePortfolioLink(index, e.target.value)}
                        placeholder="https://"
                      />
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={addPortfolioLink}
                    >
                      Add URL
                    </Button>
                  </div>
                </div>
              </div>

              {/* Update Button */}
              <Button className="w-full sm:w-auto">
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

