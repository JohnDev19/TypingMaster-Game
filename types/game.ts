export interface Level {
  id: number
  difficulty: "easy" | "medium" | "hard" | "master"
  text: string
  targetWPM: number
  timeLimit: number
  category: string
}

export interface GameStats {
  wpm: number
  accuracy: number
  timeElapsed: number
  errorsCount: number
  correctChars: number
  totalChars: number
}

export interface GameState {
  currentLevel: number
  isPlaying: boolean
  isCompleted: boolean
  currentText: string
  userInput: string
  startTime: number | null
  stats: GameStats
}
