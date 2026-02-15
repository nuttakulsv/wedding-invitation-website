"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
interface EnvelopeSectionProps {
  onOpen: () => void
  onEnvelopeClick?: () => void
}
export function EnvelopeSection({ onOpen, onEnvelopeClick }: EnvelopeSectionProps) {
  const [animationStage, setAnimationStage] = useState<"falling" | "front" | "flipping" | "back">("falling")
  const [isHovered, setIsHovered] = useState(false)
  const [hoverStep, setHoverStep] = useState<0 | 1 | 2 | 3>(0) 
  const [cardSlideUp, setCardSlideUp] = useState(false) 
  useEffect(() => {
    const fallingTimer = setTimeout(() => {
      setAnimationStage("front")
    }, 2500)
    return () => {
      clearTimeout(fallingTimer)
    }
  }, [])
  const triggerAnimationSequence = () => {
    if (animationStage === "back") {
      setIsHovered(true)
      setHoverStep(1) 
      setTimeout(() => {
        setHoverStep(2) 
        setTimeout(() => {
          setHoverStep(3) 
          setTimeout(() => {
            setCardSlideUp(true)
            setTimeout(() => {
              onOpen()
            }, 1000)
          }, 800)
        }, 700)
      }, 600)
    }
  }
  const handleEnvelopeClick = () => {
    if (animationStage === "front") {
      if (onEnvelopeClick) {
        onEnvelopeClick()
      }
      setAnimationStage("flipping")
      setTimeout(() => {
        setAnimationStage("back")
      }, 800)
    } else if (animationStage === "back") {
      if (hoverStep === 0) {
        triggerAnimationSequence()
      } else {
        onOpen()
      }
    }
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-40">
      <div
        className={`relative z-50 max-w-2xl w-full px-4 md:px-6 ${
          animationStage === "front" ? "animate-fadeIn" : animationStage === "falling" ? "animate-envelopeFall" : ""
        }`}
      >
          <div
            className="relative mx-auto px-2 sm:px-4"
            style={{ 
              maxWidth: "min(500px, 90vw)", 
              perspective: "1000px",
              transform: hoverStep >= 1 && animationStage === "back" ? "translateY(150px)" : "translateY(0)",
              transition: "transform 0.6s ease-out",
            }}
          >
            <Button
              onClick={handleEnvelopeClick}
              disabled={animationStage === "falling" || animationStage === "flipping"}
              className={`w-full h-auto p-0 bg-transparent hover:bg-transparent border-0 transition-all duration-500 ${
                animationStage === "back" && hoverStep === 0 ? "animate-float" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className={`relative w-full aspect-[3/2] cursor-pointer ${
                  animationStage === "flipping" ? "animate-flipToBack" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: animationStage === "back" ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src="/images/mail-invitation.png"
                      alt="Wedding Invitation Envelope"
                      className="w-full h-full object-cover"
                    />
                    { }
                    {animationStage === "front" && (
                      <div className="absolute bottom-8 left-0 right-0 text-center animate-fadeIn z-10">
                        <p className="text-xs md:text-sm text-black/90 drop-shadow-lg font-serif animate-pulse">
                          แตะที่ซองเพื่อดูด้านหลัง
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="absolute inset-0"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl">
                      <div
                        className="w-full h-full relative"
                        style={{
                          background: "linear-gradient(135deg, #c9ad8b 0%, #b89968 50%, #a8885a 100%)",
                          boxShadow:
                            hoverStep >= 1 && animationStage === "back"
                              ? "0 20px 40px rgba(0,0,0,0.25), 0 10px 25px rgba(139, 115, 85, 0.2)"
                              : "0 10px 25px rgba(0,0,0,0.18), 0 5px 15px rgba(139, 115, 85, 0.15)",
                        }}
                      >
                        <div className="absolute inset-0 opacity-15">
                          <svg width="100%" height="100%">
                            <defs>
                              <pattern
                                id="kraft-paper-texture"
                                x="0"
                                y="0"
                                width="100"
                                height="100"
                                patternUnits="userSpaceOnUse"
                              >
                                <circle cx="20" cy="20" r="0.8" fill="#5a4a3a" opacity="0.4" />
                                <circle cx="45" cy="35" r="0.6" fill="#5a4a3a" opacity="0.3" />
                                <circle cx="60" cy="50" r="1" fill="#5a4a3a" opacity="0.35" />
                                <circle cx="30" cy="70" r="0.7" fill="#5a4a3a" opacity="0.25" />
                                <circle cx="80" cy="80" r="0.9" fill="#5a4a3a" opacity="0.3" />
                                <circle cx="15" cy="55" r="0.5" fill="#5a4a3a" opacity="0.2" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#kraft-paper-texture)" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 rounded-lg" style={{
                          boxShadow: "inset 0 1px 2px rgba(255,255,255,0.8), inset 0 -1px 2px rgba(0,0,0,0.05)",
                        }} />
                      </div>
                    </div>
                    <div
                      className={`absolute inset-x-0 top-0 origin-top`}
                      style={{
                        height: "50%",
                        transformStyle: "preserve-3d",
                        transform: hoverStep >= 1 && animationStage === "back" ? "rotateX(-120deg)" : "rotateX(0deg)",
                        zIndex: 10,
                        transition: "transform 0.7s ease-out",
                      }}
                    >
                      <div
                        className="w-full h-full relative rounded-t-lg"
                        style={{
                          background: "linear-gradient(180deg, #c9ad8b 0%, #b89968 50%, #a8885a 100%)",
                          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                          boxShadow:
                            hoverStep >= 1 && animationStage === "back"
                              ? "0 12px 30px rgba(0,0,0,0.3), 0 8px 20px rgba(139, 115, 85, 0.25)"
                              : "0 6px 18px rgba(0,0,0,0.22), 0 4px 12px rgba(139, 115, 85, 0.18)",
                        }}
                      >
                        <div className="absolute inset-0 opacity-15">
                          <svg width="100%" height="100%">
                            <rect width="100%" height="100%" fill="url(#kraft-paper-texture)" />
                          </svg>
                        </div>
                        <div
                          className="absolute bottom-0 left-0 right-0 h-2"
                          style={{
                            background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.2) 50%, transparent)",
                          }}
                        />
                      </div>
                    </div>
                    <div 
                      className="absolute top-1/2 left-1/2"
                      style={{
                        zIndex: 20,
                        pointerEvents: "none",
                        transform: hoverStep >= 2 && animationStage === "back" 
                          ? "translate(-50%, -50%) translateX(200px)" 
                          : "translate(-50%, -50%)",
                        opacity: hoverStep >= 2 && animationStage === "back" ? 0 : 1,
                        transition: hoverStep >= 2 ? "transform 0.7s ease-out, opacity 0.7s ease-out" : "none",
                      }}
                    >
                      <div className="relative">
                        <div
                          className="absolute inset-0 rounded-full blur-2xl opacity-40"
                          style={{
                            background: "radial-gradient(circle, #b8860b 0%, #8b6914 40%, transparent 70%)",
                            transform: "scale(1.8)",
                          }}
                        />
                        <div
                          className="relative"
                          style={{
                            transformOrigin: "center",
                          }}
                        >
                          <img
                            src="/krang-2.png"
                            alt="Heart Wax Seal"
                            className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    {animationStage === "back" && (
                      <div
                        className="absolute top-1/2 left-1/2"
                        style={{
                          zIndex: 60,
                          pointerEvents: "none",
                          transform: cardSlideUp
                            ? "translate(-50%, -50%) translateY(-300px) scale(1.1)"
                            : hoverStep >= 3
                            ? "translate(-50%, -50%) translateY(-40px) scale(1.05)"
                            : "translate(-50%, -50%) scale(0.9)",
                          opacity: hoverStep >= 3 ? 1 : 0,
                          transition: cardSlideUp
                            ? "transform 1s cubic-bezier(0.4, 0, 0.2, 1)"
                            : hoverStep >= 3 
                            ? "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.8s ease-out" 
                            : "none",
                        }}
                      >
                        <div className="relative">
                          <img
                            src="/images/card-front.png"
                            alt="Wedding Invitation Card"
                            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain shadow-2xl rounded-lg"
                            style={{
                              filter: cardSlideUp 
                                ? "drop-shadow(0 20px 40px rgba(0,0,0,0.1))"
                                : "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
                            }}
                          />
                        </div>
                      </div>
                    )}
                    {animationStage === "back" && hoverStep === 0 && (
                      <div className="absolute bottom-8 left-0 right-0 text-center animate-fadeIn z-10">
                        <p className="text-xs md:text-sm text-black/90 drop-shadow-lg font-serif animate-pulse">
                          แตะที่ซองเพื่อเปิดคำเชิญ
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </div>
    </section>
  )
}
