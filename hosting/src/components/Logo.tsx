import Image from 'next/image'
import React from 'react'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large'
}

export function Logo({ size = 'large', className, ...props }: LogoProps) {
  return (
    <div className={className} {...props}>
      <Image
        priority
        src="/images/gutspy_name.svg"
        height={45}
        width={180}
        alt="GutSpy Logo"
      />
    </div>
  )
}
