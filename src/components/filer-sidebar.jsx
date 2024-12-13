'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns"
import { cn } from "@/lib/utils"



export const FilterSidebar =  ({ className }) => {
  const [date, setDate] = useState()
  const [statusFilters, setStatusFilters] = useState({
    open: true,
    inProgress: true,
    completed: false,
    closed: false,
    cancelled: false,
  })

  const handleClearAll = () => {
    setStatusFilters({
      open: false,
      inProgress: false,
      completed: false,
      closed: false,
      cancelled: false,
    })
    setDate(undefined)
  }

  return (
    <div className={cn("space-y-6 bg-white w-[85%] px-2 ml-auto max-h-[750px] rounded-xl py-6 ", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Filter</h2>
        <Button
          variant="link"
          className="text-red-500 h-auto p-0"
          onClick={handleClearAll}
        >
          Clear all
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Problem Status</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="open" 
                checked={statusFilters.open}
                onCheckedChange={(checked) => 
                  setStatusFilters(prev => ({ ...prev, open: checked === true }))
                }
              />
              <label htmlFor="open" className="text-sm">Open</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="inProgress" 
                checked={statusFilters.inProgress}
                onCheckedChange={(checked) => 
                  setStatusFilters(prev => ({ ...prev, inProgress: checked === true }))
                }
              />
              <label htmlFor="inProgress" className="text-sm">In Progress</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="completed" 
                checked={statusFilters.completed}
                onCheckedChange={(checked) => 
                  setStatusFilters(prev => ({ ...prev, completed: checked === true }))
                }
              />
              <label htmlFor="completed" className="text-sm">Completed</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="closed" 
                checked={statusFilters.closed}
                onCheckedChange={(checked) => 
                  setStatusFilters(prev => ({ ...prev, closed: checked === true }))
                }
              />
              <label htmlFor="closed" className="text-sm">Closed</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="cancelled" 
                checked={statusFilters.cancelled}
                onCheckedChange={(checked) => 
                  setStatusFilters(prev => ({ ...prev, cancelled: checked === true }))
                }
              />
              <label htmlFor="cancelled" className="text-sm">Cancelled</label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Problem Status</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Empty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Budget Range (DZD)</Label>
          <div className="flex gap-2">
            <div className="flex-1">
              <Label className="sr-only">Min</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Empty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000">1000</SelectItem>
                  <SelectItem value="5000">5000</SelectItem>
                  <SelectItem value="10000">10000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label className="sr-only">Max</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Empty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5000">5000</SelectItem>
                  <SelectItem value="10000">10000</SelectItem>
                  <SelectItem value="50000">50000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Timeline/Deadline</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Placeholder"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>Sort by</Label>
          <RadioGroup defaultValue="most-recent">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="most-recent" id="most-recent" />
              <label htmlFor="most-recent" className="text-sm">Most Recent</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="budget" id="budget" />
              <label htmlFor="budget" className="text-sm">Budget</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="deadline" id="deadline" />
              <label htmlFor="deadline" className="text-sm">Deadline</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="most-viewed" id="most-viewed" />
              <label htmlFor="most-viewed" className="text-sm">most viewed</label>
            </div>
          </RadioGroup>
        </div>

        <Button className="w-full bg-black text-white hover:bg-black/90">
          Search
        </Button>
      </div>
    </div>
  )
}

