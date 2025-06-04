"use client"

import { useState, useEffect } from "react"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LoadingScreen } from "./components/LoadingScreen"
import { DifficultySelection } from "./components/DifficultySelection"
import { TypingArea } from "./components/TypingArea"
import { GameStats } from "./components/GameStats"
import { LevelSelector } from "./components/LevelSelector"
import { CompletionModal } from "./components/CompletionModal"
import { MusicControls } from "./components/MusicControls"
import { useTypingGame } from "./hooks/useTypingGame"
import { useBackgroundMusic } from "./hooks/useBackgroundMusic"
import { levels } from "./data/levels"
import { Play, RotateCcw, SkipForward } from "lucide-react"

type GameScreen = "loading" | "difficulty" | "game"

export default function TypingMasterGame() {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>("loading")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("")
  const [unlockedLevels, setUnlockedLevels] = useState(1)

  const {
    gameState,
    currentLevel,
    startGame,
    updateInput,
    nextLevel,
    resetGame,
    selectLevel,
    closeCompletion,
    totalLevels,
  } = useTypingGame()

  const { isPlaying, volume, isMuted, autoplayEnabled, toggleMusic, toggleMute, changeVolume, setAutoplayEnabled } =
    useBackgroundMusic()

  useEffect(() => {
    const saved = localStorage.getItem("typingmaster-progress")
    if (saved) {
      const progress = JSON.parse(saved)
      setUnlockedLevels(progress.unlockedLevels || 1)
    }
  }, [])

  useEffect(() => {
    if (gameState.isCompleted && gameState.stats.accuracy >= 70) {
      const newUnlockedLevels = Math.max(unlockedLevels, gameState.currentLevel + 1)
      setUnlockedLevels(newUnlockedLevels)
      localStorage.setItem(
        "typingmaster-progress",
        JSON.stringify({
          unlockedLevels: newUnlockedLevels,
        }),
      )
    }
  }, [gameState.isCompleted, gameState.stats.accuracy, gameState.currentLevel, unlockedLevels])

  useEffect(() => {
    const handleUserInteraction = () => {
      if (autoplayEnabled && !isPlaying) {
        toggleMusic()
      }
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("keydown", handleUserInteraction)
    }

    document.addEventListener("click", handleUserInteraction)
    document.addEventListener("keydown", handleUserInteraction)

    return () => {
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("keydown", handleUserInteraction)
    }
  }, [autoplayEnabled, isPlaying, toggleMusic])

  const handleLoadingComplete = () => {
    setCurrentScreen("difficulty")
  }

  const handleDifficultySelect = (difficulty: "easy" | "medium" | "hard" | "master") => {
    setSelectedDifficulty(difficulty)

    const firstLevelOfDifficulty = levels.find((level) => level.difficulty === difficulty)
    if (firstLevelOfDifficulty) {
      selectLevel(firstLevelOfDifficulty.id)
    }

    setCurrentScreen("game")
  }

  const handleHome = () => {
    setCurrentScreen("difficulty")
    resetGame()
  }

  const handleNextLevel = () => {
    nextLevel()
  }

  const canGoNext = gameState.currentLevel < totalLevels

  if (currentScreen === "loading") {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  if (currentScreen === "difficulty") {
    return <DifficultySelection onSelectDifficulty={handleDifficultySelect} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 relative overflow-hidden">
      {/* animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Home Button and Music Controls */}
      <div className="relative z-10 flex justify-between items-center p-4 md:p-6">
        <Button
          onClick={handleHome}
          className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
        >
          <Home className="w-4 h-4 mr-2" />
          Home
        </Button>

        <MusicControls
          isPlaying={isPlaying}
          volume={volume}
          isMuted={isMuted}
          onToggleMusic={toggleMusic}
          onToggleMute={toggleMute}
          onVolumeChange={changeVolume}
        />
      </div>

      <div className="relative z-10 p-4 md:p-8 pt-0">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">TypingMaster</h1>
            <div className="flex items-center justify-center gap-4 text-white/70">
              <span>Level {gameState.currentLevel}</span>
              <span>•</span>
              <span className="capitalize">{currentLevel?.difficulty} Mode</span>
              <span>•</span>
              <span>{currentLevel?.category}</span>
            </div>
          </div>

          {/* Game Stats */}
          <GameStats stats={gameState.stats} targetWPM={currentLevel?.targetWPM || 0} />

          {/* Level Progress */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white/70 text-sm">Progress</span>
              <span className="text-white/70 text-sm">
                {gameState.currentLevel} / {totalLevels}
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(gameState.currentLevel / totalLevels) * 100}%` }}
              />
            </div>
          </div>

          {/* Level Selector */}
          <LevelSelector
            currentLevel={gameState.currentLevel}
            onSelectLevel={selectLevel}
            unlockedLevels={unlockedLevels}
          />

          {/* Typing Area */}
          <TypingArea
            text={gameState.currentText}
            userInput={gameState.userInput}
            onInputChange={updateInput}
            isPlaying={gameState.isPlaying}
          />

          {/* Game Controls */}
          <div className="flex flex-wrap gap-3 justify-center">
            {!gameState.isPlaying && !gameState.isCompleted && (
              <Button
                onClick={startGame}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Game
              </Button>
            )}

            <Button
              onClick={resetGame}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:opacity-90 text-white"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>

            {gameState.isCompleted && canGoNext && (
              <Button
                onClick={handleNextLevel}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 text-white"
              >
                <SkipForward className="w-4 h-4 mr-2" />
                Next Level
              </Button>
            )}
          </div>

          {/* Level info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-white/60">Target WPM: </span>
                <span className="text-white font-semibold">{currentLevel?.targetWPM}</span>
              </div>
              <div>
                <span className="text-white/60">Time Limit: </span>
                <span className="text-white font-semibold">{currentLevel?.timeLimit}s</span>
              </div>
              <div>
                <span className="text-white/60">Characters: </span>
                <span className="text-white font-semibold">{currentLevel?.text.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Completion Modal */}
      <CompletionModal
        isOpen={gameState.isCompleted}
        stats={gameState.stats}
        targetWPM={currentLevel?.targetWPM || 0}
        level={gameState.currentLevel}
        onNext={handleNextLevel}
        onReplay={resetGame}
        onClose={closeCompletion}
        canGoNext={canGoNext}
      />
    </div>
  )
}
