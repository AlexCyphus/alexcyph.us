import { useEffect, useState } from 'react'

const useCycleHeaderAnimation = () => {
  const [frame, setFrame] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((currentFrame) => {
        if (currentFrame < 4) return currentFrame + 1
        return 1
      })
    }, 350)
    return () => clearInterval(interval)
  }, [])

  return `/assets/images/header-frames/header-frame-${frame}.png`
}

export default useCycleHeaderAnimation
