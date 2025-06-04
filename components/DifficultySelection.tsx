"use client"

import { Book, Target, Crown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DifficultySelectionProps {
  onSelectDifficulty: (difficulty: "easy" | "medium" | "hard" | "master") => void
}

export const DifficultySelection = ({ onSelectDifficulty }: DifficultySelectionProps) => {
  const difficulties = [
    {
      id: "easy" as const,
      title: "Easy Mode",
      subtitle: "Perfect for Beginners",
      wpm: "10-30 WPM",
      icon: Book,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/20",
      features: ["Simple sentences", "Common words", "Basic punctuation", "Gentle learning curve"],
    },
    {
      id: "medium" as const,
      title: "Medium Mode",
      subtitle: "For Developing Typists",
      wpm: "30-60 WPM",
      icon: Target,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-500/20",
      features: ["Complex sentences", "Technical terms", "Mixed content", "Moderate challenges"],
    },
    {
      id: "hard" as const,
      title: "Hard Mode",
      subtitle: "For Experienced Typists",
      wpm: "60-90 WPM",
      icon: Zap,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-500/20",
      features: ["Programming code", "Special characters", "Speed challenges", "Advanced vocabulary"],
    },
    {
      id: "master" as const,
      title: "Master Mode",
      subtitle: "Elite Challenge",
      wpm: "90+ WPM",
      icon: Crown,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/20",
      features: ["Academic texts", "Complex code", "Multiple languages", "Expert level"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 flex items-center justify-center relative overflow-hidden p-4">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Choose Your Challenge</h1>
          <p className="text-purple-200 text-lg md:text-xl">
            Select your difficulty level and start your typing adventure
          </p>
        </div>

        {/* Difficulty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {difficulties.map((difficulty, index) => {
            const Icon = difficulty.icon
            return (
              <div
                key={difficulty.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                {/* Number badge */}
                <div className="text-6xl font-bold text-white/20 mb-4 group-hover:text-white/30 transition-colors">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r ${difficulty.color}`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title and subtitle */}
                <h3 className="text-2xl font-bold text-white mb-2">{difficulty.title}</h3>
                <p className="text-purple-200 mb-4">{difficulty.subtitle}</p>

                {/* WPM badge */}
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white mb-6 ${difficulty.bgColor}`}
                >
                  {difficulty.wpm}
                </div>

                {/* Description */}
                <p className="text-white/80 mb-6 text-sm leading-relaxed">
                  {difficulty.id === "easy" && "Start your typing journey with simple texts and basic challenges"}
                  {difficulty.id === "medium" && "Challenge yourself with complex texts and advanced vocabulary"}
                  {difficulty.id === "hard" && "Test your skills with programming code and special characters"}
                  {difficulty.id === "master" && "Prove your mastery with the most demanding typing challenges"}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {difficulty.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-white/70">
                      <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${difficulty.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Start button */}
                <Button
                  onClick={() => onSelectDifficulty(difficulty.id)}
                  className={`w-full bg-gradient-to-r ${difficulty.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg`}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Start Challenge
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
