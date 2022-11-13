import type { IIssue } from '@/types/issue.js'

const LOCAL_STORAGE_KEYS = {
  ISSUES: 'issues',
} as const

export const getObject = (
  key: typeof LOCAL_STORAGE_KEYS[keyof typeof LOCAL_STORAGE_KEYS]
) => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}

export const setObject = (
  key: typeof LOCAL_STORAGE_KEYS[keyof typeof LOCAL_STORAGE_KEYS],
  value: any
) => {
  if (value) localStorage.setItem(key, JSON.stringify(value))
  else localStorage.removeItem(key)
}

const getIssues = () => getObject(LOCAL_STORAGE_KEYS.ISSUES)
const setIssues = (issues: IIssue[]) => {
  setObject(LOCAL_STORAGE_KEYS.ISSUES, issues)
}

export const storage = {
  getIssues,
  setIssues,
}
