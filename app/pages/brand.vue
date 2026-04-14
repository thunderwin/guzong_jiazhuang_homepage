<script setup lang="ts">
const { t, locale } = useI18n()

useSeoMeta({
  title: () => t('brand.seo.title'),
  ogTitle: () => t('brand.seo.title'),
  description: () => t('brand.seo.description'),
  ogDescription: () => t('brand.seo.description')
})

const stats = [
  { value: '$200M', label: t('brand.stats.revenue'), sublabel: t('brand.stats.revenueSub') },
  { value: '40+', label: t('brand.stats.presence'), sublabel: t('brand.stats.presenceSub') },
  { value: '09', label: t('brand.stats.hubs'), sublabel: t('brand.stats.hubsSub') },
  { value: '120%', label: t('brand.stats.growth'), sublabel: t('brand.stats.growthSub') }
]

const timeline = [
  { year: '2016', name: 'INSONG Limited', nameZh: '新松贸易有限公司', tag: t('brand.timeline.trade'), description: t('brand.timeline.tradeDesc') },
  { year: '2020', name: 'POPMAISON INC', nameZh: '广州美颂科技有限公司', tag: t('brand.timeline.aesthetic'), description: t('brand.timeline.aestheticDesc') },
  { year: '2024', name: 'PurpleFyre Global', nameZh: '紫火跨境', tag: t('brand.timeline.operations'), description: t('brand.timeline.operationsDesc') },
  { year: '2026', name: 'Arcaya Limited', nameZh: '佛山绎间科技有限公司', tag: t('brand.timeline.frontier'), description: t('brand.timeline.frontierDesc'), highlight: true }
]

const heritageBrands = [
  { name: 'Pop Maison', logo: '/images/brand/heritage-1.png', description: t('brand.portfolio.heritageBrands.popmaison') },
  { name: 'Kate', logo: '/images/brand/heritage-2.png', description: t('brand.portfolio.heritageBrands.kate') },
  { name: 'Ever Wallpaper', logo: '/images/brand/heritage-3.png', description: t('brand.portfolio.heritageBrands.everwallpaper') },
  { name: 'INYOUTHS', logo: '/images/brand/heritage-4.png', description: t('brand.portfolio.heritageBrands.inyouths') },
  { name: 'Neutype', logo: '/images/brand/heritage-5.png', description: t('brand.portfolio.heritageBrands.neutype') },
  { name: 'Nabis', logo: '/images/brand/heritage-6.png', description: t('brand.portfolio.heritageBrands.nabis') }
]

const logisticsBrands = [
  { name: 'Boxking', logo: '/images/brand/logistics-1.png', description: t('brand.portfolio.logisticsBrands.boxking') },
  { name: 'LeafPackage', logo: '/images/brand/logistics-2.png', description: t('brand.portfolio.logisticsBrands.leafpackage') },
  { name: 'VENDOROAD', logo: '/images/brand/logistics-3.png', description: t('brand.portfolio.logisticsBrands.vendoroad') }
]
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(1200px_520px_at_12%_-8%,rgba(16,185,129,0.22),transparent_62%),radial-gradient(860px_420px_at_88%_8%,rgba(6,182,212,0.18),transparent_60%)] dark:bg-[radial-gradient(1200px_520px_at_12%_-8%,rgba(16,185,129,0.28),transparent_62%),radial-gradient(860px_420px_at_88%_8%,rgba(6,182,212,0.24),transparent_60%)]" />

    <UPageHero
      :ui="{
        container: 'md:pt-20 lg:pt-24 relative',
        title: 'max-w-4xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
        description: 'text-lg sm:text-xl text-muted max-w-2xl mx-auto mt-6'
      }"
    >
      <template #title>
        <h1 :key="`brand-hero-title-${locale}`" class="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
          <span class="block whitespace-nowrap">{{ t('brand.hero.title1') }}</span>
          <span class="italic font-normal text-primary block">{{ t('brand.hero.title2') }}</span>
        </h1>
      </template>

      <template #description>
        <p class="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed text-center">
          {{ t('brand.hero.description') }}
        </p>
      </template>
    </UPageHero>

    <section id="scale" class="py-24 bg-surface/50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div class="lg:col-span-5">
            <h2 class="text-4xl md:text-5xl leading-tight mb-8 whitespace-nowrap font-bold">
              {{ t('brand.scale.title1') }}<br/><span class="text-primary">{{ t('brand.scale.title2') }}</span>
            </h2>
            <div class="space-y-6 text-muted leading-relaxed text-lg max-w-xl">
              <p>{{ t('brand.scale.desc1') }}</p>
              <p>{{ t('brand.scale.desc2') }}</p>
            </div>
          </div>
          <div class="lg:col-span-6 lg:offset-1">
            <div class="grid grid-cols-2 gap-4 border border-default rounded-2xl overflow-hidden shadow-xl bg-default">
              <div
                v-for="(stat, index) in stats"
                :key="index"
                class="p-8 flex flex-col justify-center items-center text-center bg-default"
                :class="index % 2 === 1 ? 'border-l border-default' : ''"
                :style="index >= 2 ? 'border-top: 1px solid var(--border-default)' : ''"
              >
                <span class="text-xs uppercase tracking-widest text-primary mb-3 font-bold">{{ stat.label }}</span>
                <span class="text-4xl font-bold mb-1">{{ stat.value }}</span>
                <span class="text-xs text-muted">{{ stat.sublabel }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <USeparator :ui="{ border: 'border-primary/20' }" />

    <section id="archive" class="py-24 bg-default">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mb-20">
          <h2 class="text-5xl md:text-6xl mb-8 font-bold tracking-tighter uppercase">
            {{ t('brand.archive.title1') }} <span class="italic font-normal text-primary">{{ t('brand.archive.title2') }}</span>
          </h2>
          <p class="text-muted text-xl">{{ t('brand.archive.description') }}</p>
        </div>
        <div class="space-y-0">
          <div
            v-for="(item, index) in timeline"
            :key="index"
            class="grid grid-cols-12 gap-8 items-start py-10"
            :class="index === 0 ? 'border-t-2 border-default' : 'border-t border-default'"
          >
            <div class="col-span-12 md:col-span-2">
              <span
                class="text-5xl font-bold"
                :class="item.highlight ? 'text-primary' : 'text-primary/40'"
              >{{ item.year }}</span>
            </div>
            <div class="col-span-12 md:col-span-4">
              <div class="flex flex-col gap-1">
                <h3 class="text-3xl font-bold tracking-tight">{{ item.name }}</h3>
                <h3 class="text-2xl font-bold opacity-60">{{ item.nameZh }}</h3>
                <p class="text-xs text-primary uppercase tracking-widest mb-4 font-bold">{{ item.tag }}</p>
              </div>
            </div>
            <div class="col-span-12 md:col-span-6">
              <p class="text-muted text-lg leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <USeparator :ui="{ border: 'border-primary/20' }" />

    <section id="portfolio" class="py-24 bg-surface/50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-5xl md:text-6xl text-center mb-24 font-bold uppercase tracking-wider">
          {{ t('brand.portfolio.title') }}
        </h2>
        
        <div class="mb-20">
          <div class="flex items-center gap-6 mb-8">
            <span class="text-xs tracking-widest uppercase text-primary font-bold">{{ t('brand.portfolio.heritage') }}</span>
            <div class="h-[2px] flex-grow bg-default/10"></div>
            <span class="text-sm font-bold">{{ t('brand.portfolio.heritageYear') }}</span>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-2 border-default rounded-xl overflow-visible shadow-xl bg-default relative">
            <div
              v-for="(brand, index) in heritageBrands"
              :key="index"
              class="aspect-[4/3] flex items-center justify-center p-4 relative group"
              :class="(index % 3 !== 2 || index === 5) ? 'border-r border-default/10' : ''"
            >
              <img :src="brand.logo" :alt="brand.name" class="max-w-full max-h-full object-contain" />
              
              <div 
                class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-default border border-default rounded-lg shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20"
              >
                <h3 class="text-base font-bold text-primary mb-2 text-center">{{ brand.name }}</h3>
                <p class="text-sm text-muted text-center leading-relaxed">{{ brand.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="flex items-center gap-6 mb-8">
            <span class="text-xs tracking-widest uppercase text-primary font-bold">{{ t('brand.portfolio.logistics') }}</span>
            <div class="h-[2px] flex-grow bg-default/10"></div>
            <span class="text-sm font-bold">{{ t('brand.portfolio.logisticsYear') }}</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-default/10 border-2 border-default rounded-xl overflow-visible shadow-xl relative">
            <div
              v-for="(brand, index) in logisticsBrands"
              :key="index"
              class="bg-default flex items-center justify-center h-36 p-4 relative group"
            >
              <img :src="brand.logo" :alt="brand.name" class="max-w-full max-h-full object-contain" />
              
              <div 
                class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-default border border-default rounded-lg shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20"
              >
                <h3 class="text-base font-bold text-primary mb-2 text-center">{{ brand.name }}</h3>
                <p class="text-sm text-muted text-center leading-relaxed">{{ brand.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <USeparator />

    <!-- Brand Showcase Carousel -->
    <BrandShowcaseCarousel />

    <USeparator />

    <UPageCTA
      :title="t('brand.cta.title')"
      :description="t('brand.cta.description')"
      variant="naked"
      class="overflow-hidden relative"
      :ui="{
        container: 'py-16 sm:py-20',
        title: 'text-3xl sm:text-4xl font-bold',
        description: 'text-lg text-muted max-w-xl mx-auto mt-4'
      }"
    >
      <template #title>
        <MDC :key="`brand-cta-title-${locale}`" :value="t('brand.cta.title')" />
      </template>

      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>
    </UPageCTA>
  </div>
</template>