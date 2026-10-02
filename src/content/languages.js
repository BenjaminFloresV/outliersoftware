export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
]

export const DEFAULT_LANGUAGE = 'en'

const supported = LANGUAGES.map((l) => l.code)

// An explicit ?lang= wins; otherwise the first browser language we have, otherwise English.
export function resolveLanguage(requested, browserLanguages) {
  if (supported.includes(requested)) return requested
  for (const tag of browserLanguages ?? []) {
    const base = tag.toLowerCase().split('-')[0]
    if (supported.includes(base)) return base
  }
  return DEFAULT_LANGUAGE
}
