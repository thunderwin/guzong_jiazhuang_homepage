<script setup lang="ts">
const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = canvasRef.value!
  const ctx = canvas.getContext('2d')!

  const resize = () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  type Meteor = {
    x: number; y: number; len: number; speed: number; opacity: number; width: number
  }

  const meteors: Meteor[] = []

  const spawn = (): Meteor => ({
    x: Math.random() * canvas.width * 1.5 - canvas.width * 0.25,
    y: -Math.random() * canvas.height * 0.5,
    len: Math.random() * 120 + 60,
    speed: Math.random() * 6 + 4,
    opacity: Math.random() * 0.6 + 0.3,
    width: Math.random() * 1.5 + 0.5
  })

  for (let i = 0; i < 120; i++) {
    const m = spawn()
    m.y = Math.random() * canvas.height
    meteors.push(m)
  }

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const m of meteors) {
      const angle = Math.PI / 4
      const dx = Math.cos(angle) * m.len
      const dy = Math.sin(angle) * m.len

      const grad = ctx.createLinearGradient(m.x, m.y, m.x - dx, m.y - dy)
      grad.addColorStop(0, `rgba(167, 139, 250, ${m.opacity})`)
      grad.addColorStop(0.4, `rgba(99, 102, 241, ${m.opacity * 0.5})`)
      grad.addColorStop(1, 'rgba(99, 102, 241, 0)')

      ctx.beginPath()
      ctx.moveTo(m.x, m.y)
      ctx.lineTo(m.x - dx, m.y - dy)
      ctx.strokeStyle = grad
      ctx.lineWidth = m.width
      ctx.stroke()

      // Head glow
      ctx.beginPath()
      ctx.arc(m.x, m.y, m.width * 1.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(196, 181, 253, ${m.opacity})`
      ctx.fill()

      m.x += m.speed * Math.cos(angle)
      m.y += m.speed * Math.sin(angle)

      if (m.y > canvas.height + 100 || m.x > canvas.width + 100) {
        Object.assign(m, spawn())
      }
    }

    requestAnimationFrame(draw)
  }

  draw()

  onUnmounted(() => window.removeEventListener('resize', resize))
})
</script>

<template>
  <canvas ref="canvasRef" class="absolute inset-0 w-full h-full" />
</template>
