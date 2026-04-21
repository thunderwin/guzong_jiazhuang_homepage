<script setup lang="ts">
const { t, locale } = useI18n()
const currentYear = new Date().getFullYear()

const navGroups = computed(() => [
  {
    label: t('nav.home'),
    links: [
      { label: t('nav.features'), to: '/#features' },
      { label: t('nav.pricing'), to: '/#pricing' },
      { label: t('nav.team'), to: '/#testimonials' }
    ]
  },
  {
    label: t('nav.brand'),
    links: [
      { label: t('nav.brandScale'), to: '/brand#scale' },
      { label: t('nav.brandArchive'), to: '/brand#archive' },
      { label: t('nav.brandPortfolio'), to: '/brand#portfolio' }
    ]
  },
  {
    label: t('nav.about'),
    links: [
      { label: t('nav.companyPosition'), to: '/about#intro' },
      { label: t('nav.capabilities'), to: '/about#capabilities' },
      { label: t('nav.teamAdvantages'), to: '/about#team' }
    ]
  },
  {
    label: t('nav.jobs'),
    links: [
      { label: t('nav.jobList'), to: '/jobs#job-list' },
      { label: t('nav.apply'), to: '/jobs#apply' }
    ]
  }
])
</script>

<template>
  <footer class="bg-[#0A0A0A] border-t border-white/10 pt-16 pb-8 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Top: logo + nav -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
        <!-- Brand -->
        <div class="col-span-2 md:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-2 mb-4">
            <AppLogo class="w-auto h-6 shrink-0" />
            <span class="text-sm font-semibold text-slate-200 tracking-wide">绎间科技</span>
          </NuxtLink>
          <p class="text-xs text-slate-500 leading-relaxed">{{ t('footer.address') }}</p>
        </div>

        <!-- Nav groups -->
        <div v-for="group in navGroups" :key="group.label" class="flex flex-col gap-3">
          <p class="text-xs font-semibold uppercase tracking-widest text-[#C8B89A]">{{ group.label }}</p>
          <NuxtLink
            v-for="link in group.links"
            :key="link.to"
            :to="link.to"
            class="text-sm text-slate-400 hover:text-white transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom: copyright + contact -->
      <div class="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p class="text-xs text-slate-500">{{ t('footer.copyright', { year: currentYear }) }}</p>
        <a href="mailto:info@yijianspace.com" class="text-xs text-slate-400 hover:text-[#C8B89A] transition-colors">
          info@yijianspace.com
        </a>
      </div>
    </div>
  </footer>
</template>
