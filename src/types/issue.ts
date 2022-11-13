import type { ISSUE_STATUS } from '@/constnats'

export type IIssueStatus = typeof ISSUE_STATUS[keyof typeof ISSUE_STATUS]

export interface INewIssue {
  title: string
  description: string
}
export interface IIssue extends INewIssue {
  id: string
  status?: IIssueStatus
  trashed?: boolean
}
