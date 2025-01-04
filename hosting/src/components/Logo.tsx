import React from 'react'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large'
}

export function Logo({ size = 'large', className, ...props }: LogoProps) {
  const getFontSize = () => {
    switch (size) {
      case 'small':
        return 'text-2xl'
      case 'medium':
        return 'text-4xl'
      case 'large':
        return 'text-5xl'
      default:
        return 'text-5xl'
    }
  }

  return (
    <div className={className} {...props}>
      <span
        className={`${getFontSize()} font-extrabold tracking-widest text-primary`}
      >
        GUTSPY
      </span>
    </div>
  )
}
