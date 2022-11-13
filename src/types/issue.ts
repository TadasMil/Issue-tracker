import type { ISSUE_STATUS } from '@/constnats'

export type IIssueStatus = typeof ISSUE_STATUS[keyof typeof ISSUE_STATUS]

export interface IIssue {
  id?: string
  title: string
  description: string
  status?: IIssueStatus
}
