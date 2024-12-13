"use client"
import { StatsCard } from "@/components/stats-card"
import { FileText, MessageSquare, Briefcase, Wallet } from 'lucide-react'

export const StatesDemo = () => {
  return (
    <div className="w-[300px] mx-atuo space-y-4 px-4">
    <StatsCard
      title="Budget Utilized"
      value="12,234.00 DZD"
      icon={<Wallet className="h-4 w-4" />}
    />
    <StatsCard
      title="Total Problems Posted"
      value="12 Problems"
      icon={<FileText className="h-4 w-4" />}
      actionLabel="Post new Problem"
      onAction={() => console.log('Post new problem')}
    />
    <StatsCard
      title="Proposals Received"
      value="25 Proposals"
      icon={<MessageSquare className="h-4 w-4" />}
      actionLabel="View Proposals"
      onAction={() => console.log('View proposals')}
    />
    <StatsCard
      title="Active Deals"
      value="05 Deals"
      icon={<Briefcase className="h-4 w-4" />}
    />
  </div>
  )
}
