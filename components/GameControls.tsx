"use client"

import { Play, RotateCcw, SkipForward, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GameControlsProps {
  isPlaying: boolean
  isCompleted: boolean
  onStart: () => void
  onReset: () => void
  onNext: () => void
  onHome: () => void
  canGoNext: boolean
}

export const GameControls = ({
  isPlaying,
  isCompleted,
  onStart,
  onReset,
  onNext,
  onHome,
  canGoNext,
}: GameControlsProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Button onClick={onHome} className="bg-gray-600/20 hover:bg-gray-600/30 text-white border border-white/20">
        <Home className="w-4 h-4 mr-2" />
        Home
      </Button>

      {!isPlaying && !isCompleted && (
        <Button
          onClick={onStart}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white"
        >
          <Play className="w-4 h-4 mr-2" />
          Start Game
        </Button>
      )}

      <Button onClick={onReset} className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:opacity-90 text-white">
        <RotateCcw className="w-4 h-4 mr-2" />
        Reset
      </Button>

      {isCompleted && canGoNext && (
        <Button onClick={onNext} className="bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white">
          <SkipForward className="w-4 h-4 mr-2" />
          Next Level
        </Button>
      )}
    </div>
  )
}
