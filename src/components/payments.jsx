'use client'

import { useState } from 'react'
import { X, CreditCard } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"



export default function PaymentModal({
  open,
  onOpenChange,
  productName = "Custom CRM for Small Businesses",
  vendorName = "TechGrow Solution",
  amount = 130000,
}) {
  const [paymentMethod, setPaymentMethod] = useState('card')

  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="sm:max-w-[1200px] ">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Payment</DialogTitle>
            
          </div>
        </DialogHeader>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium">Order Summary</h3>
              <h4 className="text-lg font-semibold">{productName}</h4>
              <p className="text-sm text-muted-foreground">
                Offered by: {vendorName}
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                View Solution Details
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Payment Method</h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-gray-50 ${
                    paymentMethod === 'card' ? 'border-black bg-gray-50' : ''
                  }`}
                >
                  <CreditCard className="h-6 w-6" />
                  <span className="text-sm">Card</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-4 border rounded-lg flex items-center justify-center hover:bg-gray-50 ${
                    paymentMethod === 'paypal' ? 'border-black bg-gray-50' : ''
                  }`}
                >
                  <span className="text-xl">P</span>
                </button>
                <button
                  onClick={() => setPaymentMethod('apple')}
                  className={`p-4 border rounded-lg flex items-center justify-center hover:bg-gray-50 ${
                    paymentMethod === 'apple' ? 'border-black bg-gray-50' : ''
                  }`}
                >
                  <span className="text-xl">⌘</span>
                </button>
              </div>
            </div>

            {paymentMethod === 'card' && (
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="First Last" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Card number</label>
                  <Input type="text" inputMode="numeric" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Expires</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => (
                          <SelectItem key={i + 1} value={(i + 1).toString()}>
                            {(i + 1).toString().padStart(2, '0')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Year</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => {
                          const year = new Date().getFullYear() + i
                          return (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          )
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">CVC</label>
                    <Input type="text" inputMode="numeric" maxLength={4} />
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Column */}
          <div className="bg-gray-50 p-6 rounded-lg space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium">Price Summary</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Price</span>
                <span className="text-2xl font-bold">{amount.toLocaleString()} DZD</span>
              </div>
            </div>
            <Button className="w-full" size="lg">
              Pay now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

