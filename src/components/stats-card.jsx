import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"



export const  StatsCard = ({
  title,
  value,
  actionLabel,
  onAction,
  className,
  icon
}) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-semibold">{value}</p>
          </div>
          {icon && (
            <div className="text-muted-foreground">
              {icon}
            </div>
          )}
        </div>
        {actionLabel && (
          <Button 
            onClick={() => {}} 
            className="w-full mt-4 bg-black text-white hover:bg-black/90"
          >
            {actionLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

