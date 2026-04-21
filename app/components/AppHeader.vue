<script setup lang="ts">
const route = useRoute()
const { t, locale, setLocale } = useI18n()

const items = computed(() => [
  {
    label: t('nav.home'), to: '/', active: route.path === '/',
    children: [
      { label: t('nav.projects'), to: '/#projects' },
      { label: t('nav.features'), to: '/#features' },
      { label: t('nav.pricing'), to: '/#pricing' },
      { label: t('nav.team'), to: '/#testimonials' }
    ]
  },
  {
    label: t('nav.about'), to: '/about', active: route.path === '/about',
    children: [
      { label: t('nav.companyPosition'), to: '/about#intro' },
      { label: t('nav.capabilities'), to: '/about#capabilities' },
      { label: t('nav.teamAdvantages'), to: '/about#team' }
    ]
  },
  {
    label: t('nav.jobs'), to: '/jobs', active: route.path === '/jobs',
    children: [
      { label: t('nav.jobList'), to: '/jobs#job-list' },
      { label: t('nav.apply'), to: '/jobs#apply' }
    ]
  }
])

const scrolled = ref(false)
onMounted(() => {
  window.addEventListener('scroll', () => { scrolled.value = window.scrollY > 10 })
})

const openMenu = ref<string | null>(null)
const mobileOpen = ref(false)
let closeTimer: ReturnType<typeof setTimeout> | null = null

const onMouseEnter = (to: string) => {
  if (closeTimer) { clearTimeout(closeTimer); closeTimer = null }
  openMenu.value = to
}
const onMouseLeave = () => {
  closeTimer = setTimeout(() => { openMenu.value = null }, 150)
}

const joinButtonText = computed(() =>
  route.path === '/jobs' ? t('common.applyNow') : t('common.joinUs')
)
const joinButtonTo = computed(() =>
  route.path === '/jobs' ? '#apply' : '/jobs'
)

const toggleLocale = () => setLocale(locale.value === 'zh' ? 'en' : 'zh')
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16 transition-all duration-300"
    :class="scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'"
  >
    <!-- Logo -->
    <NuxtLink to="/" class="flex items-center gap-2">
      <AppLogo class="w-auto h-6 shrink-0" />
      <span class="text-sm font-semibold text-slate-200 tracking-wide">绎间科技</span>
    </NuxtLink>

    <!-- Desktop Nav -->
    <nav class="hidden lg:flex items-center gap-1">
      <div
        v-for="item in items"
        :key="item.to"
        class="relative"
        @mouseenter="onMouseEnter(item.to)"
        @mouseleave="onMouseLeave"
      >
        <NuxtLink
          :to="item.to"
          class="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors text-white/70 hover:text-[#C8B89A]"
          :class="item.active ? 'text-[#C8B89A]' : ''"
        >
          {{ item.label }}
          <UIcon name="i-lucide-chevron-down" class="size-3.5 opacity-60" />
        </NuxtLink>

        <div
          v-if="openMenu === item.to"
          class="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-max bg-slate-950/95 backdrop-blur-xl rounded-xl shadow-xl border border-[#4A78B8]/20"
          @mouseenter="onMouseEnter(item.to)"
          @mouseleave="onMouseLeave"
        >
          <div class="flex flex-col p-2 gap-0.5">
            <NuxtLink
              v-for="child in item.children"
              :key="child.to"
              :to="child.to"
              class="text-sm px-4 py-2 rounded-lg hover:bg-[#C8B89A]/10 hover:text-[#C8B89A] transition-colors text-center whitespace-nowrap text-white/70"
            >
              {{ child.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Desktop Right -->
    <div class="hidden lg:flex items-center gap-2">
      <UButton
        :label="joinButtonText"
        :to="joinButtonTo"
        size="sm"
        class="border border-[#C8B89A] text-[#C8B89A] bg-transparent hover:bg-[#C8B89A]/10 text-sm font-semibold tracking-wider"
      />
      <UButton variant="ghost" color="neutral" class="text-slate-400 hover:text-white" @click="toggleLocale">
        {{ locale === 'zh' ? 'EN' : '中文' }}
      </UButton>
    </div>

    <!-- Mobile Menu Button -->
    <UButton class="lg:hidden" variant="ghost" color="neutral" @click="mobileOpen = !mobileOpen">
      <UIcon :name="mobileOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="size-5 text-slate-300" />
    </UButton>

    <!-- Mobile Drawer -->
    <div
      v-if="mobileOpen"
      class="absolute top-16 left-0 right-0 bg-slate-950/98 backdrop-blur-xl border-b border-[#4A78B8]/20 p-4 flex flex-col gap-2 lg:hidden"
    >
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      <UButton class="mt-2" :label="joinButtonText" :to="joinButtonTo" block />
      <UButton variant="outline" color="neutral" class="mt-1" block @click="toggleLocale">
        {{ locale === 'zh' ? 'English' : '中文' }}
      </UButton>
    </div>
  </header>

  <!-- No spacer: hero section uses -mt-16 to go fullscreen -->
</template>
