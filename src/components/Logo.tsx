import Image from 'next/image'
import React from 'react'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large'
}

export function Logo({ size = 'large', className, ...props }: LogoProps) {
  return (
    <div className="flex items-center gap-2" {...props}>
      <Image
        className="rounded-lg"
        priority
        src="/images/gutspy-1024.jpg"
        height={45}
        width={50}
        alt="GutSpy Logo"
      />
      <span className="text-sm font-bold text-gray-900">GutSpy</span>
    </div>
  )
}
