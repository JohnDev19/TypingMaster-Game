"use client"

import { Music, VolumeX, Volume2, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface MusicControlsProps {
  isPlaying: boolean
  volume: number
  isMuted: boolean
  onToggleMusic: () => void
  onToggleMute: () => void
  onVolumeChange: (volume: number) => void
}

export const MusicControls = ({
  isPlaying,
  volume,
  isMuted,
  onToggleMusic,
  onToggleMute,
  onVolumeChange,
}: MusicControlsProps) => {
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)

  return (
    <div className="flex items-center gap-2">
      {/* Music Toggle */}
      <Button
        onClick={onToggleMusic}
        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 p-2"
        title={isPlaying ? "Pause Background Music" : "Play Background Music"}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>

      {/* Volume Controls */}
      <div
        className="relative"
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
      >
        <Button
          onClick={onToggleMute}
          className="bg-white/10 hover:bg-white/20 text-white border border-white/20 p-2"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>

        {/* Volume Slider */}
        {showVolumeSlider && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => onVolumeChange(Number.parseFloat(e.target.value))}
              className="w-20 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-white text-xs text-center mt-1">{Math.round(volume * 100)}%</div>
          </div>
        )}
      </div>

      <div className="text-white/60 text-xs hidden md:block">Custom BGM</div>
      <Music className="w-4 h-4 text-white/60" />
    </div>
  )
}
