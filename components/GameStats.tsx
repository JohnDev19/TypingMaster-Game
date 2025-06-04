import { Clock, Target, Zap, AlertCircle } from "lucide-react"
import type { GameStats as GameStatsType } from "../types/game"

interface GameStatsProps {
  stats: GameStatsType
  targetWPM: number
}

export const GameStats = ({ stats, targetWPM }: GameStatsProps) => {
  const statItems = [
    {
      icon: Zap,
      label: "WPM",
      value: stats.wpm,
      target: targetWPM,
      color: stats.wpm >= targetWPM ? "text-green-400" : "text-yellow-400",
    },
    {
      icon: Target,
      label: "Accuracy",
      value: `${stats.accuracy}%`,
      color: stats.accuracy >= 95 ? "text-green-400" : stats.accuracy >= 85 ? "text-yellow-400" : "text-red-400",
    },
    {
      icon: Clock,
      label: "Time",
      value: `${stats.timeElapsed}s`,
      color: "text-blue-400",
    },
    {
      icon: AlertCircle,
      label: "Errors",
      value: stats.errorsCount,
      color: stats.errorsCount === 0 ? "text-green-400" : "text-red-400",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statItems.map((item, index) => {
        const Icon = item.icon
        return (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <Icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
            <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
            <div className="text-white/60 text-sm">
              {item.label}
              {item.target && <div className="text-xs text-white/40">Target: {item.target}</div>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
