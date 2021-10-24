import React from 'react'

export interface PropsText {
  style?: React.CSSProperties
  className?: string
  text: string
  disabled?: boolean
  clickHandler?: () => void
}

const buttonStyle: React.CSSProperties = {
  cursor: 'pointer',
}

const defaultStyle: React.CSSProperties = {
  fontFamily: 'NotoSansKR, AppleSDGothicNeo, sans-serif',
}

const disableStyle: React.CSSProperties = {
  opacity: '0.3',
  cursor: 'default',
}

const App: React.FunctionComponent<PropsText> = ({ style, className, text, disabled, clickHandler }: PropsText) => {
  const baseStyle = { ...style, ...defaultStyle }
  const clickStyle = { ...(disabled ? disableStyle : buttonStyle), ...style, ...baseStyle }

  const newStyle = clickHandler ? clickStyle : baseStyle

  return (
    <div
      style={newStyle}
      className={className}
      onClick={(): void => {
        if (!disabled && clickHandler) clickHandler()
      }}
    >
      {text}
    </div>
  )
}

export default App
