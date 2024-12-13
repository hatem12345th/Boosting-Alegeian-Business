"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bookmark } from 'lucide-react'
import { FaBookmark } from "react-icons/fa";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Details } from "./Details";




export const  ProblemCard = ({
  title,
  description,
  priceRange,
  company,
  postedTime,
  onViewDetails,
  onContact
}) =>  {
  const [tab,setTab] = useState(false)

  return (

    <Card className="w-full mt-1">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-4 flex-1">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">{title}</h3>
              <Button variant="ghost" size="icon" className="text-muted-foreground " onClick={() => setTab(!tab)}>
              {tab ? <FaBookmark color="black" /> :<Bookmark />}    

              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Price Range: {priceRange}</p>
            <p className="text-sm">{description}</p>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <p>Offered by: {company}</p>
              <p>Posted {postedTime}</p>
            </div>
            <div className="flex items-center gap-4">
          
            <Dialog>

            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={onViewDetails}
                
              >
                View details
              </Button>
              </DialogTrigger>
                <Details    />
              </Dialog>
              <Button 
                className="flex-1 bg-black text-white hover:bg-black/90"
                onClick={onContact}
              >
                Contact now
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

