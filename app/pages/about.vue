<script setup lang="ts">
const { t } = useI18n()
const contactEmailLink = 'mailto:info@yijianspace.com'

useSeoMeta({
  title: () => t('about.seo.title'),
  description: () => t('about.seo.description')
})

const capabilities = [
  { icon: 'i-lucide-sparkles', titleKey: 'about.capabilities.frontend.title', descKey: 'about.capabilities.frontend.description' },
  { icon: 'i-lucide-factory', titleKey: 'about.capabilities.middle.title', descKey: 'about.capabilities.middle.description' },
  { icon: 'i-lucide-globe', titleKey: 'about.capabilities.backend.title', descKey: 'about.capabilities.backend.description' }
]
</script>

<template>
  <div class="bg-[#0A0F1E] text-slate-100 overflow-hidden">

    <!-- Hero -->
    <section class="relative pt-24 pb-20 px-4 text-center">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -top-40 left-1/3 w-[500px] h-[500px] rounded-full bg-[#3E6CA8]/15 blur-[120px]" />
        <div class="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#2A4E7C]/10 blur-[100px]" />
      </div>
      <div class="relative max-w-4xl mx-auto">
        <MDC :value="t('about.hero.title')" class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6" />
        <p class="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          {{ t('about.hero.description') }}
        </p>
      </div>
    </section>

    <!-- Position -->
    <section id="intro" class="py-16 px-4 border-t border-[#C8B89A]/10">
      <div class="max-w-4xl mx-auto">
        <div class="glass-card rounded-2xl p-8 lg:p-12">
          <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-slate-100">{{ t('about.position.title') }}</h2>
          <div class="space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>{{ t('about.position.p1') }}</p>
            <p>{{ t('about.position.p2') }}</p>
            <p>{{ t('about.position.p3') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities -->
    <section id="capabilities" class="relative py-20 px-4 border-t border-[#C8B89A]/10">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute left-0 top-1/2 w-[400px] h-[400px] rounded-full bg-[#3E6CA8]/10 blur-[100px]" />
        <div class="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-[#2A4E7C]/10 blur-[100px]" />
      </div>
      <div class="max-w-6xl mx-auto relative">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-14">{{ t('about.capabilities.title') }}</h2>
        <div class="grid lg:grid-cols-3 gap-6">
          <div
            v-for="cap in capabilities"
            :key="cap.titleKey"
            class="glass-card rounded-2xl p-8 transition-all group"
          >
            <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C8B89A]/15 text-white mb-6 transition-transform group-hover:scale-110">
              <UIcon :name="cap.icon" class="size-7" />
            </div>
            <h3 class="text-xl font-semibold mb-4 text-slate-100">{{ t(cap.titleKey) }}</h3>
            <p class="text-slate-400 leading-relaxed">{{ t(cap.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section id="team" class="py-20 px-4 border-t border-[#C8B89A]/10">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">{{ t('about.team.title') }}</h2>
          <p class="text-lg text-white mb-6">{{ t('about.team.subtitle') }}</p>
          <div class="space-y-4 text-slate-400 leading-relaxed">
            <p>{{ t('about.team.p1') }}</p>
            <p>{{ t('about.team.p2') }}</p>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="key in ['brands', 'revenue', 'ranking']"
            :key="key"
            class="glass-card rounded-2xl p-6 text-center"
          >
            <div class="text-3xl font-bold text-gradient mb-2">{{ t(`about.team.stats.${key}.value`) }}</div>
            <div class="text-xs text-slate-400">{{ t(`about.team.stats.${key}.label`) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Model -->
    <section class="py-16 px-4 bg-white">
      <div class="max-w-4xl mx-auto">
        <div class="rounded-2xl p-8 lg:p-12">
          <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">{{ t('about.business.title') }}</h2>
          <div class="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>{{ t('about.business.p1') }}</p>
            <p>{{ t('about.business.p2') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 px-4 border-t border-[#C8B89A]/10 text-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#132844]/20 to-transparent pointer-events-none" />
      <LazyStarsBg />
      <div class="relative z-10 max-w-2xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">{{ t('about.cta.title') }}</h2>
        <p class="text-slate-400 text-lg max-w-xl mx-auto mb-10">{{ t('about.cta.description') }}</p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton
            :label="t('about.cta.button1')"
            to="/jobs"
            icon="i-lucide-briefcase"
            size="xl"
            class="bg-[#3E6CA8] hover:bg-[#4A78B8] text-white border-0 px-8"
          />
          <UButton
            :label="t('about.cta.button2')"
            :to="contactEmailLink"
            variant="outline"
            icon="i-lucide-mail"
            size="xl"
            class="border-slate-600 text-slate-300 hover:border-[#4A78B8] hover:text-white"
          />
        </div>
      </div>
    </section>

  </div>
</template>
