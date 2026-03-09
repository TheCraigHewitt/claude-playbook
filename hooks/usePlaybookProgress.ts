'use client'

import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'playbook-progress'

function getStored(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function setStored(items: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export function usePlaybookProgress() {
  const [completed, setCompleted] = useState<string[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setCompleted(getStored())
    setHydrated(true)
  }, [])

  const markComplete = useCallback((key: string) => {
    setCompleted((prev) => {
      if (prev.includes(key)) return prev
      const next = [...prev, key]
      setStored(next)
      return next
    })
  }, [])

  const markIncomplete = useCallback((key: string) => {
    setCompleted((prev) => {
      const next = prev.filter((k) => k !== key)
      setStored(next)
      return next
    })
  }, [])

  const isComplete = useCallback(
    (key: string) => completed.includes(key),
    [completed]
  )

  const getSectionProgress = useCallback(
    (sectionId: string, total: number) => {
      const count = completed.filter((k) => k.startsWith(`${sectionId}/`)).length
      return { count, total }
    },
    [completed]
  )

  const getOverallProgress = useCallback(
    (total: number) => {
      return { count: completed.length, total }
    },
    [completed]
  )

  return { markComplete, markIncomplete, isComplete, getSectionProgress, getOverallProgress, hydrated }
}
