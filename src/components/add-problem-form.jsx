'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"



export default function AddProblemForm({
  open,
  onOpenChange,
  onSubmit
}) {
  const [priceType, setPriceType] = useState('range')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit?.(formData)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Add new Problem</DialogTitle>
          
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g: Custom CRM for Small Businesses"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe your solution"
                rows={6}
              />
            </div>

            <div className="space-y-4">
              <RadioGroup
                defaultValue="range"
                onValueChange={(value) => setPriceType(value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="range" id="price-range" />
                  <Label htmlFor="price-range">Price Range (Min - Max)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fixed" id="fixed-price" />
                  <Label htmlFor="fixed-price">Fixed Price</Label>
                </div>
              </RadioGroup>

              {priceType === 'range' ? (
                <div className="flex gap-4">
                  <Input name="price-min" placeholder="Min" />
                  <Input name="price-max" placeholder="Max" />
                </div>
              ) : (
                <Input name="price-fixed" placeholder="Enter amount" />
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Timeline/deadline</Label>
              <Input
                id="timeline"
                name="timeline"
                placeholder="DD Month YYYY - DD Month YYYY"
              />
            </div>

            <div className="space-y-2">
              <Label>Attachments</Label>
              <div className="flex items-center gap-4">
                <Button type="button" variant="outline" size="sm">
                  Upload file
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2">
            <Button type="button" variant="ghost" onClick={() => onOpenChange?.(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Publish
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

