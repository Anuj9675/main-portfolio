type CursorEffectProps = {
  position: { x: number; y: number }
}

export default function CursorEffect({ position }: CursorEffectProps) {
  return (
    <div
      className="fixed pointer-events-none z-50 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-sm transition-all duration-300 ease-out"
      style={{
        left: position.x - 16,
        top: position.y - 16,
        transform: "translate3d(0, 0, 0)",
      }}
    />
  )
}
