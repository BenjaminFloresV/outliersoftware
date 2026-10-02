import { DEFAULT_LANGUAGE } from './languages'

const modules = import.meta.glob('./apps/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// apps/<app id>/<document>.<language>.md, e.g. apps/amor-fati-stoic-wisdom/privacy.es.md
const re = /apps\/([^/]+)\/([a-z-]+)\.([a-z]{2})\.md$/

const byApp = {}
for (const path in modules) {
  const m = path.match(re)
  if (m) {
    const [, appId, doc, lang] = m
    byApp[appId] ??= {}
    byApp[appId][doc] ??= {}
    byApp[appId][doc][lang] = modules[path]
  }
}

export function getMarkdown(appId, doc, lang) {
  const versions = byApp[appId]?.[doc]
  return versions?.[lang] ?? versions?.[DEFAULT_LANGUAGE] ?? null
}
