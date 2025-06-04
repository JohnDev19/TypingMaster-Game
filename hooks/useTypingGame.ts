"use client"

import { useState, useCallback } from "react"
import type { GameState, GameStats } from "../types/game"
import { levels } from "../data/levels"

export const useTypingGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentLevel: 1,
    isPlaying: false,
    isCompleted: false,
    currentText: levels[0].text,
    userInput: "",
    startTime: null,
    stats: {
      wpm: 0,
      accuracy: 0,
      timeElapsed: 0,
      errorsCount: 0,
      correctChars: 0,
      totalChars: 0,
    },
  })

  const calculateStats = useCallback((input: string, text: string, startTime: number): GameStats => {
    const timeElapsed = (Date.now() - startTime) / 1000
    const correctChars = input.split("").filter((char, index) => char === text[index]).length
    const totalChars = input.length
    const errorsCount = totalChars - correctChars
    const accuracy = totalChars > 0 ? (correctChars / totalChars) * 100 : 100
    const wpm = timeElapsed > 0 ? correctChars / 5 / (timeElapsed / 60) : 0

    return {
      wpm: Math.round(wpm),
      accuracy: Math.round(accuracy),
      timeElapsed: Math.round(timeElapsed),
      errorsCount,
      correctChars,
      totalChars,
    }
  }, [])

  const startGame = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      isPlaying: true,
      startTime: Date.now(),
      userInput: "",
      isCompleted: false,
    }))
  }, [])

  const updateInput = useCallback(
    (input: string) => {
      if (!gameState.isPlaying || !gameState.startTime) return

      const stats = calculateStats(input, gameState.currentText, gameState.startTime)
      const isCompleted = input === gameState.currentText

      setGameState((prev) => ({
        ...prev,
        userInput: input,
        stats,
        isCompleted,
        isPlaying: !isCompleted,
      }))
    },
    [gameState.isPlaying, gameState.startTime, gameState.currentText, calculateStats],
  )

  const nextLevel = useCallback(() => {
    const nextLevelIndex = gameState.currentLevel
    if (nextLevelIndex < levels.length) {
      setGameState((prev) => ({
        ...prev,
        currentLevel: nextLevelIndex + 1,
        currentText: levels[nextLevelIndex].text,
        userInput: "",
        isPlaying: false,
        isCompleted: false,
        startTime: null,
        stats: {
          wpm: 0,
          accuracy: 0,
          timeElapsed: 0,
          errorsCount: 0,
          correctChars: 0,
          totalChars: 0,
        },
      }))
    }
  }, [gameState.currentLevel])

  const resetGame = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      userInput: "",
      isPlaying: false,
      isCompleted: false,
      startTime: null,
      stats: {
        wpm: 0,
        accuracy: 0,
        timeElapsed: 0,
        errorsCount: 0,
        correctChars: 0,
        totalChars: 0,
      },
    }))
  }, [])

  const selectLevel = useCallback((levelId: number) => {
    const level = levels.find((l) => l.id === levelId)
    if (level) {
      setGameState((prev) => ({
        ...prev,
        currentLevel: levelId,
        currentText: level.text,
        userInput: "",
        isPlaying: false,
        isCompleted: false,
        startTime: null,
        stats: {
          wpm: 0,
          accuracy: 0,
          timeElapsed: 0,
          errorsCount: 0,
          correctChars: 0,
          totalChars: 0,
        },
      }))
    }
  }, [])

  const closeCompletion = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      isCompleted: false,
    }))
  }, [])

  return {
    gameState,
    currentLevel: levels[gameState.currentLevel - 1],
    startGame,
    updateInput,
    nextLevel,
    resetGame,
    selectLevel,
    closeCompletion,
    totalLevels: levels.length,
  }
}
