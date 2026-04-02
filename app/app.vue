<script setup lang="ts">
const colorMode = useColorMode()
const { locale } = useI18n()

const color = computed(() => colorMode.value === 'dark' ? '#171717' : 'white')
const siteName = computed(() =>
  locale.value === 'zh'
    ? '佛山市绎间科技有限公司'
    : 'Foshan Yijian Technology Co., Ltd.'
)
const seoKeywords = computed(() =>
  locale.value === 'zh'
    ? '佛山市绎间科技有限公司,全屋设计出海,跨境家装,AI设计,中国供应链,全球交付'
    : 'Foshan Yijian Technology Co., Ltd.,global home design,cross-border home furnishing,AI design,China supply chain,global delivery'
)

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: computed(() => locale.value === 'zh' ? 'zh-CN' : 'en-US')
  }
})

useSeoMeta({
  ogSiteName: () => siteName.value,
  applicationName: () => siteName.value,
  keywords: () => seoKeywords.value,
  ogImage: '/templates/landing.png',
  twitterImage: '/templates/landing.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp :toaster="{ expand: false }">
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <AppFooter />
  </UApp>
</template>
