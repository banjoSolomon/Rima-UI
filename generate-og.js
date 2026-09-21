// Run this with: node generate-og.js
// Requires: npm install canvas (run once)
// This generates the og-image.png for social media previews

import { createCanvas } from 'canvas'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const W = 1200
const H = 630
const canvas = createCanvas(W, H)
const ctx = canvas.getContext('2d')

// Background gradient
const bg = ctx.createLinearGradient(0, 0, W, H)
bg.addColorStop(0,   '#040f07')
bg.addColorStop(0.5, '#0a4a2e')
bg.addColorStop(1,   '#061c12')
ctx.fillStyle = bg
ctx.fillRect(0, 0, W, H)

// Top gold bar
const topBar = ctx.createLinearGradient(0, 0, W, 0)
topBar.addColorStop(0, '#c9a227')
topBar.addColorStop(0.5, '#f5d060')
topBar.addColorStop(1, '#c9a227')
ctx.fillStyle = topBar
ctx.fillRect(0, 0, W, 6)

// Bottom gold bar
ctx.fillStyle = topBar
ctx.fillRect(0, H - 6, W, 6)

// Glow effect (top right)
const glow = ctx.createRadialGradient(950, 150, 0, 950, 150, 400)
glow.addColorStop(0, 'rgba(201,162,39,0.12)')
glow.addColorStop(1, 'rgba(201,162,39,0)')
ctx.fillStyle = glow
ctx.fillRect(0, 0, W, H)

// Logo box
ctx.beginPath()
ctx.roundRect(80, H/2 - 80, 155, 155, 18)
ctx.fillStyle = '#0d5c38'
ctx.fill()
ctx.strokeStyle = '#c9a227'
ctx.lineWidth = 2.5
ctx.stroke()

// Logo text
ctx.fillStyle = '#c9a227'
ctx.font = 'bold 32px Georgia'
ctx.textAlign = 'center'
ctx.fillText('RIMA', 158, H/2 - 10)
ctx.fillText('MFB', 158, H/2 + 28)
ctx.fillStyle = 'rgba(201,162,39,0.55)'
ctx.font = '11px Arial'
ctx.letterSpacing = '3px'
ctx.fillText('EST. 1992', 158, H/2 + 58)

// Main title
ctx.textAlign = 'left'
ctx.fillStyle = '#ffffff'
ctx.font = 'bold 66px Georgia'
ctx.fillText('Rima MFB', 272, H/2 - 60)

// Gold tagline
ctx.fillStyle = '#c9a227'
ctx.font = '30px Georgia'
ctx.fillText('Made For Us By Us', 272, H/2 - 14)

// Divider
const divider = ctx.createLinearGradient(272, 0, 380, 0)
divider.addColorStop(0, '#c9a227')
divider.addColorStop(1, '#f5d060')
ctx.fillStyle = divider
ctx.fillRect(272, H/2 + 2, 80, 3)

// Subtitle lines
ctx.fillStyle = 'rgba(255,255,255,0.62)'
ctx.font = '20px Arial'
ctx.fillText('CBN Licensed · Est. 1992 · Gwaranyo LGA, Sokoto State', 272, H/2 + 36)
ctx.fillText('Shariah-Compliant Microfinance Bank · Northern Nigeria', 272, H/2 + 64)

// Pills
const pills = ['Qard Hasan', 'Murabaha', 'USSD *737#', '2,000 POS']
let px = 272
const py = H/2 + 100
pills.forEach(pill => {
  ctx.font = 'bold 15px Arial'
  const tw = ctx.measureText(pill).width
  const pw = tw + 36
  ctx.beginPath()
  ctx.roundRect(px, py, pw, 36, 18)
  ctx.fillStyle = '#0d5c38'
  ctx.fill()
  ctx.strokeStyle = '#c9a227'
  ctx.lineWidth = 1.5
  ctx.stroke()
  ctx.fillStyle = '#c9a227'
  ctx.textAlign = 'center'
  ctx.fillText(pill, px + pw/2, py + 23)
  ctx.textAlign = 'left'
  px += pw + 12
})

// Footer
ctx.fillStyle = 'rgba(0,0,0,0.3)'
ctx.fillRect(0, H - 80, W, 74)

ctx.fillStyle = 'rgba(255,255,255,0.32)'
ctx.font = '14px Arial'
ctx.fillText('Licensed by CBN · Deposits insured by NDIC up to ₦500,000', 80, H - 44)
ctx.fillText('rimabank.ng', 80, H - 22)

// Domain badge
const badgeGrad = ctx.createLinearGradient(W - 220, 0, W - 50, 0)
badgeGrad.addColorStop(0, '#c9a227')
badgeGrad.addColorStop(1, '#f5d060')
ctx.beginPath()
ctx.roundRect(W - 210, H - 66, 165, 40, 20)
ctx.fillStyle = badgeGrad
ctx.fill()
ctx.fillStyle = '#061c12'
ctx.font = 'bold 16px Arial'
ctx.textAlign = 'center'
ctx.fillText('rimabank.ng', W - 128, H - 40)

// Save
const out = join(__dirname, 'public', 'og-image.png')
writeFileSync(out, canvas.toBuffer('image/png'))
console.log('✓ og-image.png saved to public/')
