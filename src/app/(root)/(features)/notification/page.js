'use client'

import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight, MoreVertical, Trash2, Check } from 'lucide-react'



export default function Notifications() {
  const [selectedRows, setSelectedRows] = useState([])
 
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const notifications = [
    {
      id: '1',
      type: 'New Proposal',
      title: 'TechSavvy Solutions',
      description: 'has submitted a proposal for your problem \'Build an E-commerce Platform\' with a budget of 150,000 DZD. Review their offer n...'
    },
    {
      id: '2',
      type: 'New Proposal',
      title: 'WebNext Solutions',
      description: 'has submitted a proposal for your problem \'Build an E-commerce Platform.\' Review their offer to see how they can help.'
    },
  ]

  const toggleSelectAll = () => {
    if (selectedRows.length === notifications.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(notifications.map(n => n.id))
    }
  }

  const toggleSelectRow = (id) => {
    setSelectedRows(prev =>
      prev.includes(id)
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center gap-4">
          <h1 className="text-xl font-semibold">Notifications</h1>
          <div className="flex-1 max-w-xs">
            <Input 
              type="search" 
              placeholder="Search..." 
              className="w-full bg-white"

            />
          </div>
          <Button variant="outline" size="sm">
            Sort
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-red-600 hover:text-red-600 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
          <Button variant="ghost" size="sm">
            <Check className="w-4 h-4 mr-2" />
            Mark as Read
          </Button>
        </div>
      </div>

      <div className="border rounded-lg bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox 
                  checked={selectedRows.length === notifications.length}
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="w-8"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notifications.map((notification) => (
              <TableRow key={notification.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(notification.id)}
                    onCheckedChange={() => toggleSelectRow(notification.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{notification.type}</span>
                      <span className="text-sm">{notification.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {selectedRows.length} of {notifications.length} row(s) selected.
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Rows per page</span>
            <Select
              value={rowsPerPage.toString()}
              onValueChange={(value) => setRowsPerPage(parseInt(value))}
            >
              <SelectTrigger className="w-16">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-1 text-sm">
            Page {currentPage} of 10
          </div>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="w-8 h-8">
              <ChevronFirst className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8">
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="w-8 h-8">
              <ChevronLast className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

