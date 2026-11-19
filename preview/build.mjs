// Build bản xem trước bằng esbuild + tailwindcss có sẵn trên máy (không cần npm install).
import { build } from '/opt/npm-tools/node_modules/esbuild/lib/main.js'
import { compile } from '/opt/npm-tools/node_modules/tailwindcss/dist/lib.mjs'
import fs from 'node:fs'; import path from 'node:path'
const root = path.resolve(import.meta.dirname, '..'); const out = path.join(root, 'preview/dist')
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out + '/assets', { recursive: true })
fs.cpSync(path.join(root, 'public'), out, { recursive: true })
const shim = (n) => path.join(root, 'preview/shims', n)
await build({
  entryPoints: [path.join(root, 'src/main.tsx')], bundle: true, minify: true, format: 'esm', jsx: 'automatic',
  outfile: out + '/assets/index.js', nodePaths: ['/opt/npm-tools/node_modules'],
  alias: { 'framer-motion': shim('framer-motion.tsx'), 'lucide-react': shim('lucide-react.tsx') },
  loader: { '.css': 'empty' }, define: { 'process.env.NODE_ENV': '"production"' }, logLevel: 'warning',
})
// Tailwind v4: compile + quét class trong src
const twDir = '/opt/npm-tools/node_modules/tailwindcss'
const compiler = await compile(fs.readFileSync(path.join(root, 'src/index.css'), 'utf8'), {
  base: root,
  loadStylesheet: async (id) => { const f = id === 'tailwindcss' ? path.join(twDir, 'index.css') : path.join(twDir, id.replace('tailwindcss/', '')); return { content: fs.readFileSync(f, 'utf8'), base: twDir, path: f } },
})
const cands = new Set()
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (/\.(tsx?|html)$/.test(e.name)) for (const m of fs.readFileSync(p, 'utf8').matchAll(/[^\s"'`{}<>]+/g)) cands.add(m[0]) })
walk(path.join(root, 'src'))
fs.writeFileSync(out + '/assets/index.css', compiler.build([...cands]))
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8')
html = html.replace('<script type="module" src="/src/main.tsx"></script>', '<script type="module" src="./assets/index.js"></script>')
  .replace('</head>', '    <link rel="stylesheet" href="./assets/index.css" />\n  </head>')
fs.writeFileSync(out + '/index.html', html)
console.log('built', fs.statSync(out + '/assets/index.js').size, fs.statSync(out + '/assets/index.css').size)
