<script setup lang="ts">
const { t, locale } = useI18n()
const contactEmailLink = 'mailto:info@yijianspace.com'

const escapeHtml = (value: string) => value
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;')

const heroTitleHtml = computed(() =>
  escapeHtml(t('home.hero.title')).replace(/\*\*(.+?)\*\*/g, '<span class="text-white">$1</span>')
)

const page = computed(() => ({
  section: {
    title: t('home.section.title'),
    description: t('home.section.description'),
    features: [
      { title: t('home.section.features.frontend.title'), description: t('home.section.features.frontend.description') },
      { title: t('home.section.features.middle.title'), description: t('home.section.features.middle.description') },
      { title: t('home.section.features.backend.title'), description: t('home.section.features.backend.description') }
    ]
  },
  features: {
    title: t('home.features.title'),
    description: t('home.features.description'),
    items: [
      { title: t('home.features.items.aiDesign.title'), description: t('home.features.items.aiDesign.description'), icon: 'i-lucide-sparkles' },
      { title: t('home.features.items.supplyChain.title'), description: t('home.features.items.supplyChain.description'), icon: 'i-lucide-factory' },
      { title: t('home.features.items.customization.title'), description: t('home.features.items.customization.description'), icon: 'i-lucide-house-plus' },
      { title: t('home.features.items.delivery.title'), description: t('home.features.items.delivery.description'), icon: 'i-lucide-globe' },
      { title: t('home.features.items.growth.title'), description: t('home.features.items.growth.description'), icon: 'i-lucide-trending-up' },
      { title: t('home.features.items.data.title'), description: t('home.features.items.data.description'), icon: 'i-lucide-chart-column-increasing' }
    ]
  },
  steps: {
    title: t('home.steps.title'),
    description: t('home.steps.description'),
    items: [
      { title: t('home.steps.items.step1.title'), description: t('home.steps.items.step1.description'), icon: 'i-lucide-clipboard-list' },
      { title: t('home.steps.items.step2.title'), description: t('home.steps.items.step2.description'), icon: 'i-lucide-sparkles' },
      { title: t('home.steps.items.step3.title'), description: t('home.steps.items.step3.description'), icon: 'i-lucide-truck' }
    ]
  },
  pricing: {
    title: t('home.pricing.title'),
    description: t('home.pricing.description'),
    plans: [
      {
        title: t('home.pricing.projectPlan.title'),
        description: t('home.pricing.projectPlan.description'),
        price: t('home.pricing.projectPlan.price'),
        features: [0,1,2,3,4].map(i => t(`home.pricing.projectPlan.features.${i}`)),
        button: { label: t('home.pricing.projectPlan.button'), to: '#cta' },
        highlight: false
      },
      {
        title: t('home.pricing.channelPlan.title'),
        description: t('home.pricing.channelPlan.description'),
        price: t('home.pricing.channelPlan.price'),
        features: [0,1,2,3,4].map(i => t(`home.pricing.channelPlan.features.${i}`)),
        button: { label: t('home.pricing.channelPlan.button'), to: '#cta' },
        highlight: true
      }
    ]
  },
  testimonials: {
    title: t('home.testimonials.title'),
    description: t('home.testimonials.description'),
    items: [
      { quote: t('home.testimonials.items.team.quote'), name: t('home.testimonials.items.team.name'), role: t('home.testimonials.items.team.role') },
      { quote: t('home.testimonials.items.achievement.quote'), name: t('home.testimonials.items.achievement.name'), role: t('home.testimonials.items.achievement.role') },
      { quote: t('home.testimonials.items.vision.quote'), name: t('home.testimonials.items.vision.name'), role: t('home.testimonials.items.vision.role') }
    ]
  },
  cta: {
    title: t('home.cta.title'),
    description: t('home.cta.description'),
    button1: t('home.cta.button1'),
    button2: t('home.cta.button2')
  }
}))

const stats = computed(() => [
  { value: '$200M+', label: locale.value === 'zh' ? '年营收' : 'Annual Revenue', icon: 'i-lucide-trending-up' },
  { value: '40+', label: locale.value === 'zh' ? '覆盖国家' : 'Countries', icon: 'i-lucide-globe' },
  { value: '9', label: locale.value === 'zh' ? '实体公司' : 'Entities', icon: 'i-lucide-building-2' },
  { value: '120%', label: locale.value === 'zh' ? '年增长率' : 'YoY Growth', icon: 'i-lucide-rocket' }
])

useSeoMeta({
  title: () => t('home.seo.title'),
  ogTitle: () => t('home.seo.title'),
  description: () => t('home.seo.description'),
  ogDescription: () => t('home.seo.description')
})
</script>

<template>
  <div class="bg-[#0A0F1E] text-slate-100 overflow-hidden">

    <!-- Hero: fullscreen video, nav floats on top -->
    <section class="relative h-screen flex items-center px-8 pb-20 lg:px-16 lg:pb-24 -mt-16">
      <!-- Video fullscreen -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover" src="/video/hero-bg.mp4" />
        <div class="absolute inset-0 bg-black/40" />
        <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>

      <!-- Tech viz right side -->
      <div class="pointer-events-none absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center opacity-70">
        <HeroTechViz class="w-full h-full" />
      </div>

      <!-- Content bottom-left -->
      <div class="relative z-10 max-w-2xl">
        <h1
          :key="`hero-${locale}`"
          class="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-6 text-white uppercase"
          v-html="heroTitleHtml"
        />
        <p class="text-sm sm:text-base text-white/70 max-w-xl mb-8 leading-relaxed tracking-wide">
          {{ t('home.hero.description') }}
        </p>
        <div class="flex flex-wrap gap-4">
          <UButton
            :label="t('home.hero.cta1')"
            to="#features"
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            class="border border-[#C8B89A] text-white bg-transparent hover:bg-[#C8B89A]/10 font-semibold tracking-widest uppercase px-8"
            variant="outline"
          />
          <UButton
            :label="t('home.hero.cta2')"
            :to="contactEmailLink"
            size="lg"
            variant="ghost"
            class="text-white/60 hover:text-white tracking-widest uppercase"
          />
        </div>

        <!-- Stats -->
        <div class="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/15 pt-8">
          <div v-for="stat in stats" :key="stat.value" class="flex flex-col gap-1">
            <UIcon :name="stat.icon" class="size-4 text-white mb-1" />
            <div class="text-2xl font-bold text-white">{{ stat.value }}</div>
            <div class="text-xs text-white/40 uppercase tracking-wider">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Architecture -->
    <section class="py-20 px-4 bg-[#0A0A0A]">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <MDC :key="`section-title-${locale}`" :value="page.section.title" class="text-2xl sm:text-3xl font-light mb-4 leading-snug" />
          <p class="text-slate-400 max-w-2xl mx-auto">{{ page.section.description }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(feature, i) in page.section.features"
            :key="i"
            class="glass-card rounded-xl p-6 transition-all"
          >
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white mb-4">
              <UIcon :name="i === 0 ? 'i-lucide-layers' : i === 1 ? 'i-lucide-box' : 'i-lucide-globe'" class="size-5" />
            </div>
            <h3 class="font-semibold text-slate-100 mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="relative py-24 px-4 bg-white overflow-hidden">
      <div class="absolute inset-y-0 right-0 w-[58%] pointer-events-none hidden lg:block">
        <img src="/images/features-bg-lines.png" alt="" class="h-full w-full object-cover object-right opacity-42" />
        <div class="absolute inset-0 bg-gradient-to-l from-white/10 via-white/40 to-white" />
      </div>
      <div class="absolute inset-0 pointer-events-none lg:hidden">
        <img src="/images/features-bg-lines.png" alt="" class="h-full w-full object-cover object-right opacity-10" />
        <div class="absolute inset-0 bg-white/92" />
      </div>
      <div class="max-w-6xl mx-auto relative z-10">
        <div class="lg:w-[56%]">
          <div class="mb-10 lg:mb-12">
            <MDC :key="`features-title-${locale}`" :value="page.features.title" class="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 text-left" />
            <p class="text-slate-600 max-w-2xl text-left leading-relaxed">{{ page.features.description }}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div
              v-for="(feature, i) in page.features.items"
              :key="i"
              class="rounded-2xl border border-[#DDD7CC] bg-white/92 shadow-[0_8px_30px_rgba(15,23,42,0.05)] p-6 transition-all group"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F1EC] text-[#2F3747] mb-4 transition-transform group-hover:scale-110">
                <UIcon :name="feature.icon" class="size-6" />
              </div>
              <h3 class="text-lg font-semibold mb-2 text-slate-900 text-left">{{ feature.title }}</h3>
              <p class="text-sm text-slate-600 leading-relaxed text-left">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Steps -->
    <section id="steps" class="py-20 px-4 border-t border-[#C8B89A]/10">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-14">
          <MDC :key="`steps-title-${locale}`" :value="page.steps.title" class="text-3xl sm:text-4xl font-bold mb-4" />
          <p class="text-slate-400 max-w-2xl mx-auto">{{ page.steps.description }}</p>
        </div>
        <div class="space-y-6">
          <div v-for="(step, i) in page.steps.items" :key="i" class="flex gap-5">
            <div class="flex flex-col items-center">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#4A78B8] bg-[#4A78B8]/10 font-bold text-white text-lg">
                {{ i + 1 }}
              </div>
              <div v-if="i < page.steps.items.length - 1" class="mt-2 flex-1 w-px bg-gradient-to-b from-[#4A78B8]/50 to-transparent min-h-[3rem]" />
            </div>
            <div class="glass-card rounded-2xl p-5 flex-1 mb-2">
              <div class="flex items-center gap-3 mb-2">
                <UIcon :name="step.icon" class="size-5 text-white" />
                <h3 class="font-semibold text-slate-100">{{ step.title }}</h3>
              </div>
              <p class="text-sm text-slate-400 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="py-20 px-4 border-t border-[#C8B89A]/10">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-14">
          <MDC :key="`pricing-title-${locale}`" :value="page.pricing.title" class="text-3xl sm:text-4xl font-bold mb-4" />
          <p class="text-slate-400 max-w-2xl mx-auto">{{ page.pricing.description }}</p>
        </div>
        <div class="grid lg:grid-cols-2 gap-6">
          <div
            v-for="(plan, i) in page.pricing.plans"
            :key="i"
            class="rounded-2xl p-8 transition-all"
            :class="plan.highlight
              ? 'bg-[#3E6CA8]/10 border border-[#C8B89A]/40 ring-1 ring-[#C8B89A]/20'
              : 'glass-card'"
          >
            <h3 class="text-xl font-semibold mb-2 text-slate-100">{{ plan.title }}</h3>
            <p class="text-sm text-slate-400 mb-6">{{ plan.description }}</p>
            <div class="text-3xl font-bold mb-6 text-slate-100">
              {{ plan.price }}
            </div>
            <ul class="space-y-3 mb-8">
              <li v-for="f in plan.features" :key="f" class="flex items-start gap-2 text-sm text-slate-400">
                <UIcon name="i-lucide-check" class="mt-0.5 size-4 text-white shrink-0" />
                <span>{{ f }}</span>
              </li>
            </ul>
            <UButton
              :label="plan.button.label"
              :to="plan.button.to"
              size="lg"
              block
              :class="plan.highlight ? 'bg-[#C8B89A]/15 hover:bg-[#C8B89A]/25 text-white border border-[#C8B89A]/40' : 'border-slate-600 text-slate-300 hover:border-[#C8B89A]/40'"
              :variant="plan.highlight ? 'solid' : 'outline'"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="py-20 px-4 border-t border-[#C8B89A]/10">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <MDC :key="`testimonials-title-${locale}`" :value="page.testimonials.title" class="text-3xl sm:text-4xl font-bold mb-4" />
          <p class="text-slate-400 max-w-2xl mx-auto">{{ page.testimonials.description }}</p>
        </div>
        <div class="grid lg:grid-cols-3 gap-6">
          <div
            v-for="(item, i) in page.testimonials.items"
            :key="i"
            class="glass-card rounded-2xl p-6"
          >
            <p class="text-slate-300 italic leading-relaxed mb-6">"{{ item.quote }}"</p>
            <div class="flex items-center gap-3 border-t border-[#C8B89A]/10 pt-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A78B8]/15">
                <UIcon name="i-lucide-user" class="size-5 text-white" />
              </div>
              <div>
                <p class="font-semibold text-slate-100 text-sm">{{ item.name }}</p>
                <p class="text-xs text-slate-500">{{ item.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta" class="relative py-24 px-4 border-t border-[#C8B89A]/10 text-center overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute inset-0 bg-gradient-to-b from-[#132844]/20 to-transparent" />
        <LazyStarsBg />
      </div>
      <div class="relative z-10 max-w-2xl mx-auto">
        <MDC :key="`cta-title-${locale}`" :value="page.cta.title" class="text-3xl sm:text-4xl font-bold mb-4" />
        <p class="text-slate-400 text-lg mb-10">{{ page.cta.description }}</p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton
            :label="page.cta.button1"
            :to="contactEmailLink"
            size="xl"
            trailing-icon="i-lucide-arrow-right"
            class="bg-[#C8B89A]/10 hover:[#C8B89A]/5 text-white border-0"
          />
          <UButton
            :label="page.cta.button2"
            :to="contactEmailLink"
            size="xl"
            variant="outline"
            icon="i-lucide-handshake"
            class="border-slate-600 text-slate-300 hover:border-[#4A78B8] hover:text-white"
          />
        </div>
      </div>
    </section>

  </div>
</template>
