"use client"

import { useEffect, useRef } from "react"

interface TypingAreaProps {
  text: string
  userInput: string
  onInputChange: (value: string) => void
  isPlaying: boolean
}

export const TypingArea = ({ text, userInput, onInputChange, isPlaying }: TypingAreaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isPlaying && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isPlaying])

  const renderText = () => {
    return text.split("").map((char, index) => {
      let className = "text-lg md:text-xl "

      if (index < userInput.length) {
        if (userInput[index] === char) {
          className += "text-green-400 bg-green-400/20"
        } else {
          className += "text-red-400 bg-red-400/20"
        }
      } else if (index === userInput.length) {
        className += "text-white bg-white/20 animate-pulse"
      } else {
        className += "text-white/60"
      }

      return (
        <span key={index} className={className}>
          {char}
        </span>
      )
    })
  }

  return (
    <div className="space-y-6">
      {/* Text display */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 min-h-[200px] md:min-h-[250px]">
        <div className="font-mono leading-relaxed tracking-wide">{renderText()}</div>
      </div>

      {/* Input area */}
      <div className="relative">
        <textarea
          ref={inputRef}
          value={userInput}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={isPlaying ? "Start typing..." : "Click 'Start Game' to begin"}
          disabled={!isPlaying}
          className="w-full h-32 md:h-40 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 text-white placeholder-white/50 font-mono text-lg md:text-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />

        {/* Character counter */}
        <div className="absolute bottom-4 right-4 text-white/60 text-sm">
          {userInput.length} / {text.length}
        </div>
      </div>
    </div>
  )
}
