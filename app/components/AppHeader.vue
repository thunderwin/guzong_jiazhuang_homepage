<script setup lang="ts">
const nuxtApp = useNuxtApp()
const route = useRoute()
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed(() => {
  if (route.path === '/jobs') {
    return [{
      label: '返回首页',
      to: '/'
    }, {
      label: '关于我们',
      to: '/about'
    }, {
      label: '岗位列表',
      to: '#job-list'
    }, {
      label: '投递方式',
      to: '#apply'
    }]
  }

  if (route.path === '/about') {
    return [{
      label: '返回首页',
      to: '/'
    }, {
      label: '公司定位',
      to: '#intro'
    }, {
      label: '核心能力',
      to: '#capabilities'
    }, {
      label: '团队优势',
      to: '#team'
    }, {
      label: '招聘岗位',
      to: '/jobs'
    }]
  }

  return [{
    label: '关于我们',
    to: '/about'
  }, {
    label: '核心能力',
    to: '#features',
    active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
  }, {
    label: '商业模式',
    to: '#pricing',
    active: activeHeadings.value.includes('pricing')
  }, {
    label: '团队实力',
    to: '#testimonials',
    active: activeHeadings.value.includes('testimonials') && !activeHeadings.value.includes('pricing')
  }, {
    label: '招聘岗位',
    to: '/jobs'
  }]
})

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
        :label="route.path === '/jobs' ? '立即投递' : '加入我们'"
        :to="route.path === '/jobs' ? '#apply' : '/jobs'"
        variant="subtle"
        class="hidden lg:block"
      />

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
        :label="route.path === '/jobs' ? '立即投递' : '加入我们'"
        :to="route.path === '/jobs' ? '#apply' : '/jobs'"
        variant="subtle"
        block
      />
    </template>
  </UHeader>
</template>
