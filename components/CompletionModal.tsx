"use client"

import { Trophy, Star, Target, Zap, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { GameStats } from "../types/game"

interface CompletionModalProps {
  isOpen: boolean
  stats: GameStats
  targetWPM: number
  level: number
  onNext: () => void
  onReplay: () => void
  onClose: () => void
  canGoNext: boolean
}

export const CompletionModal = ({
  isOpen,
  stats,
  targetWPM,
  level,
  onNext,
  onReplay,
  onClose,
  canGoNext,
}: CompletionModalProps) => {
  if (!isOpen) return null

  const isPerfect = stats.accuracy === 100 && stats.errorsCount === 0
  const metTarget = stats.wpm >= targetWPM
  const getGrade = () => {
    if (isPerfect && metTarget) return "S+"
    if (stats.accuracy >= 95 && metTarget) return "S"
    if (stats.accuracy >= 90 && stats.wpm >= targetWPM * 0.8) return "A"
    if (stats.accuracy >= 80 && stats.wpm >= targetWPM * 0.6) return "B"
    if (stats.accuracy >= 70) return "C"
    return "D"
  }

  const grade = getGrade()
  const stars = grade === "S+" ? 3 : grade === "S" ? 3 : grade === "A" ? 2 : grade === "B" ? 1 : 0

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
      <div className="bg-gradient-to-br from-purple-900/95 to-pink-900/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl w-full max-w-sm sm:max-w-md md:max-w-lg border border-white/20 text-center max-h-[95vh] overflow-y-auto">
        {/* Close button */}
        <div className="flex justify-end p-4 pb-0">
          <button onClick={onClose} className="text-white/60 hover:text-white transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
          {/* Trophy icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Level Complete!</h2>
          <p className="text-purple-200 mb-4 sm:mb-6 text-sm sm:text-base">Level {level} finished</p>

          {/* Grade */}
          <div className="text-4xl sm:text-6xl font-bold text-white mb-3 sm:mb-4">{grade}</div>

          {/* Stars */}
          <div className="flex justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
            {[...Array(3)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 ${
                  i < stars ? "text-yellow-400 fill-yellow-400 scale-110" : "text-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">{stats.wpm}</div>
              <div className="text-white/60 text-xs sm:text-sm">WPM</div>
              <div className="text-xs text-white/40">Target: {targetWPM}</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">{stats.accuracy}%</div>
              <div className="text-white/60 text-xs sm:text-sm">Accuracy</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-white">{stats.timeElapsed}s</div>
              <div className="text-white/60 text-xs">Time</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-white">{stats.errorsCount}</div>
              <div className="text-white/60 text-xs">Errors</div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3 mb-6">
            {isPerfect && (
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-3 border border-yellow-500/30 backdrop-blur-sm">
                <p className="text-yellow-300 font-semibold text-sm sm:text-base">🎉 Perfect Score!</p>
                <p className="text-yellow-200 text-xs sm:text-sm">No errors made</p>
              </div>
            )}

            {metTarget && (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-3 border border-green-500/30 backdrop-blur-sm">
                <p className="text-green-300 font-semibold text-sm sm:text-base">🎯 Target Achieved!</p>
                <p className="text-green-200 text-xs sm:text-sm">WPM goal reached</p>
              </div>
            )}

            {stats.wpm > targetWPM * 1.2 && (
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-3 border border-purple-500/30 backdrop-blur-sm">
                <p className="text-purple-300 font-semibold text-sm sm:text-base">⚡ Speed Demon!</p>
                <p className="text-purple-200 text-xs sm:text-sm">Exceeded target by 20%+</p>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={onReplay}
              className="flex-1 bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 text-sm sm:text-base"
            >
              Replay Level
            </Button>
            {canGoNext && (
              <Button
                onClick={onNext}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white py-3 text-sm sm:text-base shadow-lg"
              >
                Next Level
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
