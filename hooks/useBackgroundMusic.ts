"use client"

import { useState, useRef, useEffect } from "react"

export const useBackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [autoplayEnabled, setAutoplayEnabled] = useState(true)

  useEffect(() => {
    audioRef.current = new Audio("/bgmsc/public/bgmsc/ocean-wave-ambient-boy-main-version-16232-09-09.mp3")
    audioRef.current.loop = true
    audioRef.current.volume = volume

    if (autoplayEnabled) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch(() => {

            console.log("Autoplay prevented by browser, user interaction required")
          })
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(console.error)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const changeVolume = (newVolume: number) => {
    setVolume(Math.max(0, Math.min(1, newVolume)))
  }

  return {
    isPlaying,
    volume,
    isMuted,
    autoplayEnabled,
    toggleMusic,
    toggleMute,
    changeVolume,
    setAutoplayEnabled,
  }
}
