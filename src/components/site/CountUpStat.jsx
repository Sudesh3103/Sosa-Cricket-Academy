import { useEffect, useMemo, useRef, useState } from 'react'

const parseValue = (value) => {
  const match = String(value).match(/(\d+)/)

  return {
    numeric: match ? Number(match[1]) : 0,
    prefix: String(value).slice(0, match ? match.index : 0),
    suffix: match ? String(value).slice(match.index + match[1].length) : '',
  }
}

const CountUpStat = ({ value, duration = 1400, className = '' }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)
  const { numeric, prefix, suffix } = useMemo(() => parseValue(value), [value])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) {
      return
    }

    let frameId
    const start = performance.now()

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - (1 - progress) * (1 - progress)
      setCount(Math.round(numeric * eased))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate)
      }
    }

    frameId = window.requestAnimationFrame(animate)

    return () => window.cancelAnimationFrame(frameId)
  }, [duration, isVisible, numeric])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export default CountUpStat
