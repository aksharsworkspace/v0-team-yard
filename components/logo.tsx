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

    </div>
  )
}
