import React from 'react'
import './rect.css'

const RectButton = ({
  text,
  color,
  backgroundColor,
  fontSize,
  width,
  height,
  right,
  onClick,
  opacity,
  cursor,
  maxWidth,
}) => (
  <div
    className="button_rect"
    style={{
      backgroundColor: backgroundColor,
      color: color,
      width: width,
      height: height,
      right: right,
      fontSize: fontSize,
      opacity: opacity,
      cursor: cursor,
    }}
    onClick={onClick}
  >
    <span className="text" style={{ maxWidth: maxWidth }}>
      {text}
    </span>
  </div>
)

RectButton.defaultProps = {
  text: 'rectangle',
  color: '#FFFFFF',
  backgroundColor: '#3b27ba',
}

export default RectButton
