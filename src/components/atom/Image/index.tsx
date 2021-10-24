import React from 'react'

export interface PropsImage {
  style?: React.CSSProperties
  className?: string
  src: string
  clickHandler?: () => void
}

const buttonStyle: React.CSSProperties = {
  cursor: 'pointer',
}

const imageFitRatio: React.CSSProperties = {
  objectFit: 'cover',
  fontFamily: 'object-fit: cover',
}

const App: React.FunctionComponent<PropsImage> = ({ style, className, src, clickHandler }: PropsImage) => {
  const baseStyle = { ...style, ...imageFitRatio }
  const newStyle = clickHandler ? { ...buttonStyle, ...baseStyle } : baseStyle

  return (
    <img
      style={{ ...newStyle }}
      className={className}
      onClick={(): void => {
        if (clickHandler) clickHandler()
      }}
      src={src}
    ></img>
  )
}

export default App
