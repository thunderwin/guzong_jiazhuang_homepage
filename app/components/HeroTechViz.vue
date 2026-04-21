<template>
  <div class="relative w-full h-full min-h-[500px] flex items-center justify-center pointer-events-none select-none">
    <svg viewBox="0 0 520 520" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#C8B89A" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#C8B89A" stop-opacity="0"/>
        </radialGradient>
        <filter id="blur1">
          <feGaussianBlur stdDeviation="3"/>
        </filter>
        <filter id="blur2">
          <feGaussianBlur stdDeviation="8"/>
        </filter>
      </defs>

      <!-- Outer rotating ring -->
      <circle cx="260" cy="260" r="220" stroke="white" stroke-opacity="0.06" stroke-width="2"/>
      <circle cx="260" cy="260" r="220" stroke="white" stroke-opacity="0.12" stroke-width="2"
        stroke-dasharray="30 20"
        :style="{ transformOrigin: '260px 260px', transform: `rotate(${r1}deg)` }"/>

      <!-- Middle ring -->
      <circle cx="260" cy="260" r="170" stroke="white" stroke-opacity="0.08" stroke-width="2"/>
      <circle cx="260" cy="260" r="170" stroke="#C8B89A" stroke-opacity="0.2" stroke-width="2"
        stroke-dasharray="15 25"
        :style="{ transformOrigin: '260px 260px', transform: `rotate(${-r2}deg)` }"/>

      <!-- Inner ring -->
      <circle cx="260" cy="260" r="110" stroke="white" stroke-opacity="0.1" stroke-width="3"
        stroke-dasharray="8 12"
        :style="{ transformOrigin: '260px 260px', transform: `rotate(${r1 * 1.5}deg)` }"/>

      <!-- Glow center -->
      <circle cx="260" cy="260" r="80" fill="url(#glow1)"/>
      <circle cx="260" cy="260" r="50" fill="url(#glow2)"/>

      <!-- House shape -->
      <g :style="{ transformOrigin: '260px 260px', transform: `scale(${pulse})` }">
        <path d="M260 190 L320 235 L320 300 L200 300 L200 235 Z"
          fill="white" fill-opacity="0.04"
          stroke="white" stroke-opacity="0.5" stroke-width="3"/>
        <path d="M260 190 L320 235" stroke="white" stroke-opacity="0.5" stroke-width="3"/>
        <path d="M260 190 L200 235" stroke="white" stroke-opacity="0.5" stroke-width="3"/>
        <!-- Door -->
        <rect x="245" y="268" width="30" height="32" rx="4"
          fill="white" fill-opacity="0.08" stroke="white" stroke-opacity="0.4" stroke-width="2"/>
        <!-- Windows -->
        <rect x="207" y="248" width="22" height="18" rx="3"
          fill="white" fill-opacity="0.08" stroke="white" stroke-opacity="0.4" stroke-width="2"/>
        <rect x="291" y="248" width="22" height="18" rx="3"
          fill="white" fill-opacity="0.08" stroke="white" stroke-opacity="0.4" stroke-width="2"/>
        <!-- Roof peak dot -->
        <circle cx="260" cy="190" r="4" fill="#C8B89A" fill-opacity="0.9"/>
      </g>

      <!-- AI circuit lines from house -->
      <g stroke="white" stroke-opacity="0.35" stroke-width="2" stroke-linecap="round">
        <line x1="260" y1="190" x2="260" y2="130"/>
        <line x1="320" y1="235" x2="370" y2="210"/>
        <line x1="320" y1="300" x2="380" y2="320"/>
        <line x1="200" y1="235" x2="150" y2="210"/>
        <line x1="200" y1="300" x2="140" y2="320"/>
      </g>

      <!-- Orbit nodes -->
      <g v-for="(node, i) in orbitNodes" :key="i">
        <circle
          :cx="260 + Math.cos((node.angle + r2 * node.dir * Math.PI / 180)) * node.r"
          :cy="260 + Math.sin((node.angle + r2 * node.dir * Math.PI / 180)) * node.r"
          :r="node.size"
          fill="white" :fill-opacity="node.opacity"/>
        <circle
          :cx="260 + Math.cos((node.angle + r2 * node.dir * Math.PI / 180)) * node.r"
          :cy="260 + Math.sin((node.angle + r2 * node.dir * Math.PI / 180)) * node.r"
          :r="node.size + 3"
          fill="white" fill-opacity="0.05" filter="url(#blur1)"/>
      </g>

      <!-- Data nodes on circuit lines -->
      <circle cx="260" cy="130" r="6" fill="#0A0A0A" stroke="#C8B89A" stroke-opacity="0.8" stroke-width="1.5"/>
      <circle cx="260" cy="130" r="2.5" fill="#C8B89A" fill-opacity="0.9"/>

      <circle cx="370" cy="210" r="6" fill="#0A0A0A" stroke="white" stroke-opacity="0.5" stroke-width="1.5"/>
      <circle cx="380" cy="320" r="6" fill="#0A0A0A" stroke="white" stroke-opacity="0.5" stroke-width="1.5"/>
      <circle cx="150" cy="210" r="6" fill="#0A0A0A" stroke="white" stroke-opacity="0.5" stroke-width="1.5"/>
      <circle cx="140" cy="320" r="6" fill="#0A0A0A" stroke="white" stroke-opacity="0.5" stroke-width="1.5"/>

      <!-- Floating data cards -->
      <g :style="{ transformOrigin: '390px 155px', transform: `translateY(${float1}px)` }">
        <rect x="355" y="135" width="90" height="40" rx="8"
          fill="white" fill-opacity="0.05" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
        <rect x="365" y="147" width="40" height="5" rx="2.5" fill="white" fill-opacity="0.5"/>
        <rect x="365" y="157" width="60" height="4" rx="2" fill="white" fill-opacity="0.25"/>
      </g>

      <g :style="{ transformOrigin: '110px 155px', transform: `translateY(${-float1}px)` }">
        <rect x="75" y="135" width="90" height="40" rx="8"
          fill="white" fill-opacity="0.05" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
        <rect x="85" y="147" width="35" height="5" rx="2.5" fill="#C8B89A" fill-opacity="0.6"/>
        <rect x="85" y="157" width="55" height="4" rx="2" fill="white" fill-opacity="0.25"/>
      </g>

      <g :style="{ transformOrigin: '390px 340px', transform: `translateY(${float2}px)` }">
        <rect x="355" y="320" width="90" height="40" rx="8"
          fill="white" fill-opacity="0.05" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
        <rect x="365" y="332" width="50" height="5" rx="2.5" fill="white" fill-opacity="0.5"/>
        <rect x="365" y="342" width="65" height="4" rx="2" fill="white" fill-opacity="0.25"/>
      </g>

      <g :style="{ transformOrigin: '110px 340px', transform: `translateY(${-float2}px)` }">
        <rect x="75" y="320" width="90" height="40" rx="8"
          fill="white" fill-opacity="0.05" stroke="white" stroke-opacity="0.15" stroke-width="1"/>
        <rect x="85" y="332" width="45" height="5" rx="2.5" fill="white" fill-opacity="0.5"/>
        <rect x="85" y="342" width="60" height="4" rx="2" fill="white" fill-opacity="0.25"/>
      </g>

      <!-- Scanning line -->
      <line
        x1="180" :y1="scanY" x2="340" :y2="scanY"
        stroke="#C8B89A" stroke-opacity="0.4" stroke-width="1"
        stroke-dasharray="4 6"/>

      <!-- Particles -->
      <g v-for="(p, i) in particles" :key="'p'+i">
        <circle :cx="p.x" :cy="p.y" :r="p.r" fill="white" :fill-opacity="p.op"/>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
const r1 = ref(0)
const r2 = ref(0)
const pulse = ref(1)
const float1 = ref(0)
const float2 = ref(0)
const scanY = ref(220)

const orbitNodes = [
  { angle: 0, r: 170, size: 4, opacity: 0.6, dir: 1 },
  { angle: Math.PI * 0.5, r: 170, size: 3, opacity: 0.4, dir: 1 },
  { angle: Math.PI, r: 170, size: 4, opacity: 0.6, dir: 1 },
  { angle: Math.PI * 1.5, r: 170, size: 3, opacity: 0.4, dir: 1 },
  { angle: Math.PI * 0.25, r: 220, size: 3, opacity: 0.3, dir: -1 },
  { angle: Math.PI * 0.75, r: 220, size: 3, opacity: 0.3, dir: -1 },
  { angle: Math.PI * 1.25, r: 220, size: 3, opacity: 0.3, dir: -1 },
  { angle: Math.PI * 1.75, r: 220, size: 3, opacity: 0.3, dir: -1 },
]

const particles = Array.from({ length: 18 }, (_, i) => ({
  x: 80 + Math.random() * 360,
  y: 80 + Math.random() * 360,
  r: 0.8 + Math.random() * 1.5,
  op: 0.1 + Math.random() * 0.3
}))

let raf: number
let t = 0
const animate = () => {
  t += 0.008
  r1.value = t * 20
  r2.value = t * 12
  pulse.value = 1 + Math.sin(t * 2) * 0.015
  float1.value = Math.sin(t * 1.2) * 6
  float2.value = Math.sin(t * 0.9 + 1) * 6
  scanY.value = 220 + Math.sin(t * 1.5) * 40
  raf = requestAnimationFrame(animate)
}

onMounted(() => { raf = requestAnimationFrame(animate) })
onUnmounted(() => cancelAnimationFrame(raf))
</script>
