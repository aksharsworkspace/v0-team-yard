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
      <div className="w-[1px] h-8 bg-foreground/10 shrink-0"></div>
      <svg viewBox="0 0 180 86" className="w-24 md:w-32 shrink-0" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="58" fontFamily="Helvetica, Arial, sans-serif" fontSize="42" fontWeight="800" fill="currentColor" className="fill-foreground" letterSpacing="-1">the yard</text>
      </svg>
    </div>
  )
}
