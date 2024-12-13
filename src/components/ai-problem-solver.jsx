'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AIProblemSolver() {
  const [problem, setProblem] = useState("")

  const handleGenerate = () => {
    // Handle AI generation
    console.log("Generating solutions for:", problem)
  }

  return (
    <Card className="Y text-white">
      <CardHeader>
        <CardTitle>Solve your Problem with AI</CardTitle>
        <p className="text-slate-300 text-sm">
          Enter your challenge, and our AI will connect you with the best startups to solve it.
        </p>
      </CardHeader>
      <CardContent className="flex gap-2">
        <Input
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="What do you need help with?"
          className="flex-1 Inn  text-white placeholder:text-slate-400"
        />
        <Button 
          onClick={handleGenerate}
          className=" X text-white "
        >
          Generate
        </Button>
      </CardContent>
    </Card>
  )
}

