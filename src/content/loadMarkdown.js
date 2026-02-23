const modules = import.meta.glob('./apps/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const re = /apps\/([^/]+)\/(privacy|terms)\.md$/

const byApp = {}
for (const path in modules) {
  const m = path.match(re)
  if (m) {
    const [, appId, type] = m
    if (!byApp[appId]) byApp[appId] = {}
    byApp[appId][type] = modules[path]
  }
}

export function getMarkdown(appId, type) {
  return byApp[appId]?.[type] ?? null
}
