"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function InvitationCard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 pb-8 relative z-20">
      <div className={`w-full max-w-7xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="flex flex-col md:flex-row gap-2 md:gap-2 lg:gap-3">
          <div className="w-full md:w-1/2 flex-shrink-0 flex justify-center items-center">
            <div className="relative rounded-2xl shadow-2xl overflow-visible bg-transparent">
              <div className="relative w-full flex items-center justify-center min-h-[400px]">
                <Image
                  src="/images/card-front.png"
                  alt="Wedding Invitation Card Front"
                  width={800}
                  height={1131}
                  className="w-full h-auto max-w-full object-contain rounded-2xl"
                  priority
                  style={{ maxHeight: '90vh' }}
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex-shrink-0 flex justify-center items-center">
            <div className="relative rounded-2xl shadow-2xl overflow-visible bg-transparent">
              <div className="relative w-full flex items-center justify-center min-h-[400px]">
                <Image
                  src="/images/card-back.png"
                  alt="Wedding Invitation Card Back"
                  width={800}
                  height={1131}
                  className="w-full h-auto max-w-full object-contain rounded-2xl"
                  priority
                  style={{ maxHeight: '90vh' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
