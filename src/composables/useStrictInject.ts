import { inject, type InjectionKey } from 'vue'

export function useStrictInject<T>(key: InjectionKey<T>, fallback?: T) {
  const resolved = inject(key, fallback)
  if (!resolved) throw new Error(`Could not resolve ${key.description}`)

  return resolved
}
