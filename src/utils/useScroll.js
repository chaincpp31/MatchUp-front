import { useEffect, useState } from 'react'

function useSroll (scrollRange = 20) {
  const [isScrolling, setScrolling] = useState()
  function handleScrollEvent () {
    if (window.scrollY > scrollRange) return setScrolling(true)
    return setScrolling(false)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScrollEvent)
    return () => document.removeEventListener('scroll', handleScrollEvent)
  }, [])

  return isScrolling
}

export default useSroll
