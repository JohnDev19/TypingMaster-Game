"use client"

import { Lock, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { levels } from "../data/levels"
import { useState, useRef, useEffect } from "react"

interface LevelSelectorProps {
  currentLevel: number
  onSelectLevel: (levelId: number) => void
  unlockedLevels: number
}

export const LevelSelector = ({ currentLevel, onSelectLevel, unlockedLevels }: LevelSelectorProps) => {
  const [showScrollUp, setShowScrollUp] = useState(false)
  const [showScrollDown, setShowScrollDown] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "from-green-500 to-emerald-600"
      case "medium":
        return "from-blue-500 to-cyan-600"
      case "hard":
        return "from-orange-500 to-red-600"
      case "master":
        return "from-purple-500 to-pink-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  const getDifficultyBg = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-500/20"
      case "medium":
        return "bg-blue-500/20"
      case "hard":
        return "bg-orange-500/20"
      case "master":
        return "bg-purple-500/20"
      default:
        return "bg-gray-500/20"
    }
  }

  const getDifficultyLetter = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "E"
      case "medium":
        return "M"
      case "hard":
        return "H"
      case "master":
        return "★"
      default:
        return "?"
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
      setShowScrollUp(scrollTop > 10)
      setShowScrollDown(scrollTop < scrollHeight - clientHeight - 10)
    }
  }

  const scrollTo = (direction: "up" | "down") => {
    if (scrollRef.current) {
      const scrollAmount = 200
      const newScrollTop =
        direction === "up" ? scrollRef.current.scrollTop - scrollAmount : scrollRef.current.scrollTop + scrollAmount

      scrollRef.current.scrollTo({
        top: newScrollTop,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll)
      handleScroll()
      return () => scrollElement.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-between">
        Select Level
        <div className="text-sm font-normal text-white/60">
          {currentLevel} / {levels.length}
        </div>
      </h3>

      <div className="relative">
        {/* Scroll Up Button */}
        {showScrollUp && (
          <button
            onClick={() => scrollTo("up")}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 bg-gradient-to-b from-purple-600 to-transparent p-2 rounded-full hover:from-purple-500 transition-all duration-300 shadow-lg"
          >
            <ChevronUp className="w-5 h-5 text-white" />
          </button>
        )}

        {/* Scrollable Grid */}
        <div
          ref={scrollRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 max-h-72 overflow-y-auto pr-2 custom-scrollbar"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#8b5cf6 transparent",
          }}
        >
          {levels.map((level) => {
            const isUnlocked = level.id <= unlockedLevels
            const isCurrent = level.id === currentLevel

            return (
              <Button
                key={level.id}
                onClick={() => isUnlocked && onSelectLevel(level.id)}
                disabled={!isUnlocked}
                className={`
                  relative h-16 w-full text-sm font-semibold transition-all duration-300 group overflow-hidden
                  ${
                    isCurrent
                      ? `bg-gradient-to-r ${getDifficultyColor(level.difficulty)} text-white shadow-xl scale-110 ring-2 ring-white/30`
                      : isUnlocked
                        ? `${getDifficultyBg(level.difficulty)} text-white hover:scale-105 hover:shadow-lg border border-white/20`
                        : "bg-gray-600/20 text-gray-400 cursor-not-allowed border border-gray-600/30"
                  }
                `}
              >
                {/* Difficulty Badge */}
                <div
                  className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-gradient-to-r ${getDifficultyColor(level.difficulty)} flex items-center justify-center text-white text-xs font-bold shadow-lg z-10 ${
                    isCurrent ? "animate-pulse ring-2 ring-white/50" : ""
                  }`}
                >
                  {getDifficultyLetter(level.difficulty)}
                </div>

                {/* Level Content */}
                {isUnlocked ? (
                  <div className="flex flex-col items-center justify-center mt-2">
                    <span className="text-lg font-bold">{level.id}</span>
                    <span className="text-xs opacity-75 capitalize">{level.difficulty}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                )}

                {/* Completion indicator */}
                {isUnlocked && level.id < currentLevel && (
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </Button>
            )
          })}
        </div>

        {/* Scroll Down Button */}
        {showScrollDown && (
          <button
            onClick={() => scrollTo("down")}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 bg-gradient-to-t from-purple-600 to-transparent p-2 rounded-full hover:from-purple-500 transition-all duration-300 shadow-lg"
          >
            <ChevronDown className="w-5 h-5 text-white" />
          </button>
        )}

        {/* Gradient overlays for scroll indication */}
        {showScrollUp && (
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-purple-900/50 to-transparent pointer-events-none z-5" />
        )}
        {showScrollDown && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-purple-900/50 to-transparent pointer-events-none z-5" />
        )}
      </div>

      {/* Legend with difficulty badges */}
      <div className="mt-6 space-y-3">
        <div className="text-xs text-white/60 mb-2">Difficulty Levels</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "Easy", color: "from-green-500 to-emerald-600", range: "1-15", letter: "E" },
            { name: "Medium", color: "from-blue-500 to-cyan-600", range: "16-30", letter: "M" },
            { name: "Hard", color: "from-orange-500 to-red-600", range: "31-45", letter: "H" },
            { name: "Master", color: "from-purple-500 to-pink-600", range: "46-50", letter: "★" },
          ].map((diff) => (
            <div key={diff.name} className="flex items-center gap-2 text-xs">
              <div
                className={`w-6 h-6 rounded-full bg-gradient-to-r ${diff.color} shadow-sm flex items-center justify-center text-white font-bold text-xs`}
              >
                {diff.letter}
              </div>
              <div className="flex flex-col">
                <span className="text-white/80 font-medium">{diff.name}</span>
                <span className="text-white/50">{diff.range}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Statistics */}
      <div className="mt-4 bg-white/5 rounded-xl p-3">
        <div className="flex justify-between items-center text-xs">
          <span className="text-white/60">Unlocked Progress</span>
          <span className="text-white font-semibold">{Math.round((unlockedLevels / levels.length) * 100)}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2 mt-2">
          <div
            className="bg-gradient-to-r from-green-400 to-purple-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(unlockedLevels / levels.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
