<script setup lang="ts">
const { t } = useI18n()
const contactEmailLink = 'mailto:info@yijianspace.com'

useSeoMeta({
  title: () => t('about.seo.title'),
  description: () => t('about.seo.description')
})
</script>

<template>
  <div class="relative">
    <div class="absolute -top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

    <UPageHero
      :ui="{ container: 'py-20 lg:py-28', title: 'max-w-4xl mx-auto' }"
    >
      <template #title>
        <MDC :value="t('about.hero.title')" class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6" />
      </template>

      <template #description>
        <div class="text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          {{ t('about.hero.description') }}
        </div>
      </template>
    </UPageHero>

    <section id="intro" class="py-16 lg:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl border border-default bg-default/50 p-8 lg:p-12">
          <h2 class="text-2xl sm:text-3xl font-bold mb-6">{{ t('about.position.title') }}</h2>
          <div class="prose prose-lg max-w-none text-muted">
            <p class="mb-4">{{ t('about.position.p1') }}</p>
            <p class="mb-4">{{ t('about.position.p2') }}</p>
            <p>{{ t('about.position.p3') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="capabilities" class="py-16 lg:py-20 relative overflow-hidden">
      <div class="absolute rounded-full -left-20 top-20 size-[400px] bg-primary/10 blur-[150px]" />
      <div class="absolute rounded-full -right-20 bottom-20 size-[400px] bg-primary/10 blur-[150px]" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">{{ t('about.capabilities.title') }}</h2>
        </div>

        <div class="grid gap-8 lg:grid-cols-3">
          <div class="group rounded-2xl border border-default bg-default/50 p-8 transition-all hover:border-primary/30 hover:bg-default/80 hover:shadow-lg">
            <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UIcon name="i-lucide-sparkles" class="size-7" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ t('about.capabilities.frontend.title') }}</h3>
            <p class="text-muted leading-relaxed">{{ t('about.capabilities.frontend.description') }}</p>
          </div>

          <div class="group rounded-2xl border border-default bg-default/50 p-8 transition-all hover:border-primary/30 hover:bg-default/80 hover:shadow-lg">
            <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UIcon name="i-lucide-factory" class="size-7" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ t('about.capabilities.middle.title') }}</h3>
            <p class="text-muted leading-relaxed">{{ t('about.capabilities.middle.description') }}</p>
          </div>

          <div class="group rounded-2xl border border-default bg-default/50 p-8 transition-all hover:border-primary/30 hover:bg-default/80 hover:shadow-lg">
            <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UIcon name="i-lucide-globe" class="size-7" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ t('about.capabilities.backend.title') }}</h3>
            <p class="text-muted leading-relaxed">{{ t('about.capabilities.backend.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="team" class="py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold mb-4">{{ t('about.team.title') }}</h2>
            <p class="text-lg text-muted mb-6">{{ t('about.team.subtitle') }}</p>
            <div class="prose prose-lg max-w-none text-muted">
              <p class="mb-4">{{ t('about.team.p1') }}</p>
              <p>{{ t('about.team.p2') }}</p>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="text-center p-6 rounded-2xl border border-default bg-default/50">
              <div class="text-3xl sm:text-4xl font-bold text-primary mb-2">{{ t('about.team.stats.brands.value') }}</div>
              <div class="text-sm text-muted">{{ t('about.team.stats.brands.label') }}</div>
            </div>
            <div class="text-center p-6 rounded-2xl border border-default bg-default/50">
              <div class="text-3xl sm:text-4xl font-bold text-primary mb-2">{{ t('about.team.stats.revenue.value') }}</div>
              <div class="text-sm text-muted">{{ t('about.team.stats.revenue.label') }}</div>
            </div>
            <div class="text-center p-6 rounded-2xl border border-default bg-default/50">
              <div class="text-3xl sm:text-4xl font-bold text-primary mb-2">{{ t('about.team.stats.ranking.value') }}</div>
              <div class="text-sm text-muted">{{ t('about.team.stats.ranking.label') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 lg:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl border border-default bg-default/50 p-8 lg:p-12">
          <h2 class="text-2xl sm:text-3xl font-bold mb-6">{{ t('about.business.title') }}</h2>
          <div class="prose prose-lg max-w-none text-muted">
            <p class="mb-4">{{ t('about.business.p1') }}</p>
            <p>{{ t('about.business.p2') }}</p>
          </div>
        </div>
      </div>
    </section>

    <UPageCTA
      variant="naked"
      class="overflow-hidden relative py-20"
    >
      <div class="text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">{{ t('about.cta.title') }}</h2>
        <p class="text-lg text-muted max-w-xl mx-auto mb-8">{{ t('about.cta.description') }}</p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton
            :label="t('about.cta.button1')"
            to="/jobs"
            icon="i-lucide-briefcase"
            size="xl"
          />
          <UButton
            :label="t('about.cta.button2')"
            :to="contactEmailLink"
            variant="outline"
            icon="i-lucide-mail"
            size="xl"
          />
        </div>
      </div>

      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
