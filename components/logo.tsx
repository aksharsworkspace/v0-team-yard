import React from "react"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <svg viewBox="0 0 200 200" className="w-10 h-10 md:w-12 md:h-12 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="c3">
            <rect x="81" y="19" width="38" height="88" rx="19" transform="rotate(35 100 107)"></rect>
            <rect x="81" y="19" width="38" height="88" rx="19" transform="rotate(-35 100 107)"></rect>
            <rect x="81" y="19" width="38" height="88" rx="19" transform="rotate(180 100 107)"></rect>
          </clipPath>
        </defs>
        <rect width="200" height="200" rx="42" fill="#F4F0E8"></rect>
        <rect width="200" height="200" fill="#0D0F18" clipPath="url(#c3)"></rect>
      </svg>
      <div className="w-[1px] h-10 bg-white/10 shrink-0 hidden sm:block"></div>
      <svg viewBox="0 0 200 86" className="w-24 md:w-32 shrink-0 hidden sm:block" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g7" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4AFFA8" />
            <stop offset="48%" stopColor="#62CCFF" />
            <stop offset="100%" stopColor="#7B61FF" />
          </linearGradient>
          <linearGradient id="g7l" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4AFFA8" stopOpacity=".42" />
            <stop offset="100%" stopColor="#7B61FF" stopOpacity=".05" />
          </linearGradient>
        </defs>
        <text x="2" y="22" fontFamily="Helvetica, Arial, sans-serif" fontSize="10" fontWeight="400" fill="rgba(255,255,255,.35)" letterSpacing="4">THE</text>
        <line x1="2" y1="29" x2="198" y2="29" stroke="url(#g7l)" strokeWidth=".8" />
        <text x="0" y="80" fontFamily="Helvetica, Arial, sans-serif" fontSize="59" fontWeight="800" fill="url(#g7)" letterSpacing="-1.5">YARD</text>
      </svg>
    </div>
  )
}
