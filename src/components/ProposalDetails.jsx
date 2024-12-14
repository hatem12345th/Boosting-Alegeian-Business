'use client'

import Image from "next/image"
import { X, MapPin, Bookmark, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"



export default function ProposalDetails({
  open,
  onOpenChange
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Proposal Details</DialogTitle>
         
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header Section */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">Custom CRM for Small Businesses</h2>
                <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-100">
                  Pending Acceptance
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="destructive" size="sm">
                  Decline
                </Button>
                <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700">
                  Accept
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Company Info */}
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/Avatar.png"
                  alt="TechGrow Solutions"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">TechGrow Solutions</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Fisdis, Batna, Algeria</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Badge variant="secondary">Category 1</Badge>
              <Badge variant="secondary">Category 2</Badge>
            </div>
          </div>

          {/* Solution Description */}
          <div className="space-y-2">
            <h3 className="font-medium">Solution description</h3>
            <p className="text-sm text-muted-foreground">
              Our small business requires a customized CRM system to help us manage customer relationships, track sales activities, and analyze performance data. The system must be user-friendly, scalable, and integrate with existing tools like email and accounting software. Key features include contact management, sales pipeline tracking, and reporting dashboards.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <h3 className="font-medium">Key Features</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Customizable dashboards for tracking sales.</li>
              <li>Integration with Gmail and QuickBooks.</li>
              <li>Automated task reminders for sales teams.</li>
            </ul>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <h3 className="font-medium">Price Range</h3>
            <p className="text-sm text-muted-foreground">DZD 120,000 - DZD 150,000.</p>
          </div>

          {/* Proposed Timeline */}
          <div className="space-y-2">
            <h3 className="font-medium">Proposed Timeline</h3>
            <p className="text-sm text-muted-foreground">2 months.</p>
          </div>

          {/* Attachments */}
          <div>
            <h3 className="font-medium">Attachments</h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

