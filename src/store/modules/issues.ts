import { ISSUE_STATUS } from '@/constnats'
import type { IIssue, IIssueStatus, INewIssue } from '@/types'
import { v4 as uuidv4 } from 'uuid'
import { storage } from '../storage'

const state: {
  issues: IIssue[]
} = {
  issues: storage.getIssues() || [],
}

const getIssueByStatus = (issues: IIssue[], status: IIssueStatus) =>
  issues.filter((issue) => issue.status === status && !issue?.trashed)

const mutations = {
  createIssue(state: { issues: IIssue[] }, issue: INewIssue) {
    const newIssue = {
      ...issue,
      id: uuidv4(),
      status: ISSUE_STATUS.OPEN,
    }

    state.issues.push(newIssue)
    storage.setIssues(state.issues)
  },
  deleteIssue(state: { issues: IIssue[] }, id: string) {
    state.issues = state.issues.filter((issue) => issue.id !== id)
    storage.setIssues(state.issues)
  },
  updateIssue(state: { issues: IIssue[] }, issue: IIssue) {
    state.issues = state.issues.map((item) => {
      if (item.id === issue.id) return issue

      return item
    })

    storage.setIssues(state.issues)
  },
  markIssueAsCompleted(state: { issues: IIssue[] }, id: string) {
    const issue = state.issues.find((issue) => issue.id === id)

    if (issue) {
      issue.status = ISSUE_STATUS.COMPLETED
      storage.setIssues(state.issues)
    }
  },
  markIssueAsTrashed(state: { issues: IIssue[] }, id: string) {
    const issue = state.issues.find((issue) => issue.id === id)

    if (issue) {
      issue.trashed = true
      storage.setIssues(state.issues)
    }
  },
  markIssueAsOpen(state: { issues: IIssue[] }, id: string) {
    const issue = state.issues.find((issue) => issue.id === id)

    if (issue) {
      issue.status = ISSUE_STATUS.OPEN
      storage.setIssues(state.issues)
    }
  },
  restoreTrashedIssue(state: { issues: IIssue[] }, id: string) {
    const issue = state.issues.find((issue) => issue.id === id)

    if (issue) {
      issue.trashed = false
      storage.setIssues(state.issues)
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  getters: {
    openIssues(state: { issues: IIssue[] }) {
      return getIssueByStatus(state.issues, ISSUE_STATUS.OPEN)
    },
    completedIssues(state: { issues: IIssue[] }) {
      return getIssueByStatus(state.issues, ISSUE_STATUS.COMPLETED)
    },
    trashedIssues(state: { issues: IIssue[] }) {
      return state.issues.filter((issue) => issue.trashed)
    },
  },
}
