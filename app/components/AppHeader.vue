<script setup lang="ts">
const route = useRoute()
const { t, locale, setLocale } = useI18n()

const items = computed(() => {
  const baseItems = [
    {
      label: t('nav.home'),
      to: '/',
      active: route.path === '/',
      children: [
        { label: t('nav.projects'), to: '/#projects' },
        { label: t('nav.features'), to: '/#features' },
        { label: t('nav.pricing'), to: '/#pricing' },
        { label: t('nav.team'), to: '/#testimonials' }
      ]
    },
    {
      label: t('nav.brand'),
      to: '/brand',
      active: route.path === '/brand',
      children: [
        { label: t('nav.brandScale'), to: '/brand#scale' },
        { label: t('nav.brandArchive'), to: '/brand#archive' },
        { label: t('nav.brandPortfolio'), to: '/brand#portfolio' },
        { label: t('nav.brandShowcase'), to: '/brand#showcase' }
      ]
    },
    {
      label: t('nav.about'),
      to: '/about',
      active: route.path === '/about',
      children: [
        { label: t('nav.companyPosition'), to: '/about#intro' },
        { label: t('nav.capabilities'), to: '/about#capabilities' },
        { label: t('nav.teamAdvantages'), to: '/about#team' }
      ]
    },
    {
      label: t('nav.jobs'),
      to: '/jobs',
      active: route.path === '/jobs',
      children: [
        { label: t('nav.jobList'), to: '/jobs#job-list' },
        { label: t('nav.apply'), to: '/jobs#apply' }
      ]
    }
  ]

  return baseItems
})

const navMenuUi = {
  wrapper: 'relative',
  link: 'text-sm font-medium',
  linkLeadingIcon: 'size-4',
  linkTrailingIcon: 'size-4',
  childWrapper: 'absolute top-full left-1/2 -translate-x-1/2 w-auto bg-white/50 backdrop-blur-lg rounded-lg shadow-lg',
  childLink: 'text-sm px-2 py-1 block w-full rounded-md hover:bg-primary/10 transition-colors text-center whitespace-nowrap',
  childList: 'flex flex-col border-0 p-2 gap-0.5',
  childLinkIcon: 'size-4'
}

const joinButtonText = computed(() =>
  route.path === '/jobs' ? t('common.applyNow') : t('common.joinUs')
)
const joinButtonTo = computed(() =>
  route.path === '/jobs' ? '#apply' : '/jobs'
)

const toggleLocale = () => {
  const newLocale = locale.value === 'zh' ? 'en' : 'zh'
  setLocale(newLocale)
}
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        :ui="navMenuUi"
        variant="link"
        class="hidden lg:block"
      />

      <UButton
        :label="joinButtonText"
        :to="joinButtonTo"
        variant="subtle"
        class="hidden lg:block"
      />

      <UButton
        variant="ghost"
        color="neutral"
        class="hidden whitespace-nowrap lg:block"
        @click="toggleLocale"
      >
        {{ locale === 'zh' ? 'EN' : '中文' }}
      </UButton>

      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      <UButton
        class="mt-4"
        :label="joinButtonText"
        :to="joinButtonTo"
        variant="subtle"
        block
      />
      <UButton
        variant="outline"
        color="neutral"
        class="mt-2 whitespace-nowrap"
        block
        @click="toggleLocale"
      >
        {{ locale === 'zh' ? 'English' : '中文' }}
      </UButton>
    </template>
  </UHeader>
</template>

<style>
/* 导航下拉菜单毛玻璃效果 - 针对 NuxtUI NavigationMenu */
/* 下拉菜单容器 */
nav > div > div > div,
nav li > div > div,
[data-headlessui-state] > [data-headlessui-state] > div {
  background-color: rgba(255, 255, 255, 0.5) !important;
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  border-radius: 0.5rem !important;
}

/* 下拉菜单列表 */
nav > div > div > ul,
nav li > div > ul,
[data-headlessui-state] > [data-headlessui-state] > ul {
  background-color: rgba(255, 255, 255, 0.5) !important;
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
}

/* 强制覆盖所有白色背景的下拉 */
[class*="bg-white"]:not([class*="bg-white/"]) {
  background-color: rgba(255, 255, 255, 0.5) !important;
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
}
</style>