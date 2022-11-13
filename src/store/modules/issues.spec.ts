import { describe, it, expect } from 'vitest'
import { mutations } from '../index'

describe('mutations', () => {
  it('should add a new issue', () => {
    const state = {
      issues: [],
    }

    mutations.createIssue(state, {
      title: 'Test issue',
      description: 'Test issue description',
    })

    expect(state.issues).toHaveLength(1)
    expect(state.issues).toEqual([
      {
        id: expect.any(String),
        title: 'Test issue',
        description: 'Test issue description',
        status: 'OPEN',
      },
    ])
  })

  it('should delete an issue', () => {
    const state = {
      issues: [
        {
          id: '1',
          title: 'Test issue',
          description: 'Test issue description',
          status: 'OPEN',
        },
      ],
    }

    mutations.deleteIssue(state, '1')

    expect(state.issues).toHaveLength(0)
  })

  it('should update an issue', () => {
    const state = {
      issues: [
        {
          id: '1',
          title: 'Test issue',
          description: 'Test issue description',
          status: 'OPEN',
        },
      ],
    }

    mutations.updateIssue(state, {
      id: '1',
      title: 'Test issue updated',
      description: 'Test issue description updated',
      status: 'OPEN',
    })

    expect(state.issues).toHaveLength(1)
    expect(state.issues[0].title).toBe('Test issue updated')
    expect(state.issues[0].description).toBe('Test issue description updated')
  })

  it('should mark an issue as completed', () => {
    const state = {
      issues: [
        {
          id: '1',
          title: 'Test issue',
          description: 'Test issue description',
          status: 'OPEN',
        },
      ],
    }

    mutations.markIssueAsCompleted(state, '1')

    expect(state.issues).toHaveLength(1)
    expect(state.issues[0].status).toBe('COMPLETED')
  })

  it('should mark an issue as trashed', () => {
    const state = {
      issues: [
        {
          id: '1',
          title: 'Test issue',
          description: 'Test issue description',
          status: 'OPEN',
        },
      ],
    }

    mutations.markIssueAsTrashed(state, '1')

    expect(state.issues).toHaveLength(1)
    expect(state.issues[0].status).toBe('TRASHED')
  })
})
