<script setup lang="ts">
const nuxtApp = useNuxtApp()
const route = useRoute()
const { activeHeadings, updateHeadings } = useScrollspy()
const { t, locale, setLocale } = useI18n()

const items = computed(() => {
  if (route.path === '/jobs') {
    return [{
      label: t('nav.backToHome'),
      to: '/'
    }, {
      label: t('nav.about'),
      to: '/about'
    }, {
      label: t('nav.jobList'),
      to: '#job-list'
    }, {
      label: t('nav.apply'),
      to: '#apply'
    }]
  }

  if (route.path === '/about') {
    return [{
      label: t('nav.backToHome'),
      to: '/'
    }, {
      label: t('nav.companyPosition'),
      to: '#intro'
    }, {
      label: t('nav.capabilities'),
      to: '#capabilities'
    }, {
      label: t('nav.teamAdvantages'),
      to: '#team'
    }, {
      label: t('nav.jobs'),
      to: '/jobs'
    }]
  }

  return [{
    label: t('nav.about'),
    to: '/about'
  }, {
    label: t('nav.features'),
    to: '#features',
    active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
  }, {
    label: t('nav.pricing'),
    to: '#pricing',
    active: activeHeadings.value.includes('pricing')
  }, {
    label: t('nav.team'),
    to: '#testimonials',
    active: activeHeadings.value.includes('testimonials') && !activeHeadings.value.includes('pricing')
  }, {
    label: t('nav.jobs'),
    to: '/jobs'
  }]
})

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

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials')
  ].filter(Boolean) as Element[])
})
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
        class="hidden lg:block"
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
        class="mt-2"
        block
        @click="toggleLocale"
      >
        {{ locale === 'zh' ? 'English' : '中文' }}
      </UButton>
    </template>
  </UHeader>
</template>
