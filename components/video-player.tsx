"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
    }
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,230,118,0.15)]">
      {/* Usando aspect-ratio para manter proporção 1280/780 */}
      <div className="aspect-[1280/780] relative">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
          poster="/placeholder.svg?height=780&width=1280"
          muted
          loop
        >
          {/* Substitua o URL abaixo pelo caminho real para o arquivo Comentário.mp4 quando disponível */}
          <source src="./images/Comentário.mp4" type="video/mp4" />
          {/* Fallback para caso o arquivo não seja encontrado */}
          <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>

        {/* Botão grande de reprodução centralizado */}
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-10"
            onClick={togglePlay}
            aria-label="Reproduzir vídeo"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#00e676]/90 flex items-center justify-center transform transition-transform duration-300 hover:scale-110 hover:bg-[#00e676] shadow-[0_0_30px_rgba(0,230,118,0.4)]">
              <Play size={48} className="text-black ml-2" />
            </div>
            <span className="absolute bottom-10 text-white text-lg font-bold drop-shadow-md">Assista ao vídeo</span>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center">
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00e676] text-black hover:bg-[#00c853] transition-colors"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <button
          onClick={toggleMute}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  )
}
