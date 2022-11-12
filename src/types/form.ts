export interface IRule {
  [field: string]: {
    required: boolean
    min?: number
    max?: number
  }
}

export interface IValidationField {
  [field: string]: {
    error: string
    valid: boolean | null
  }
}

export interface IField {
  [field: string]: string
}

export interface IFormField {
  error: string
  valid: boolean | null
}
